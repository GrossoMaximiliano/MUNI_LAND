/* =========================================================
   Contenido del sitio. Editar acá actualiza todas las páginas.
   (Se usa un objeto JS en lugar de JSON para que funcione
   también abriendo los archivos con doble clic, sin servidor.)
   ========================================================= */
window.SITE = {
  muni: {
    nombre: "Municipalidad de Las Toscas",
    provincia: "Provincia de Santa Fe",
    direccion: "Calle 12 N° 901, Las Toscas, Santa Fe",
    telefono: "(03482) 492-000",
    telefonoHref: "tel:03482492000",
    email: "intendencia@lastoscas.gob.ar",
    horario: "Lunes a viernes de 7:00 a 13:00 hs",
    autogestion: "https://grossomaximiliano.github.io/MUNI_POC",
    cursos: "https://grossomaximiliano.github.io/MUNI_CURSOS/",
    empleo: "https://grossomaximiliano.github.io/MUNI_EMPLE/",
    mapa: "https://www.google.com/maps?q=Calle+12+901,+Las+Toscas,+Santa+Fe,+Argentina&output=embed",
    mapaLink: "https://www.google.com/maps/search/?api=1&query=Municipalidad+de+Las+Toscas+Santa+Fe",
    redes: {
      facebook: "#",
      instagram: "#",
      youtube: "#"
    }
  },

  intendente: {
    nombre: "Iván Sánchez",
    cargo: "Intendente Municipal",
    email: "intendencia@lastoscas.gob.ar",
    descripcion: "Responsable de la administración general y la dirección política del municipio de Las Toscas."
  },

  gabinete: [
    { area: "Secretaría General", nombre: "Laura Fiant", cargo: "Secretaria General", email: "gobierno@lastoscas.gob.ar", icono: "fa-landmark",
      desc: "Coordinación estratégica de las distintas áreas de gobierno y asistencia directa a la Intendencia." },
    { area: "Planificación Económica", nombre: "Fernando Paredes", cargo: "Secretario", email: "hacienda@lastoscas.gob.ar", icono: "fa-chart-line",
      desc: "Gestión transparente de los recursos financieros, presupuesto y recaudación municipal." },
    { area: "Planificación y Desarrollo Territorial", nombre: "Daniel Molina", cargo: "Secretario", email: "territorial@lastoscas.gob.ar", icono: "fa-helmet-safety",
      desc: "Planificación urbana, ejecución de obras públicas y mantenimiento de infraestructura." },
    { area: "Desarrollo Productivo", nombre: "Damián Cremona", cargo: "Secretario", email: "produccion@lastoscas.gob.ar", icono: "fa-industry",
      desc: "Impulso a la industria local, acompañamiento al comercio, emprendedurismo y empleo." },
    { area: "Desarrollo Humano", nombre: "Mayra Gómez", cargo: "Secretaria", email: "desarrollohumano@lastoscas.gob.ar", icono: "fa-hand-holding-heart",
      desc: "Políticas de inclusión social, salud comunitaria y asistencia a la familia." },
    { area: "Recreación y Deporte", nombre: "Pablo Verón", cargo: "Secretario", email: "deportes@lastoscas.gob.ar", icono: "fa-person-running",
      desc: "Promoción de actividades deportivas, espacios recreativos y fomento del bienestar físico." },
    { area: "Patrimonio y Comunicación", nombre: "Mariela Cerdán", cargo: "Secretaria", email: "comunicacion@lastoscas.gob.ar", icono: "fa-bullhorn",
      desc: "Comunicación institucional, promoción de la cultura y el turismo, y preservación del patrimonio y la identidad local." }
  ],

  // Directorio de correos (incluye áreas sin responsable cargado)
  directorio: [
    { area: "Intendencia", email: "intendencia@lastoscas.gob.ar" },
    { area: "Gobierno", email: "gobierno@lastoscas.gob.ar" },
    { area: "Planificación Económica", email: "hacienda@lastoscas.gob.ar" },
    { area: "Planificación Territorial", email: "territorial@lastoscas.gob.ar" },
    { area: "Desarrollo Productivo", email: "produccion@lastoscas.gob.ar" },
    { area: "Obras Públicas", email: "obraspublicas@lastoscas.gob.ar" },
    { area: "Desarrollo Humano", email: "desarrollohumano@lastoscas.gob.ar" },
    { area: "Recreación y Deportes", email: "deportes@lastoscas.gob.ar" },
    { area: "Comunicación", email: "comunicacion@lastoscas.gob.ar" }
  ],

  telefonos: [
    { cat: "Emergencias 24 hs", nombre: "Bomberos Voluntarios", nota: "Guardia de cuartel", urgente: true,
      nums: [["100", "100"], ["451 250", "03482451250"]] },
    { cat: "Seguridad y prevención", nombre: "Policía — Comisaría 5ta.", nota: "Atención permanente", urgente: true,
      nums: [["101", "101"], ["911", "911"], ["492 135", "03482492135"]] },
    { cat: "Emergencia sanitaria", nombre: "SIES 107", nota: "Guardia médica / Central Villa Ocampo", urgente: true,
      nums: [["107", "107"], ["451 366", "03482451366"], ["467 502", "03482467502"]] },
    { cat: "Energía eléctrica", nombre: "EPE", nota: "Guardia de reclamos", urgente: true,
      nums: [["15 680 873", "0348215680873"]] },
    { cat: "Mantenimiento urbano", nombre: "Corralón Municipal", nota: "Servicios operativos",
      nums: [["492 173", "03482492173"]] },
    { cat: "Atención ciudadana", nombre: "Servicios Públicos", nota: "Guardia y reclamos",
      nums: [["3482 650174", "3482650174"]] },
    { cat: "Acción y asistencia social", nombre: "Desarrollo Humano", nota: "Atención a la comunidad",
      nums: [["3482 303995", "3482303995"]] },
    { cat: "Cooperativa de servicios", nombre: "CODESELT (Elec. Rural)", nota: "Guardia",
      nums: [["492 200", "03482492200"], ["15 615 518", "0348215615518"]] }
  ],

  /* Categorías: Conductores, Comercio, Obras, Tasas, Social, Servicios */
  tramites: [
    {
      id: "licencia-conducir", cat: "Conductores", icono: "fa-id-card",
      titulo: "Licencia de Conducir: renovación y primera vez",
      resumen: "Requisitos, turnos, costos y documentación para renovar u obtener la licencia de conducir.",
      requisitos: [
        "DNI original y fotocopia (domicilio en Las Toscas).",
        "Certificado de antecedentes de tránsito (CENAT).",
        "Grupo sanguíneo y factor certificado.",
        "Libre deuda de multas municipales.",
        "Primera vez: aprobar curso teórico, examen psicofísico y examen práctico."
      ],
      lugar: "Área de Tránsito Municipal",
      horario: "Lunes a viernes de 7:00 a 12:00 hs",
      costo: "Consultar tarifa vigente",
      pdf: "https://lastoscas.gob.ar/wp/wp-content/uploads/2026/10/Formulario-para-descargar.pdf"
    },
    {
      id: "habilitacion-comercial", cat: "Comercio", icono: "fa-store",
      titulo: "Habilitación Comercial y ASSAL",
      resumen: "Requisitos y formulario de inicio para la apertura o transferencia de comercios e industrias.",
      requisitos: [
        "Constancia de inscripción en AFIP y API (Ingresos Brutos).",
        "Fotocopia de DNI del titular o contrato social si es persona jurídica.",
        "Contrato de locación sellado o título de propiedad del inmueble.",
        "Plano del local aprobado por Obras Privadas.",
        "Libreta sanitaria al día (rubros alimenticios / gastronómicos).",
        "Certificado de libre deuda municipal de TGI."
      ],
      lugar: "Mesa de Entradas — Palacio Municipal",
      horario: "Lunes a viernes de 7:00 a 12:30 hs",
      costo: "Según rubro",
      pdf: "https://lastoscas.gob.ar/wp/wp-content/uploads/2026/10/Formulario-para-descargar.pdf"
    },
    {
      id: "pago-tasas", cat: "Tasas", icono: "fa-file-invoice-dollar",
      titulo: "Pago de Tasa General de Inmuebles (TGI)",
      resumen: "Consultá tu deuda, descargá la boleta y pagá online desde el portal de Autogestión.",
      requisitos: [
        "Número de partida o de contribuyente.",
        "Ingresar al portal de Autogestión municipal.",
        "Pago con medios electrónicos o en Caja Municipal."
      ],
      lugar: "Online o Caja Municipal",
      horario: "Portal 24 hs · Caja: lunes a viernes de 7:00 a 12:30 hs",
      costo: "Según liquidación",
      link: "https://grossomaximiliano.github.io/MUNI_POC"
    },
    {
      id: "libre-deuda", cat: "Tasas", icono: "fa-file-circle-check",
      titulo: "Certificado de Libre Deuda",
      resumen: "Constancia de que el inmueble o comercio no registra deudas con el municipio.",
      requisitos: [
        "Nota de solicitud con datos del titular.",
        "Número de partida del inmueble o legajo comercial.",
        "Tasas al día."
      ],
      lugar: "Área de Rentas",
      horario: "Lunes a viernes de 7:00 a 12:30 hs",
      costo: "Sellado municipal"
    },
    {
      id: "permiso-edificacion", cat: "Obras", icono: "fa-helmet-safety",
      titulo: "Permiso de Edificación y Planos",
      resumen: "Presentación de planos de obra nueva, ampliación o relevamiento ante Obras Privadas.",
      requisitos: [
        "Planos firmados por profesional matriculado (3 copias).",
        "Título de propiedad o boleto de compraventa.",
        "Libre deuda de TGI.",
        "Visado del Colegio profesional correspondiente."
      ],
      lugar: "Secretaría de Planificación y Desarrollo Territorial",
      horario: "Lunes a viernes de 7:00 a 12:30 hs",
      costo: "Según metros cuadrados"
    },
    {
      id: "libreta-sanitaria", cat: "Comercio", icono: "fa-notes-medical",
      titulo: "Libreta Sanitaria",
      resumen: "Obligatoria para quienes manipulan alimentos o atienden al público en rubros específicos.",
      requisitos: [
        "DNI.",
        "Certificado médico de aptitud.",
        "Curso de manipulación de alimentos aprobado (cuando corresponda).",
        "Foto carnet 4x4."
      ],
      lugar: "Área de Bromatología",
      horario: "Lunes a viernes de 7:00 a 12:00 hs",
      costo: "Consultar"
    },
    {
      id: "reclamos", cat: "Servicios", icono: "fa-lightbulb",
      titulo: "Reclamos por alumbrado, residuos y calles",
      resumen: "Informá problemas en la vía pública: luminarias, recolección, baches o desmalezado.",
      requisitos: [
        "Dirección exacta o referencia del lugar.",
        "Descripción del problema (y foto, si es posible).",
        "Datos de contacto para el seguimiento."
      ],
      lugar: "Servicios Públicos — 3482 650174 o formulario web",
      horario: "Guardia permanente",
      costo: "Sin costo",
      link: "contacto.html#formulario"
    },
    {
      id: "asistencia-social", cat: "Social", icono: "fa-hand-holding-heart",
      titulo: "Asistencia y acompañamiento social",
      resumen: "Orientación y acceso a programas sociales, alimentarios y de acompañamiento familiar.",
      requisitos: [
        "DNI del solicitante y del grupo familiar.",
        "Entrevista con el equipo técnico de Desarrollo Humano."
      ],
      lugar: "Secretaría de Desarrollo Humano",
      horario: "Lunes a viernes de 7:00 a 12:30 hs",
      costo: "Sin costo"
    },
    {
      id: "escuelas-deportivas", cat: "Social", icono: "fa-person-running",
      titulo: "Inscripción a escuelas deportivas y talleres",
      resumen: "Actividades deportivas y recreativas municipales para todas las edades.",
      requisitos: [
        "DNI del participante.",
        "Apto físico (menores: firmado por madre, padre o tutor).",
        "Ficha de inscripción completa."
      ],
      lugar: "Secretaría de Recreación y Deporte — Polideportivo",
      horario: "Según actividad",
      costo: "Gratuito"
    },
    {
      id: "patente", cat: "Tasas", icono: "fa-car",
      titulo: "Patente automotor: altas, bajas y transferencias",
      resumen: "Gestión del impuesto patente para vehículos radicados en Las Toscas.",
      requisitos: [
        "Título del automotor y DNI del titular.",
        "Formulario de alta, baja o transferencia (DNRPA).",
        "Libre deuda de patente."
      ],
      lugar: "Área de Rentas",
      horario: "Lunes a viernes de 7:00 a 12:30 hs",
      costo: "Según valuación"
    }
  ],

  /* Noticias. img: ruta local o null (muestra escudo). */
  noticias: [
    {
      id: "isla-del-medio-area-protegida",
      fecha: "2026-10-09",
      cat: "Turismo",
      titulo: "La Municipalidad declaró a la Isla del Medio como Área Natural Protegida de Interés Ecológico y Turístico",
      bajada: "A través de la Ordenanza Nº 026/2026, aprobada por el Concejo Municipal, se reconoce el valor ambiental y turístico de la isla.",
      img: "assets/img/isla-del-medio.jpg",
      cuerpo: [
        "La Municipalidad de Las Toscas, a través de la Subsecretaría de Turismo, impulsó la iniciativa que dio lugar a la Ordenanza Nº 026/2026, aprobada por el Concejo Municipal, mediante la cual se declara a la Isla del Medio como Área Natural Protegida de Interés Ecológico y Turístico.",
        "La medida busca preservar uno de los ambientes más representativos del humedal, en el marco del sitio Ramsar Jaaukanigás, y promover un uso responsable del lugar por parte de vecinos y visitantes.",
        "Desde el municipio destacaron que la declaración permitirá planificar acciones de cuidado, educación ambiental y desarrollo del ecoturismo, poniendo en valor el patrimonio natural de la ciudad."
      ]
    },
    {
      id: "nuevo-portal-autogestion",
      fecha: "2026-09-22",
      cat: "Gestión",
      titulo: "Nuevo portal de Autogestión: trámites y pagos desde casa",
      bajada: "Los vecinos pueden consultar su deuda, descargar boletas y pagar tasas de forma online.",
      img: "assets/img/foto-2.jpg",
      cuerpo: [
        "La Municipalidad pone a disposición de los vecinos el portal de Autogestión, una herramienta que permite consultar el estado de cuenta, descargar boletas y realizar pagos sin necesidad de acercarse al Palacio Municipal.",
        "El objetivo es simplificar los trámites, reducir tiempos de espera y ofrecer una atención más ágil y moderna.",
        "Ante cualquier consulta, el personal de Mesa de Entradas acompaña a quienes necesiten ayuda para dar sus primeros pasos en la plataforma."
      ]
    },
    {
      id: "acto-aniversario",
      fecha: "2026-08-23",
      cat: "Comunidad",
      titulo: "La ciudad celebró un nuevo aniversario con un acto en la Plaza 23 de Agosto",
      bajada: "Autoridades, instituciones y vecinos participaron de la ceremonia oficial.",
      img: "assets/img/foto-1.jpg",
      cuerpo: [
        "Con la presencia de autoridades municipales, instituciones educativas, fuerzas de seguridad y vecinos, se llevó adelante el acto oficial en la Plaza 23 de Agosto.",
        "Durante la ceremonia se realizó el izamiento de la bandera, se entonaron las estrofas del Himno Nacional y se reconoció a vecinos e instituciones por su aporte a la comunidad.",
        "La jornada continuó con actividades culturales y propuestas para toda la familia."
      ]
    },
    {
      id: "plan-obras-2026",
      fecha: "2026-07-15",
      cat: "Obras",
      titulo: "Avanza el plan de obras: iluminación LED y mejorado de calles",
      bajada: "Los trabajos se concentran en barrios priorizados por su necesidad de infraestructura.",
      img: null,
      cuerpo: [
        "La Secretaría de Planificación y Desarrollo Territorial continúa con el plan de obras previsto para este año, que incluye el recambio de luminarias por tecnología LED y el mejorado de calles de tierra.",
        "Las tareas se organizan por etapas para minimizar las molestias a los vecinos y se informan con anticipación a través de los canales oficiales.",
        "Se solicita a los vecinos respetar la señalización en las zonas de trabajo."
      ]
    },
    {
      id: "escuelas-deportivas-inscripcion",
      fecha: "2026-06-30",
      cat: "Deportes",
      titulo: "Abren las inscripciones a las escuelas deportivas municipales",
      bajada: "Fútbol, vóley, atletismo y actividades recreativas para niños, jóvenes y adultos mayores.",
      img: null,
      cuerpo: [
        "La Secretaría de Recreación y Deporte informa que se encuentran abiertas las inscripciones a las escuelas deportivas municipales.",
        "Las actividades son gratuitas y se desarrollan en el polideportivo y espacios públicos de la ciudad.",
        "Para inscribirse es necesario presentar DNI y apto físico."
      ]
    },
    {
      id: "operativo-salud",
      fecha: "2026-06-12",
      cat: "Salud",
      titulo: "Operativo de salud en los barrios: vacunación y controles",
      bajada: "Desarrollo Humano acerca controles y vacunación a cada barrio de la ciudad.",
      img: null,
      cuerpo: [
        "La Secretaría de Desarrollo Humano, junto a efectores de salud, realiza operativos barriales con controles de salud, actualización del calendario de vacunación y asesoramiento.",
        "El cronograma se publica semanalmente en las redes oficiales del municipio."
      ]
    },
    {
      id: "emprendedores-feria",
      fecha: "2026-05-18",
      cat: "Producción",
      titulo: "Feria de emprendedores locales: una vidriera para la producción toscanense",
      bajada: "Más de treinta emprendedores participaron de la propuesta impulsada por Desarrollo Productivo.",
      img: null,
      cuerpo: [
        "La Secretaría de Desarrollo Productivo organizó una nueva edición de la feria de emprendedores, con propuestas de gastronomía, artesanías, indumentaria y servicios.",
        "La iniciativa busca fortalecer la economía local y generar espacios de comercialización para los productores de la ciudad."
      ]
    },
    {
      id: "balance-primer-trimestre",
      fecha: "2026-04-25",
      cat: "Gestión",
      titulo: "Se publicó el balance del primer trimestre en Gobierno Abierto",
      bajada: "El documento puede consultarse y descargarse en la sección Transparencia.",
      img: null,
      cuerpo: [
        "En el marco de la política de transparencia, la Municipalidad publicó el balance correspondiente al primer trimestre del año.",
        "El documento se encuentra disponible para su descarga en la sección Transparencia del sitio oficial."
      ]
    }
  ],

  /* Digesto / Gobierno Abierto. ejemplo:true = registro de muestra para la maqueta */
  digesto: {
    ordenanzas: [
      { num: "1450/2026", fecha: "2026-10-01", titulo: "Ordenanza N° 1450/2026", pdf: "https://lastoscas.gob.ar/wp/wp-content/uploads/2026/10/ORDENANZA-1450.pdf" },
      { num: "026/2026", fecha: "2026-10-09", titulo: "Declara a la Isla del Medio Área Natural Protegida de Interés Ecológico y Turístico", pdf: null },
      { num: "1449/2026", fecha: "2026-09-12", titulo: "Régimen de ordenamiento del arbolado público", pdf: null, ejemplo: true },
      { num: "1448/2026", fecha: "2026-08-28", titulo: "Programa municipal de separación de residuos en origen", pdf: null, ejemplo: true }
    ],
    decretos: [
      { num: "1255/2026", fecha: "2026-10-03", titulo: "Decreto N° 1255/2026", pdf: "https://lastoscas.gob.ar/wp/wp-content/uploads/2026/10/Decreto-1255.pdf" },
      { num: "1254/2026", fecha: "2026-09-20", titulo: "Convocatoria a audiencia pública de presupuesto participativo", pdf: null, ejemplo: true }
    ],
    balances: [
      { num: "2° Trim.", fecha: "2026-04-25", titulo: "Balance 2do Trimestre 2026", pdf: "https://lastoscas.gob.ar/wp/wp-content/uploads/2026/04/BALANCE-2DO-TRIMESTRE.pdf" },
      { num: "1° Trim.", fecha: "2026-04-25", titulo: "Balance 1er Trimestre 2026", pdf: "https://lastoscas.gob.ar/wp/wp-content/uploads/2026/04/BALANCE-1ER-TRIMESTRE.pdf" }
    ],
    presupuesto: []
  }
};
