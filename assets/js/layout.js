/* =========================================================
   Estructura compartida: barra superior, header, menú móvil,
   franja de emergencias, footer y botón "volver arriba".
   Cada página indica su sección con <body data-page="...">.
   ========================================================= */
(function () {
  var S = window.SITE;
  var page = document.body.getAttribute("data-page") || "";

  var NAV = [
    { id: "inicio", label: "Inicio", href: "index.html", icon: "fa-house" },
    { id: "gestion", label: "Gestión", href: "gestion.html", icon: "fa-landmark" },
    { id: "tramites", label: "Trámites", href: "tramites.html", icon: "fa-file-lines" },
    { id: "trabajo", label: "Trabajo", href: "trabajo.html", icon: "fa-briefcase" },
    { id: "noticias", label: "Noticias", href: "noticias.html", icon: "fa-newspaper" },
    { id: "transparencia", label: "Transparencia", href: "transparencia.html", icon: "fa-scale-balanced" },
    { id: "turismo", label: "Turismo", href: "turismo.html", icon: "fa-tree" },
    { id: "contacto", label: "Contacto", href: "contacto.html", icon: "fa-envelope" }
  ];

  function current(id) { return id === page ? ' aria-current="page"' : ""; }

  var brand =
    '<a class="brand" href="index.html" aria-label="Municipalidad de Las Toscas — Inicio">' +
      '<img src="assets/img/escudo-256.png" alt="" width="52" height="52">' +
      '<span class="brand__text">' +
        '<span class="brand__small">Municipalidad de</span>' +
        '<span class="brand__name">Las Toscas</span>' +
        '<span class="brand__prov">Provincia de Santa Fe</span>' +
      '</span>' +
    '</a>';

  var socials =
    '<a href="' + S.muni.redes.facebook + '" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>' +
    '<a href="' + S.muni.redes.instagram + '" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
    '<a href="' + S.muni.redes.youtube + '" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>';

  var header =
    '<a class="skip-link" href="#main">Saltar al contenido</a>' +
    '<div class="topbar"><div class="container">' +
      '<div class="topbar__info">' +
        '<span class="hide-xs"><i class="fa-regular fa-calendar"></i><span id="today"></span></span>' +
        '<a href="' + S.muni.telefonoHref + '"><i class="fa-solid fa-phone"></i>' + S.muni.telefono + '</a>' +
        '<span class="hide-sm"><i class="fa-regular fa-clock"></i>' + S.muni.horario + '</span>' +
      '</div>' +
      '<div class="topbar__tools">' +
        '<button type="button" data-font="-1" aria-label="Reducir tamaño de texto" title="Reducir texto">A-</button>' +
        '<button type="button" data-font="1" aria-label="Aumentar tamaño de texto" title="Aumentar texto">A+</button>' +
        '<button type="button" id="contrastToggle" aria-pressed="false" aria-label="Alto contraste" title="Alto contraste"><i class="fa-solid fa-circle-half-stroke"></i></button>' +
        '<span class="topbar__sep" aria-hidden="true"></span>' +
        socials +
      '</div>' +
    '</div></div>' +
    '<header class="header" id="header"><div class="container">' +
      brand +
      '<nav class="nav" aria-label="Navegación principal"><ul class="nav__list">' +
        NAV.map(function (n) { return '<li><a class="nav__link" href="' + n.href + '"' + current(n.id) + '>' + n.label + '</a></li>'; }).join("") +
      '</ul></nav>' +
      '<a class="btn btn--primary btn--sm header__cta" href="' + S.muni.autogestion + '" target="_blank" rel="noopener"><i class="fa-solid fa-user-shield"></i>Autogestión</a>' +
      '<button class="nav-toggle" type="button" id="navToggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="drawer"><i class="fa-solid fa-bars"></i></button>' +
    '</div></header>' +
    '<aside class="drawer" id="drawer" aria-label="Menú" aria-hidden="true">' +
      '<div class="drawer__head">' + brand + '<button class="drawer__close" type="button" id="drawerClose" aria-label="Cerrar menú"><i class="fa-solid fa-xmark"></i></button></div>' +
      '<ul class="drawer__nav">' +
        NAV.map(function (n) { return '<li><a href="' + n.href + '"' + current(n.id) + '><i class="fa-solid ' + n.icon + '"></i>' + n.label + '</a></li>'; }).join("") +
      '</ul>' +
      '<div class="drawer__foot">' +
        '<a class="btn btn--primary btn--block" href="' + S.muni.autogestion + '" target="_blank" rel="noopener"><i class="fa-solid fa-user-shield"></i>Autogestión</a>' +
        '<a href="' + S.muni.telefonoHref + '"><i class="fa-solid fa-phone"></i> ' + S.muni.telefono + '</a>' +
        '<span><i class="fa-solid fa-location-dot"></i> ' + S.muni.direccion + '</span>' +
      '</div>' +
    '</aside>' +
    '<div class="drawer-backdrop" id="drawerBackdrop"></div>';

  var emergency =
    '<div class="emergency-strip" role="region" aria-label="Teléfonos de emergencia"><div class="container">' +
      '<strong><i class="fa-solid fa-triangle-exclamation"></i> Emergencias</strong>' +
      '<a href="tel:100"><i class="fa-solid fa-fire-extinguisher"></i>Bomberos 100</a>' +
      '<a href="tel:101"><i class="fa-solid fa-shield-halved"></i>Policía 101</a>' +
      '<a href="tel:107"><i class="fa-solid fa-truck-medical"></i>SIES 107</a>' +
      '<a href="tel:911"><i class="fa-solid fa-phone-volume"></i>911</a>' +
    '</div></div>';

  var year = new Date().getFullYear();
  var footer =
    emergency +
    '<footer class="footer">' +
      '<div class="footer__flag" aria-hidden="true"></div>' +
      '<div class="container footer__top">' +
        '<div>' + brand +
          '<p class="footer__about">Sitio oficial de la Municipalidad de Las Toscas. Información, trámites y servicios para vecinos, comercios y visitantes.</p>' +
          '<div class="socials">' + socials + '</div>' +
        '</div>' +
        '<div><h4>Sitio</h4><ul>' +
          NAV.map(function (n) { return '<li><a href="' + n.href + '">' + n.label + '</a></li>'; }).join("") +
        '</ul></div>' +
        '<div><h4>Servicios</h4><ul>' +
          '<li><a href="' + S.muni.autogestion + '" target="_blank" rel="noopener">Autogestión</a></li>' +
          '<li><a href="tramites.html">Guía de trámites</a></li>' +
          '<li><a href="tramites.html#pago-tasas">Pago de tasas</a></li>' +
          '<li><a href="' + S.muni.cursos + '" target="_blank" rel="noopener">Capacitaciones gratuitas</a></li>' +
          '<li><a href="' + S.muni.empleo + '" target="_blank" rel="noopener">Empleo Local</a></li>' +
          '<li><a href="contacto.html#formulario">Reclamos y consultas</a></li>' +
          '<li><a href="transparencia.html">Ordenanzas y decretos</a></li>' +
          '<li><a href="contacto.html#telefonos">Teléfonos útiles</a></li>' +
        '</ul></div>' +
        '<div><h4>Atención al ciudadano</h4><ul class="footer__contact">' +
          '<li><i class="fa-solid fa-location-dot"></i><span>' + S.muni.direccion + '</span></li>' +
          '<li><i class="fa-solid fa-phone"></i><a href="' + S.muni.telefonoHref + '">' + S.muni.telefono + '</a></li>' +
          '<li><i class="fa-solid fa-envelope"></i><a href="mailto:' + S.muni.email + '">' + S.muni.email + '</a></li>' +
          '<li><i class="fa-regular fa-clock"></i><span>' + S.muni.horario + '</span></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="footer__bottom"><div class="container">' +
        '<span>© ' + year + ' Municipalidad de Las Toscas — Provincia de Santa Fe. Todos los derechos reservados.</span>' +
        '<span>Maqueta de presentación · contenidos de ejemplo sujetos a validación</span>' +
      '</div></div>' +
    '</footer>' +
    '<button class="to-top" type="button" id="toTop" aria-label="Volver arriba"><i class="fa-solid fa-arrow-up"></i></button>' +
    '<div class="toast" id="toast" role="status" aria-live="polite"><i class="fa-solid fa-circle-check"></i><span></span></div>';

  var h = document.getElementById("site-header");
  var f = document.getElementById("site-footer");
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  // Fecha en la barra superior
  var today = document.getElementById("today");
  if (today) {
    var txt = new Date().toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    today.textContent = txt.charAt(0).toUpperCase() + txt.slice(1);
  }
})();
