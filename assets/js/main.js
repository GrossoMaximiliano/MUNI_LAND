/* =========================================================
   Interacciones del sitio. Cada módulo se activa sólo si
   encuentra sus elementos en la página.
   ========================================================= */
(function () {
  "use strict";
  var S = window.SITE;
  document.documentElement.classList.remove("no-js");

  /* ---------- Utilidades ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  function fmtDate(iso, short) {
    var p = iso.split("-");
    var m = MESES[+p[1] - 1];
    return short ? (+p[2]) + " " + m.slice(0, 3) + ". " + p[0] : (+p[2]) + " de " + m + " de " + p[0];
  }
  function initials(name) { return name.split(" ").map(function (w) { return w[0]; }).slice(0, 2).join(""); }
  function norm(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }
  var toastTimer;
  function toast(msg) {
    var t = $("#toast"); if (!t) return;
    $("span", t).textContent = msg;
    t.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("is-visible"); }, 2800);
  }
  var sorted = S.noticias.slice().sort(function (a, b) { return b.fecha.localeCompare(a.fecha); });

  /* ---------- Accesibilidad: tamaño de texto y contraste ---------- */
  (function () {
    var root = document.documentElement;
    var size = parseInt(store("lt-font"), 10) || 16;
    function apply() { root.style.setProperty("--fs-base", size + "px"); }
    apply();
    $$("[data-font]").forEach(function (b) {
      b.addEventListener("click", function () {
        size = Math.min(22, Math.max(14, size + parseInt(b.getAttribute("data-font"), 10) * 2));
        apply(); store("lt-font", size);
      });
    });
    var btn = $("#contrastToggle");
    var themeBtn = $("#themeToggle");
    var themeMeta = $('meta[name="theme-color"]');
    function setContrast(on) {
      root.classList.toggle("high-contrast", on);
      if (btn) btn.setAttribute("aria-pressed", on ? "true" : "false");
    }
    // Modo oscuro: el <head> ya aplica la clase antes de pintar (evita parpadeo).
    // Alto contraste y modo oscuro son excluyentes.
    function setDark(on) {
      root.classList.toggle("dark-mode", on);
      if (themeMeta) themeMeta.setAttribute("content", on ? "#061423" : "#0b2a4a");
      if (themeBtn) {
        themeBtn.setAttribute("aria-pressed", on ? "true" : "false");
        themeBtn.setAttribute("aria-label", on ? "Desactivar modo oscuro" : "Activar modo oscuro");
        themeBtn.setAttribute("title", on ? "Modo claro" : "Modo oscuro");
        themeBtn.innerHTML = '<i class="fa-solid ' + (on ? "fa-sun" : "fa-moon") + '"></i>';
      }
    }
    setContrast(store("lt-contrast") === "1");
    setDark(root.classList.contains("dark-mode") && !root.classList.contains("high-contrast"));
    if (btn) btn.addEventListener("click", function () {
      var on = !root.classList.contains("high-contrast");
      setContrast(on); store("lt-contrast", on ? "1" : "0");
      if (on && root.classList.contains("dark-mode")) { setDark(false); store("lt-theme", "light"); }
    });
    if (themeBtn) themeBtn.addEventListener("click", function () {
      var on = !root.classList.contains("dark-mode");
      setDark(on); store("lt-theme", on ? "dark" : "light");
      if (on && root.classList.contains("high-contrast")) { setContrast(false); store("lt-contrast", "0"); }
    });
  })();

  /* ---------- Header con sombra + volver arriba ---------- */
  (function () {
    var header = $("#header"), top = $("#toTop");
    function onScroll() {
      var y = window.scrollY;
      if (header) header.classList.toggle("is-scrolled", y > 10);
      if (top) top.classList.toggle("is-visible", y > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (top) top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  })();

  /* ---------- Menú móvil ---------- */
  (function () {
    var drawer = $("#drawer"), toggle = $("#navToggle"), close = $("#drawerClose"), backdrop = $("#drawerBackdrop");
    if (!drawer || !toggle) return;
    function open() {
      drawer.classList.add("is-open"); backdrop.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false"); toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("no-scroll");
      close.focus();
    }
    function shut() {
      drawer.classList.remove("is-open"); backdrop.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true"); toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    }
    toggle.addEventListener("click", open);
    close.addEventListener("click", function () { shut(); toggle.focus(); });
    backdrop.addEventListener("click", shut);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && drawer.classList.contains("is-open")) { shut(); toggle.focus(); } });
    window.addEventListener("resize", function () { if (window.innerWidth >= 1200) shut(); });
  })();

  /* ---------- Componentes de render ---------- */
  function newsCard(n) {
    var media = n.img
      ? '<div class="news-card__media"><img src="' + n.img + '" alt="" loading="lazy"><span class="news-card__tag">' + esc(n.cat) + '</span></div>'
      : '<div class="news-card__media news-card__media--ph"><img src="assets/img/escudo-256.png" alt=""><span class="news-card__tag">' + esc(n.cat) + '</span></div>';
    return '<a class="news-card" href="noticias.html?id=' + n.id + '">' + media +
      '<div class="news-card__body">' +
        '<span class="news-card__date"><i class="fa-regular fa-calendar"></i>' + fmtDate(n.fecha) + '</span>' +
        '<h3 class="news-card__title">' + esc(n.titulo) + '</h3>' +
        '<p class="news-card__excerpt">' + esc(n.bajada) + '</p>' +
        '<span class="link-arrow news-card__more">Leer noticia <i class="fa-solid fa-arrow-right"></i></span>' +
      '</div></a>';
  }

  function phoneCard(p) {
    return '<div class="phone' + (p.urgente ? " phone--urgent" : "") + '">' +
      '<span class="phone__cat">' + esc(p.cat) + '</span>' +
      '<span class="phone__name">' + esc(p.nombre) + '</span>' +
      '<div class="phone__nums">' + p.nums.map(function (n) {
        return '<a href="tel:' + n[1] + '"><i class="fa-solid fa-phone"></i>' + n[0] + '</a>';
      }).join("") + '</div>' +
      '<span class="phone__note">' + esc(p.nota) + '</span></div>';
  }

  function teamCard(g) {
    return '<article class="team-card reveal">' +
      '<div class="team-card__top"><span class="avatar" aria-hidden="true">' + initials(g.nombre) + '</span>' +
        '<div><span class="team-card__area">' + esc(g.area) + '</span>' +
        '<h3 class="team-card__name">' + esc(g.nombre) + '</h3>' +
        '<span class="team-card__role">' + esc(g.cargo) + '</span></div></div>' +
      '<p>' + esc(g.desc) + '</p>' +
      '<a class="team-card__mail" href="mailto:' + g.email + '"><i class="fa-regular fa-envelope"></i>' + g.email + '</a>' +
    '</article>';
  }

  var featured = sorted.filter(function (n) { return n.destacada; })[0] || sorted[0];
  $$("[data-news-feature]").forEach(function (el) {
    var n = featured;
    el.href = "noticias.html?id=" + n.id;
    el.innerHTML =
      '<div class="news-feature__media"><img src="' + n.img + '" alt=""></div>' +
      '<div class="news-feature__body">' +
        '<span class="eyebrow">Destacada · ' + esc(n.cat) + '</span>' +
        '<h3>' + esc(n.titulo) + '</h3>' +
        '<p class="muted">' + esc(n.bajada) + '</p>' +
        '<span class="news-card__date"><i class="fa-regular fa-calendar"></i>' + fmtDate(n.fecha) + '</span>' +
        '<span class="link-arrow mt-2">Leer noticia completa <i class="fa-solid fa-arrow-right"></i></span>' +
      '</div>';
  });
  $$("[data-news]").forEach(function (el) {
    var n = parseInt(el.getAttribute("data-news"), 10) || 3;
    var list = el.hasAttribute("data-news-skip-featured") ? sorted.filter(function (x) { return x !== featured; }) : sorted;
    el.innerHTML = list.slice(0, n).map(newsCard).join("");
  });
  $$("[data-phones]").forEach(function (el) {
    var mode = el.getAttribute("data-phones");
    var list = S.telefonos.filter(function (p) { return mode === "all" || (mode === "urgent" ? p.urgente : !p.urgente); });
    el.innerHTML = list.map(phoneCard).join("");
  });
  $$("[data-gabinete]").forEach(function (el) { el.innerHTML = S.gabinete.map(teamCard).join(""); });
  $$("[data-org]").forEach(function (el) {
    el.innerHTML = S.gabinete.map(function (g) {
      return '<div class="org__node">' + esc(g.area) + '<small>' + esc(g.nombre) + '</small></div>';
    }).join("");
  });
  $$("[data-directorio]").forEach(function (el) {
    el.innerHTML = S.directorio.map(function (d) {
      return '<li><strong>' + esc(d.area) + '</strong><a href="mailto:' + d.email + '">' + d.email + '</a></li>';
    }).join("");
  });
  $$("[data-tramites-featured]").forEach(function (el) {
    var ids = el.getAttribute("data-tramites-featured").split(",");
    el.innerHTML = ids.map(function (id) {
      var t = S.tramites.filter(function (x) { return x.id === id; })[0];
      if (!t) return "";
      return '<a class="card card--hover reveal" href="tramites.html#' + t.id + '" style="display:flex;flex-direction:column;color:inherit">' +
        '<span class="card__icon"><i class="fa-solid ' + t.icono + '"></i></span>' +
        '<span class="eyebrow" style="margin-bottom:6px">' + esc(t.cat) + '</span>' +
        '<h3>' + esc(t.titulo) + '</h3><p>' + esc(t.resumen) + '</p>' +
        '<span class="link-arrow" style="margin-top:auto">Ver requisitos <i class="fa-solid fa-arrow-right"></i></span></a>';
    }).join("");
  });

  /* ---------- Slider del hero ---------- */
  (function () {
    var slides = $$(".hero__slide");
    if (slides.length < 2) return;
    var dotsWrap = $(".hero__dots"), i = 0, timer;
    dotsWrap.innerHTML = slides.map(function (_, k) {
      return '<button class="hero__dot" type="button" aria-label="Ver imagen ' + (k + 1) + '"></button>';
    }).join("");
    var dots = $$(".hero__dot", dotsWrap);
    function go(n) {
      slides[i].classList.remove("is-active"); dots[i].classList.remove("is-active");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("is-active"); dots[i].classList.add("is-active");
    }
    function play() { clearInterval(timer); timer = setInterval(function () { go(i + 1); }, 6500); }
    dots.forEach(function (d, k) { d.addEventListener("click", function () { go(k); play(); }); });
    var prev = $(".hero__arrow--prev"), next = $(".hero__arrow--next");
    if (prev) prev.addEventListener("click", function () { go(i - 1); play(); });
    if (next) next.addEventListener("click", function () { go(i + 1); play(); });
    dots[0].classList.add("is-active");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) play();
  })();

  /* ---------- Buscador global (home) ---------- */
  (function () {
    var input = $("#finderInput"), results = $("#finderResults");
    if (!input) return;
    var index = []
      .concat(S.tramites.map(function (t) { return { t: t.titulo, d: "Trámite · " + t.cat, h: "tramites.html#" + t.id, i: t.icono, k: t.titulo + " " + t.resumen + " " + t.cat }; }))
      .concat(sorted.map(function (n) { return { t: n.titulo, d: "Noticia · " + fmtDate(n.fecha), h: "noticias.html?id=" + n.id, i: "fa-newspaper", k: n.titulo + " " + n.bajada }; }))
      .concat(S.gabinete.map(function (g) { return { t: g.area, d: "Gabinete · " + g.nombre, h: "gestion.html", i: g.icono, k: g.area + " " + g.nombre + " " + g.desc }; }))
      .concat([
        { t: "Autogestión: pagar tasas online", d: "Portal de servicios", h: S.muni.autogestion, i: "fa-user-shield", k: "pagar pago tasas boleta deuda online autogestion portal" },
        { t: "Capacitaciones gratuitas con certificado", d: "Plataforma de Capacitaciones", h: S.muni.cursos, i: "fa-graduation-cap", k: "curso cursos capacitacion capacitarme aprender certificado oficio taller gratis electricidad costura programacion" },
        { t: "Empleo Local: ofertas y oficios", d: "Plataforma de empleo", h: S.muni.empleo, i: "fa-briefcase", k: "empleo trabajo laburo oficio oficios profesional albañil electricista plomero carpintero busqueda personal empresa cv perfil" },
        { t: "Trabajo y capacitación", d: "Programa municipal", h: "trabajo.html", i: "fa-people-arrows", k: "trabajo empleo capacitacion oficios empresas comercios" },
        { t: "Teléfonos útiles y emergencias", d: "Contacto", h: "contacto.html#telefonos", i: "fa-phone", k: "telefono emergencia bomberos policia hospital epe luz" },
        { t: "Ordenanzas, decretos y balances", d: "Transparencia", h: "transparencia.html", i: "fa-scale-balanced", k: "ordenanza decreto balance digesto presupuesto transparencia" },
        { t: "Turismo en Las Toscas", d: "Turismo", h: "turismo.html", i: "fa-tree", k: "turismo pesca hospedaje gastronomia jaaukanigas isla rio" }
      ]);
    var active = -1;
    function render(q) {
      var nq = norm(q.trim());
      if (!nq) { results.classList.remove("is-open"); input.setAttribute("aria-expanded", "false"); return; }
      var words = nq.split(/\s+/);
      var hits = index.filter(function (it) { var k = norm(it.t + " " + it.k); return words.every(function (w) { return k.indexOf(w) > -1; }); }).slice(0, 8);
      active = -1;
      results.innerHTML = hits.length
        ? hits.map(function (h) {
            var ext = h.h.indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : "";
            return '<li><a href="' + h.h + '"' + ext + '><i class="fa-solid ' + h.i + '"></i><span>' + esc(h.t) + '<small>' + esc(h.d) + '</small></span></a></li>';
          }).join("")
        : '<li class="finder__empty">No encontramos resultados para “' + esc(q) + '”. Probá con otra palabra o <a href="contacto.html">contactanos</a>.</li>';
      results.classList.add("is-open");
      input.setAttribute("aria-expanded", "true");
    }
    input.addEventListener("input", function () { render(input.value); });
    input.addEventListener("focus", function () { if (input.value) render(input.value); });
    input.addEventListener("keydown", function (e) {
      var links = $$("a", results);
      if (!links.length) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        active = (active + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
        links.forEach(function (l, k) { l.classList.toggle("is-focused", k === active); });
      } else if (e.key === "Enter") {
        e.preventDefault();
        (links[active] || links[0]).click();
      } else if (e.key === "Escape") {
        results.classList.remove("is-open");
      }
    });
    document.addEventListener("click", function (e) { if (!e.target.closest(".finder__field")) results.classList.remove("is-open"); });
    $$("[data-finder]").forEach(function (chip) {
      chip.addEventListener("click", function () { input.value = chip.getAttribute("data-finder"); render(input.value); input.focus(); });
    });
  })();

  /* ---------- Contadores animados ---------- */
  (function () {
    var nums = $$("[data-count]");
    if (!nums.length) return;
    function run(el) {
      var end = parseFloat(el.getAttribute("data-count")), dur = 1600, start = null;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
        el.textContent = v.toLocaleString("es-AR");
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!("IntersectionObserver" in window)) { nums.forEach(function (n) { n.textContent = (+n.getAttribute("data-count")).toLocaleString("es-AR"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
    }, { threshold: .5 });
    nums.forEach(function (n) { io.observe(n); });
  })();

  /* ---------- Trámites: buscador, filtros y acordeón ---------- */
  (function () {
    var list = $("#tramitesList");
    if (!list) return;
    var search = $("#tramitesSearch"), filters = $("#tramitesFilters"), count = $("#tramitesCount");
    var cats = ["Todos"].concat(S.tramites.map(function (t) { return t.cat; }).filter(function (c, k, a) { return a.indexOf(c) === k; }));
    var cat = "Todos";
    filters.innerHTML = cats.map(function (c) { return '<button type="button" class="chip' + (c === cat ? " is-active" : "") + '" data-cat="' + c + '">' + c + '</button>'; }).join("");

    function item(t) {
      var actions = "";
      if (t.pdf) actions += '<a class="btn btn--primary btn--sm" href="' + t.pdf + '" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i>Descargar formulario</a>';
      if (t.link) actions += '<a class="btn btn--outline btn--sm" href="' + t.link + '"' + (t.link.indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : "") + '><i class="fa-solid fa-arrow-up-right-from-square"></i>Iniciar online</a>';
      return '<div class="acc" id="' + t.id + '">' +
        '<button class="acc__head" type="button" aria-expanded="false" aria-controls="p-' + t.id + '">' +
          '<span class="acc__icon"><i class="fa-solid ' + t.icono + '"></i></span>' +
          '<span class="acc__title"><strong>' + esc(t.titulo) + '</strong><span>' + esc(t.resumen) + '</span></span>' +
          '<span class="acc__cat">' + esc(t.cat) + '</span>' +
          '<span class="acc__chev"><i class="fa-solid fa-chevron-down"></i></span>' +
        '</button>' +
        '<div class="acc__panel" id="p-' + t.id + '" role="region"><div class="acc__inner"><div class="acc__content">' +
          '<div><h4>Requisitos</h4><ul class="checklist">' + t.requisitos.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + '</ul>' +
            (actions ? '<div class="flex-gap mt-3">' + actions + '</div>' : "") + '</div>' +
          '<div class="info-box">' +
            '<div class="info-row"><i class="fa-solid fa-location-dot"></i><div><b>Dónde</b>' + esc(t.lugar) + '</div></div>' +
            '<div class="info-row"><i class="fa-regular fa-clock"></i><div><b>Horario</b>' + esc(t.horario) + '</div></div>' +
            '<div class="info-row"><i class="fa-solid fa-coins"></i><div><b>Costo</b>' + esc(t.costo) + '</div></div>' +
          '</div>' +
        '</div></div></div></div>';
    }

    function render() {
      var q = norm(search.value.trim());
      var res = S.tramites.filter(function (t) {
        return (cat === "Todos" || t.cat === cat) && (!q || norm(t.titulo + " " + t.resumen + " " + t.requisitos.join(" ")).indexOf(q) > -1);
      });
      count.textContent = res.length + (res.length === 1 ? " trámite encontrado" : " trámites encontrados");
      list.innerHTML = res.length ? res.map(item).join("")
        : '<div class="empty"><i class="fa-solid fa-magnifying-glass"></i>No encontramos trámites con esos criterios.<br>Probá con otra palabra o consultá en <a href="contacto.html">Atención al Ciudadano</a>.</div>';
    }
    function toggle(acc, force) {
      var open = force !== undefined ? force : !acc.classList.contains("is-open");
      acc.classList.toggle("is-open", open);
      $(".acc__head", acc).setAttribute("aria-expanded", open ? "true" : "false");
    }
    list.addEventListener("click", function (e) {
      var head = e.target.closest(".acc__head");
      if (head) toggle(head.parentElement);
    });
    filters.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cat]"); if (!b) return;
      cat = b.getAttribute("data-cat");
      $$(".chip", filters).forEach(function (c) { c.classList.toggle("is-active", c === b); });
      render();
    });
    search.addEventListener("input", render);
    render();

    function openHash() {
      var id = location.hash.slice(1);
      var acc = id && document.getElementById(id);
      if (acc && acc.classList.contains("acc")) {
        toggle(acc, true);
        setTimeout(function () { acc.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60);
      }
    }
    openHash();
    window.addEventListener("hashchange", openHash);
  })();

  /* ---------- Noticias: listado con filtros y paginación / detalle ---------- */
  (function () {
    var listWrap = $("#newsList"), detail = $("#newsDetail");
    if (!listWrap && !detail) return;
    var params = new URLSearchParams(location.search);
    var id = params.get("id");

    if (id && detail) {
      var n = sorted.filter(function (x) { return x.id === id; })[0];
      $("#newsIndex").hidden = true;
      detail.hidden = false;
      if (!n) {
        detail.innerHTML = '<div class="empty"><i class="fa-regular fa-newspaper"></i>La noticia que buscás no existe o fue eliminada.<br><a class="btn btn--primary mt-3" href="noticias.html">Ver todas las noticias</a></div>';
        return;
      }
      document.title = n.titulo + " | Municipalidad de Las Toscas";
      $("#crumbCurrent").textContent = "Noticia";
      $("#pageTitle").textContent = n.cat;
      $("#pageLead").textContent = "Noticias oficiales de la Municipalidad de Las Toscas.";
      var url = location.href;
      var others = sorted.filter(function (x) { return x.id !== n.id; }).slice(0, 4);
      detail.innerHTML =
        '<div class="article">' +
          '<article>' +
            (n.img ? '<figure class="article__cover"><img src="' + n.img + '" alt=""></figure>' : "") +
            '<div class="article__body">' +
              '<div class="article__meta"><span><i class="fa-regular fa-calendar"></i>' + fmtDate(n.fecha) + '</span><span><i class="fa-solid fa-tag"></i>' + esc(n.cat) + '</span><span><i class="fa-solid fa-building-columns"></i>Prensa Municipal</span></div>' +
              '<h1>' + esc(n.titulo) + '</h1>' +
              '<p class="lead">' + esc(n.bajada) + '</p>' +
              n.cuerpo.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
              (n.fuente ? '<p class="muted" style="font-size:.88rem"><i class="fa-solid fa-link"></i> Fuente y fotografía: <a href="' + n.fuente.url + '" target="_blank" rel="noopener">' + esc(n.fuente.nombre) + '</a></p>' : "") +
              '<div class="share"><b>Compartir</b>' +
                '<a href="https://wa.me/?text=' + encodeURIComponent(n.titulo + " " + url) + '" target="_blank" rel="noopener" aria-label="Compartir en WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>' +
                '<a href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '" target="_blank" rel="noopener" aria-label="Compartir en Facebook"><i class="fa-brands fa-facebook-f"></i></a>' +
                '<button type="button" id="copyLink" aria-label="Copiar enlace"><i class="fa-solid fa-link"></i></button>' +
                '<button type="button" onclick="window.print()" aria-label="Imprimir"><i class="fa-solid fa-print"></i></button>' +
              '</div>' +
            '</div>' +
            '<a class="link-arrow mt-3" href="noticias.html" style="display:inline-flex"><i class="fa-solid fa-arrow-left"></i> Volver a noticias</a>' +
          '</article>' +
          '<aside>' +
            '<div class="aside-box"><h3>Otras noticias</h3><ul class="mini-news">' +
              others.map(function (o) { return '<li><a href="noticias.html?id=' + o.id + '">' + esc(o.titulo) + '<small>' + fmtDate(o.fecha) + '</small></a></li>'; }).join("") +
            '</ul></div>' +
            '<div class="aside-box" style="background:var(--navy-800);border-color:var(--navy-800);color:#c7d7e8"><h3 style="color:#fff">¿Necesitás hacer un trámite?</h3><p style="font-size:.92rem">Consultá requisitos, horarios y formularios en la guía de trámites.</p><a class="btn btn--gold btn--sm" href="tramites.html">Guía de trámites</a></div>' +
          '</aside>' +
        '</div>';
      var copy = $("#copyLink");
      if (copy) copy.addEventListener("click", function () {
        if (navigator.clipboard) navigator.clipboard.writeText(url).then(function () { toast("Enlace copiado al portapapeles"); }, function () { toast("No se pudo copiar el enlace"); });
        else toast("Copiá el enlace desde la barra de direcciones");
      });
      return;
    }

    var PER = 6, page = 1, cat = "Todas";
    var filters = $("#newsFilters"), pager = $("#newsPager");
    var cats = ["Todas"].concat(sorted.map(function (n) { return n.cat; }).filter(function (c, k, a) { return a.indexOf(c) === k; }));
    filters.innerHTML = cats.map(function (c) { return '<button type="button" class="chip' + (c === cat ? " is-active" : "") + '" data-cat="' + c + '">' + c + '</button>'; }).join("");

    function render() {
      var res = sorted.filter(function (n) { return cat === "Todas" || n.cat === cat; });
      var pages = Math.max(1, Math.ceil(res.length / PER));
      page = Math.min(page, pages);
      listWrap.innerHTML = res.slice((page - 1) * PER, page * PER).map(newsCard).join("");
      if (pages < 2) { pager.innerHTML = ""; return; }
      var html = '<button type="button" data-p="' + (page - 1) + '"' + (page === 1 ? " disabled" : "") + ' aria-label="Página anterior"><i class="fa-solid fa-chevron-left"></i></button>';
      for (var k = 1; k <= pages; k++) html += '<button type="button" data-p="' + k + '"' + (k === page ? ' aria-current="page"' : "") + '>' + k + '</button>';
      html += '<button type="button" data-p="' + (page + 1) + '"' + (page === pages ? " disabled" : "") + ' aria-label="Página siguiente"><i class="fa-solid fa-chevron-right"></i></button>';
      pager.innerHTML = html;
    }
    filters.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cat]"); if (!b) return;
      cat = b.getAttribute("data-cat"); page = 1;
      $$(".chip", filters).forEach(function (c) { c.classList.toggle("is-active", c === b); });
      render();
    });
    pager.addEventListener("click", function (e) {
      var b = e.target.closest("[data-p]"); if (!b || b.disabled) return;
      page = parseInt(b.getAttribute("data-p"), 10); render();
      listWrap.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    render();
  })();

  /* ---------- Transparencia: pestañas + búsqueda ---------- */
  (function () {
    var tabs = $("#docTabs");
    if (!tabs) return;
    var body = $("#docBody"), search = $("#docSearch"), empty = $("#docEmpty");
    var LABELS = { ordenanzas: "Ordenanzas", decretos: "Decretos", balances: "Balances", presupuesto: "Presupuesto" };
    var key = (location.hash.slice(1) in LABELS) ? location.hash.slice(1) : "ordenanzas";
    tabs.innerHTML = Object.keys(LABELS).map(function (k) {
      return '<button type="button" class="tab" role="tab" data-k="' + k + '" aria-selected="' + (k === key) + '">' + LABELS[k] + ' <span class="badge">' + S.digesto[k].length + '</span></button>';
    }).join("");
    function render() {
      var q = norm(search.value.trim());
      var rows = S.digesto[key].slice().sort(function (a, b) { return b.fecha.localeCompare(a.fecha); }).filter(function (d) {
        return !q || norm(d.num + " " + d.titulo + " " + d.fecha).indexOf(q) > -1;
      });
      body.innerHTML = rows.map(function (d) {
        var btn = d.pdf
          ? '<a class="btn btn--outline btn--sm" href="' + d.pdf + '" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i>Ver PDF</a>'
          : '<span class="chip" title="Documento no disponible en línea">A solicitar</span>';
        return '<tr><td class="num">' + esc(d.num) + '</td><td>' + esc(d.titulo) + (d.ejemplo ? ' <span class="acc__cat" style="display:inline-block">Ejemplo</span>' : "") + '</td><td class="date">' + fmtDate(d.fecha, true) + '</td><td class="actions">' + btn + '</td></tr>';
      }).join("");
      $(".table-wrap").hidden = !rows.length;
      empty.hidden = !!rows.length;
      empty.innerHTML = S.digesto[key].length
        ? '<i class="fa-solid fa-magnifying-glass"></i>No hay documentos que coincidan con la búsqueda.'
        : '<i class="fa-regular fa-folder-open"></i>Próximamente se publicará la documentación de ' + LABELS[key].toLowerCase() + '.';
    }
    tabs.addEventListener("click", function (e) {
      var b = e.target.closest("[data-k]"); if (!b) return;
      key = b.getAttribute("data-k");
      $$(".tab", tabs).forEach(function (t) { t.setAttribute("aria-selected", t === b ? "true" : "false"); });
      history.replaceState(null, "", "#" + key);
      render();
    });
    search.addEventListener("input", render);
    render();
  })();

  /* ---------- Galería con lightbox ---------- */
  (function () {
    var items = $$("[data-lightbox]");
    var lb = $("#lightbox");
    if (!items.length || !lb) return;
    var img = $("img", lb), cap = $("figcaption", lb), i = 0, last;
    function show(k) {
      i = (k + items.length) % items.length;
      img.src = items[i].getAttribute("data-lightbox");
      img.alt = items[i].getAttribute("data-caption") || "";
      cap.textContent = items[i].getAttribute("data-caption") || "";
    }
    function open(k) { last = document.activeElement; show(k); lb.classList.add("is-open"); document.body.classList.add("no-scroll"); $(".lightbox__close", lb).focus(); }
    function close() { lb.classList.remove("is-open"); document.body.classList.remove("no-scroll"); if (last) last.focus(); }
    items.forEach(function (it, k) { it.addEventListener("click", function () { open(k); }); });
    $(".lightbox__close", lb).addEventListener("click", close);
    $(".lightbox__prev", lb).addEventListener("click", function () { show(i - 1); });
    $(".lightbox__next", lb).addEventListener("click", function () { show(i + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(i - 1);
      if (e.key === "ArrowRight") show(i + 1);
    });
  })();

  /* ---------- Formulario de contacto (validación, envío simulado) ---------- */
  (function () {
    var form = $("#contactForm");
    if (!form) return;
    var rules = {
      nombre: function (v) { return v.trim().length >= 3 || "Ingresá tu nombre y apellido."; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Ingresá un correo electrónico válido."; },
      telefono: function (v) { return !v.trim() || /^[\d\s()+-]{6,}$/.test(v.trim()) || "Ingresá un teléfono válido."; },
      tipo: function (v) { return !!v || "Elegí el motivo de tu consulta."; },
      mensaje: function (v) { return v.trim().length >= 15 || "Contanos un poco más (mínimo 15 caracteres)."; },
      acepto: function (_, el) { return el.checked || "Necesitamos tu conformidad para responderte."; }
    };
    function check(el) {
      var rule = rules[el.name]; if (!rule) return true;
      var res = rule(el.value, el), field = el.closest(".field");
      var ok = res === true;
      if (field) {
        field.classList.toggle("has-error", !ok);
        var msg = $(".field__error", field);
        if (msg) msg.textContent = ok ? "" : res;
      }
      el.setAttribute("aria-invalid", ok ? "false" : "true");
      return ok;
    }
    $$("input, select, textarea", form).forEach(function (el) {
      el.addEventListener("blur", function () { check(el); });
      el.addEventListener("input", function () { if (el.getAttribute("aria-invalid") === "true") check(el); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstBad = null;
      $$("input, select, textarea", form).forEach(function (el) { if (!check(el) && !firstBad) firstBad = el; });
      if (firstBad) { firstBad.focus(); return; }
      var btn = $("button[type=submit]", form);
      btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>Enviando…';
      setTimeout(function () {
        var nro = "LT-" + new Date().getFullYear() + "-" + String(Math.floor(Math.random() * 90000) + 10000);
        form.hidden = true;
        var ok = $("#formSuccess");
        $("#ticketNro").textContent = nro;
        ok.hidden = false; ok.focus();
      }, 900);
    });
    var again = $("#formAgain");
    if (again) again.addEventListener("click", function () {
      form.reset(); form.hidden = false; $("#formSuccess").hidden = true;
      var btn = $("button[type=submit]", form);
      btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i>Enviar consulta';
    });
    // Preselección desde enlaces (ej. contacto.html?tipo=reclamo#formulario)
    var tipo = new URLSearchParams(location.search).get("tipo");
    if (tipo && form.tipo) form.tipo.value = tipo;
  })();

  /* ---------- Animación al hacer scroll ---------- */
  (function () {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-visible"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) { io.observe(e); });
  })();
})();
