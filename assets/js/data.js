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
    mapa: "https://www.google.com/maps?q=-28.354166,-59.257671&z=17&output=embed",
    mapaLink: "https://www.google.com/maps/search/?api=1&query=-28.354166,-59.257671",
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

  /* Noticias reales de la gestión (redactadas a partir de medios locales).
     img: ruta local o null (muestra escudo). destacada: se muestra grande en la portada.
     fuente: medio donde se publicó originalmente. */
  noticias: [
    {
      id: "monitoreo-hidrico-prevencion",
      fecha: "2026-11-02",
      cat: "Gestión",
      destacada: true,
      titulo: "Más de 500 metros de defensas y bombeo permanente: el Municipio refuerza la prevención ante la creciente",
      bajada: "Con monitoreo diario del arroyo y del río Paraná, la Municipalidad ya distribuyó más de 400 bolsas de arena, 140 camiones de tierra y realizó cerca de 200 asistencias sociales.",
      img: "assets/img/monitoreo-hidrico.jpg",
      cuerpo: [
        "La Municipalidad de Las Toscas mantiene un monitoreo permanente del río Paraná y del arroyo Las Toscas, que se recorre entre dos y tres veces por día, y sigue de cerca los pronósticos ante la posibilidad de lluvias intensas en la cuenca oeste.",
        "En materia de obras preventivas se levantaron más de 500 metros de defensas sobre calles 1 y 20 y en distintos puntos del arroyo. Además se intervinieron más de diez entubados, se abrieron más de 1.500 metros de cunetas en barrio San Felipe y unos 2.000 metros de canales en Campo Winkler, y se repararon más de cinco kilómetros de caminos rurales y calles urbanas.",
        "Dos estaciones de bombeo instaladas en calles 9 y 20, con una capacidad conjunta de cinco millones de litros por hora, funcionaron alrededor de 25 horas durante la última semana. Junto a la EPE se sumó un puesto de transformación de 160 kVA, una nueva línea de baja tensión y la iluminación del sector.",
        "En el plano social, el Municipio entregó tierra, bolsas de arena y tarimas a 60 familias para resguardar sus viviendas, acompañó traslados preventivos y realizó cerca de 200 asistencias. El Ministerio de Salud provincial aportó una ambulancia 4x4 para zonas de difícil acceso, cuyo personal es sostenido por la Municipalidad.",
        "El trabajo se articula con la Secretaría de Protección Civil y otras áreas del Gobierno de Santa Fe, cuyas autoridades recorrieron la ciudad en los últimos días."
      ]
    },
    {
      id: "cierre-curso-lengua-de-senas",
      fecha: "2026-11-02",
      cat: "Desarrollo Humano",
      titulo: "Cerró el curso de Lengua de Señas Argentina con entrega de certificados",
      bajada: "La propuesta de la Secretaría de Desarrollo Humano y la Asociación Civil “Manos que Hablan” busca derribar barreras de comunicación en la ciudad.",
      img: "assets/img/lengua-de-senas.jpg",
      cuerpo: [
        "La Municipalidad de Las Toscas, a través de la Secretaría de Desarrollo Humano, acompañó el cierre del curso de Lengua de Señas Argentina organizado junto a la Asociación Civil “Manos que Hablan”.",
        "La jornada incluyó el examen final y la entrega de certificaciones institucionales, que se suman al certificado ministerial que obtienen quienes completan la formación.",
        "Desde el Municipio destacaron que la iniciativa promueve la inclusión y la igualdad de oportunidades, y que abrir espacios de capacitación y sensibilización permite construir una comunidad donde todas las personas puedan comunicarse sin barreras."
      ]
    },
    {
      id: "congreso-ecoturismo-jaaukanigas",
      fecha: "2026-10-31",
      cat: "Turismo",
      titulo: "Las Toscas será sede del 1° Congreso de Ecoturismo en Jaaukanigás",
      bajada: "El 26 y 27 de noviembre habrá conferencias con referentes del Litoral y una jornada de campo con navegación y gastronomía en el humedal. La inscripción ya está abierta.",
      img: "assets/img/congreso-ecoturismo.jpg",
      cuerpo: [
        "La Municipalidad de Las Toscas organiza el 1° Congreso de Ecoturismo en Jaaukanigás, que se realizará el 26 y 27 de noviembre con el objetivo de poner en valor uno de los humedales más importantes del país y potenciar el turismo de naturaleza en la región.",
        "La primera jornada estará dedicada a conferencias de especialistas y referentes del ecoturismo del Litoral argentino, junto con experiencias regionales que combinan desarrollo turístico y conservación.",
        "El segundo día propone una salida de campo con actividades de interpretación de la naturaleza y del patrimonio, navegación por el sitio Ramsar y una propuesta gastronómica en el entorno del humedal.",
        "El congreso está pensado para prestadores turísticos, emprendedores, artesanos, instituciones, docentes, estudiantes y público en general. La inscripción se realiza mediante un formulario en línea difundido por los canales oficiales del Municipio."
      ]
    },
    {
      id: "voluntariado-emergencia",
      fecha: "2026-10-29",
      cat: "Prevención",
      titulo: "Abrió la inscripción al Voluntariado municipal para colaborar ante la emergencia",
      bajada: "La Junta de Protección Civil, junto a Cáritas e instituciones religiosas, organiza a los vecinos que quieran ayudar. Ya hay más de 50 inscriptos.",
      img: "assets/img/voluntariado-emergencia.jpg",
      cuerpo: [
        "La Municipalidad de Las Toscas abrió la inscripción al Voluntariado para colaborar en las tareas de prevención y asistencia vinculadas a la creciente. La iniciativa es coordinada por la Junta de Protección Civil Municipal junto a Cáritas y las instituciones religiosas de la ciudad, en el marco de la Ordenanza N.º 028/2026.",
        "Quienes quieran sumarse pueden completar el formulario en línea disponible en el perfil de Instagram de la Municipalidad. Las tareas se asignan según las necesidades operativas y siempre de manera coordinada con los responsables de Protección Civil: la inscripción no habilita por sí sola a intervenir en las zonas afectadas.",
        "En pocos días ya se anotaron más de 50 vecinos. Además, la Oficina de Empleo recibe donaciones de lunes a viernes, de 7 a 13 y de 15 a 19: alimentos no perecederos, colchones, frazadas, ropa, calzado y artículos de higiene y limpieza."
      ]
    },
    {
      id: "campania-lluvias-residuos",
      fecha: "2026-10-29",
      cat: "Ambiente",
      titulo: "“Lo cotidiano también construye una ciudad que no se inunda”: nueva campaña de concientización",
      bajada: "La Municipalidad pide sacar los residuos en el horario de recolección y guardarlos cuando se anuncian tormentas, para que no tapen los desagües.",
      img: "assets/img/campania-lluvias.jpg",
      cuerpo: [
        "La Municipalidad de Las Toscas lanzó una campaña de concientización para prevenir anegamientos durante la temporada de lluvias, bajo el lema “Lo cotidiano también construye una ciudad que no se inunda”.",
        "El pedido a los vecinos es simple: depositar los residuos en los lugares indicados y respetar los horarios de recolección. Si se pronostican tormentas, se recomienda guardar la basura en el domicilio hasta el próximo día de recolección.",
        "Una bolsa en la calle puede ser arrastrada por el agua y tapar los desagües, lo que dificulta el escurrimiento. Por eso, el Municipio remarca que mantener limpios canales y desagües es una tarea compartida entre el trabajo municipal y el compromiso de cada familia."
      ]
    },
    {
      id: "prevencion-dengue",
      fecha: "2026-10-28",
      cat: "Salud",
      titulo: "El Municipio refuerza la prevención del dengue ante la temporada de lluvias",
      bajada: "La campaña invita a eliminar recipientes que acumulen agua y recuerda quiénes pueden vacunarse en los centros de salud.",
      img: "assets/img/prevencion-dengue.jpg",
      cuerpo: [
        "Ante las lluvias y crecidas previstas por el fenómeno de El Niño, la Municipalidad de Las Toscas puso en marcha una campaña de prevención del dengue que apuesta a la participación de toda la comunidad.",
        "Las recomendaciones son mantener limpios los patios y alrededores de las viviendas, eliminar o dar vuelta los objetos que puedan juntar agua y revisar con frecuencia los espacios comunes.",
        "También se recuerda la importancia de la vacunación. En Santa Fe está destinada a grupos priorizados, entre ellos jóvenes de 15 a 19 años de zonas definidas, personas de 15 a 59 años que ya tuvieron dengue y trabajadores de salud, seguridad y equipos territoriales. En los centros de salud de la ciudad se puede consultar si corresponde aplicarla."
      ]
    },
    {
      id: "nuevos-vehiculos-0km",
      fecha: "2026-10-23",
      cat: "Gestión",
      titulo: "La Municipalidad presentó nuevos vehículos 0 km con una inversión de más de $600 millones",
      bajada: "Camión volcador, tanque atmosférico, camioneta, automóvil y motos se suman al parque automotor. La gestión proyecta llegar a $1.000 millones en reequipamiento este año.",
      img: "assets/img/nuevos-vehiculos.jpg",
      fuente: { nombre: "Paralelo 28", url: "https://www.paralelo28.com.ar/2026/10/23/las-toscas-la-municipalidad-invirtio-mas-de-600-millones-en-nuevos-vehiculos-y-proyecta-alcanzar-los-1-000-millones-en-equipamiento-municipal/" },
      cuerpo: [
        "Frente al Palacio Municipal se realizó la presentación oficial de las nuevas unidades 0 km que se incorporan al parque automotor de la Municipalidad: un camión con caja volcadora, un tanque atmosférico de arrastre, un automóvil, una camioneta y tres motocicletas.",
        "La compra forma parte de una inversión superior a los $600 millones para fortalecer la capacidad operativa y mejorar los servicios públicos. Sumando la recuperación de maquinaria y las mejoras en el Corralón Municipal, la gestión proyecta alcanzar cerca de $1.000 millones en reequipamiento hacia fin de año.",
        "El acto fue encabezado por el intendente Iván Sánchez junto al ministro de Gobierno e Innovación Pública de la Provincia, Fabián Bastía, con la presencia del senador Orfilio Marcón, la diputada provincial Charo Mancini y autoridades de la región. En la misma jornada se firmó el convenio del Programa Potenciar para adquirir una retroexcavadora 0 km."
      ]
    },
    {
      id: "precauciones-creciente",
      fecha: "2026-10-24",
      cat: "Prevención",
      titulo: "Creciente y lluvias intensas: la Municipalidad pide extremar las precauciones",
      bajada: "Ante el avance del agua por el fenómeno de El Niño, se recuerda que está prohibido bañarse en el arroyo y acercarse a las zonas inundadas.",
      img: "assets/img/humedal-aereo.jpg",
      fuente: { nombre: "Paralelo 28", url: "https://www.paralelo28.com.ar/2026/10/24/las-toscas-la-municipalidad-solicita-extremar-las-precauciones-ante-la-creciente-y-las-lluvias-intensas/" },
      cuerpo: [
        "Con el avance del agua en el marco del fenómeno de El Niño, la Municipalidad solicita a los vecinos reforzar las medidas de prevención para evitar situaciones de riesgo.",
        "Está prohibido ingresar o bañarse en el arroyo y en otros cursos de agua mientras dure la creciente. Tampoco se debe recorrer a pie o en vehículo las zonas inundadas, aun cuando parezcan seguras.",
        "Se pide especial cuidado con niñas, niños y adolescentes, que no deben acercarse al río ni al arroyo, y se solicita evitar transitar por los sectores afectados si no se está colaborando con las tareas de asistencia."
      ]
    },
    {
      id: "inversion-escuelas",
      fecha: "2026-10-23",
      cat: "Educación",
      titulo: "Más de $120 millones invertidos en las escuelas de la ciudad durante 2026",
      bajada: "Los fondos llegaron a establecimientos de todos los niveles. La Escuela Técnica Nº 363 sumó equipamiento para su sala “363 Streaming”.",
      img: "assets/img/escuela-363.jpg",
      fuente: { nombre: "Paralelo 28", url: "https://www.paralelo28.com.ar/2026/10/23/las-toscas-invirtio-mas-de-120-millones-en-las-escuelas-de-la-ciudad-durante-2026/" },
      cuerpo: [
        "A través del Fondo de Financiamiento Educativo, el FANI y el Fondo Provincial de Educación Técnica, la Municipalidad lleva destinados en 2026 más de $120 millones a instituciones educativas de distintos niveles.",
        "En la Escuela de Educación Técnico Profesional Nº 363 “Norma Aquino” se realizó una jornada con entrega de aportes, la incorporación de equipamiento para la sala “363 Streaming” y la habilitación de un nuevo salón. La institución también recibió fondos para infraestructura y una Sala de Producción de Alimentos.",
        "Por su parte, la Escuela Nº 6049 recibió más de $8,6 millones para mejorar su instalación eléctrica."
      ]
    },
    {
      id: "taller-autonomia-digital",
      fecha: "2026-10-22",
      cat: "Desarrollo Humano",
      titulo: "Adultos mayores completaron el Taller de Autonomía Digital",
      bajada: "La propuesta del Punto Violeta enseñó a usar el celular de forma práctica y segura para la vida cotidiana.",
      img: "assets/img/taller-digital.jpg",
      fuente: { nombre: "Paralelo 28", url: "https://www.paralelo28.com.ar/2026/10/22/las-toscas-finalizo-el-taller-de-autonomia-digital-para-adultos-mayores/" },
      cuerpo: [
        "Desde el Punto Violeta, a través del Área de Desarrollo Humano, finalizó el Taller de Autonomía Digital destinado a adultos mayores.",
        "Durante los encuentros se trabajó la configuración básica del celular, la seguridad digital y el uso de aplicaciones útiles para comunicarse y resolver actividades cotidianas.",
        "La iniciativa, a cargo de la licenciada en Educación Ayelén Broggi, busca fortalecer la autonomía, la confianza y la inclusión digital de los participantes."
      ]
    },
    {
      id: "iluminacion-cementerio",
      fecha: "2026-10-21",
      cat: "Obras",
      titulo: "Nueva iluminación LED y vigilancia nocturna en el cementerio local",
      bajada: "Se instalaron 50 reflectores LED, 12 postes y más de 500 metros de tendido eléctrico para prevenir hechos de vandalismo.",
      img: "assets/img/cementerio-iluminacion.jpg",
      fuente: { nombre: "Paralelo 28", url: "https://www.paralelo28.com.ar/2026/10/21/las-toscas-la-municipalidad-reforzo-la-iluminacion-y-la-seguridad-del-cementerio-local/" },
      cuerpo: [
        "La Municipalidad completó una intervención integral en el cementerio con la colocación de 50 reflectores LED, 12 postes y más de 500 metros de tendido eléctrico, que mejoran la visibilidad en todo el predio.",
        "Además, se incorporó un sereno durante la noche y se avanza con otras acciones preventivas para resguardar las instalaciones, tras años de hechos de vandalismo.",
        "El intendente Iván Sánchez destacó que el objetivo es garantizar mejores condiciones de seguridad y preservar un espacio de especial valor para las familias de la ciudad."
      ]
    },
    {
      id: "isla-del-medio-area-protegida",
      fecha: "2026-10-09",
      cat: "Turismo",
      titulo: "La Isla del Medio fue declarada Área Natural Protegida de Interés Ecológico y Turístico",
      bajada: "A través de la Ordenanza Nº 026/2026, aprobada por el Concejo Municipal, se reconoce el valor ambiental y turístico de la isla.",
      img: "assets/img/isla-del-medio.jpg",
      cuerpo: [
        "La Municipalidad de Las Toscas, a través de la Subsecretaría de Turismo, impulsó la iniciativa que dio lugar a la Ordenanza Nº 026/2026, aprobada por el Concejo Municipal, mediante la cual se declara a la Isla del Medio como Área Natural Protegida de Interés Ecológico y Turístico.",
        "La medida busca preservar uno de los ambientes más representativos del humedal, en el marco del sitio Ramsar Jaaukanigás, y promover un uso responsable del lugar por parte de vecinos y visitantes.",
        "La declaración permitirá planificar acciones de cuidado, educación ambiental y desarrollo del ecoturismo, poniendo en valor el patrimonio natural de la ciudad."
      ]
    },
    {
      id: "asuncion-ivan-sanchez",
      fecha: "2025-12-14",
      cat: "Gestión",
      titulo: "Iván Sánchez asumió como intendente de Las Toscas",
      bajada: "Con la Plaza “23 de Agosto” colmada de vecinos, asumió el nuevo intendente y juró el Gabinete Municipal para el período 2025–2029.",
      img: "assets/img/asuncion-plaza.jpg",
      fuente: { nombre: "Paralelo 28", url: "https://www.paralelo28.com.ar/2025/12/15/las-toscas-emotivo-acto-de-asuncion-de-ivan-sanchez-como-intendente/" },
      cuerpo: [
        "En un acto realizado en la Plaza “23 de Agosto”, con gran presencia de vecinos, instituciones y autoridades de toda la región, Iván Sánchez asumió como intendente de Las Toscas para el período 2025–2029.",
        "Tras la entonación del Himno Nacional, se leyó el acta de juramento y se realizó la entrega simbólica de la llave de la Municipalidad. Luego, el intendente tomó juramento a los secretarios, subsecretarios y directores que integran el Gabinete Municipal.",
        "Participaron, entre otras autoridades, la presidenta de la Cámara de Diputadas y Diputados de Santa Fe, Clara García; el diputado nacional Pablo Farías; el senador departamental Orfilio Marcón y los diputados provinciales Charo Mancini y Sergio Rojas."
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
