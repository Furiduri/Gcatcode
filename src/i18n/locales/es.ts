import type { Dictionary } from "../types";

export default {
  meta: {
    home: {
      title: "Jorge Osvaldo Perez Mendoza | Portafolio y CV",
      description: "Ingeniero en Desarrollo de Software con licencia profesional y más de {years} años de experiencia creando sistemas backend de alto rendimiento, APIs web y soluciones empresariales en la nube.",
    },
    projects: {
      title: "Proyectos | Jorge Osvaldo Perez Mendoza",
      description: "Explora mis proyectos destacados, desde aplicaciones móviles con IA hasta plataformas comunitarias.",
    },
    landing: {
      title: "GCatcode | Soluciones tecnológicas a tu medida",
      description: "Creamos sitios web, apps móviles y sistemas de escritorio a la medida de tu negocio. Entregas cada {cycleWeeks} semanas, pagas por resultados y la primera cita es gratis, en línea o presencial en Zapopan y Guadalajara.",
    },
    terms: {
      title: "Términos y condiciones | GCatcode",
      description: "Términos y condiciones de los servicios de GCatcode: precios con IVA incluido, desarrollo por ciclos, garantía de {warrantyDays} días y legislación aplicable.",
    },
    privacy: {
      title: "Aviso de privacidad | GCatcode",
      description: "Aviso de privacidad integral de GCatcode: qué datos personales recabamos, para qué los usamos y cómo ejercer tus derechos ARCO.",
    },
  },
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    switchLanguage: "Cambiar idioma",
    mainNav: "Navegación principal",
    brandHome: "GCatcode, ir al inicio",
    services: "Servicios",
    method: "Método",
    caseStudy: "Casos reales",
    about: "Sobre mí",
    faq: "Preguntas",
    contactCta: "Cita gratis",
  },
  hero: {
    avatarAlt: "Logo de GCatCode - Jorge Osvaldo Perez Mendoza",
    greeting: "Hola, soy",
    headline: "Ingeniero en Desarrollo de Software | Desarrollador Backend .NET",
    summary: {
      lead: "Ingeniero en Desarrollo de Software con licencia profesional y más de {years} años de experiencia creando sistemas backend de alto rendimiento, APIs web y soluciones empresariales en la nube. Aprendiz proactivo y autodidacta, experto en aprovechar",
      highlight: "flujos de trabajo asistidos por LLMs y Arquitectura de IA",
      trail: "en todo el ciclo de vida del desarrollo.",
    },
    viewExperience: "Ver Experiencia",
    contact: "Contáctame",
  },
  sections: {
    experience: "Experiencia Laboral",
    featuredProjects: "Proyectos Destacados y Liderazgo",
    education: "Educación y Credenciales",
    skills: "Habilidades Técnicas",
  },
  experience: {
    resser: {
      role: "Middle Backend Developer",
      bullets: [
        "Arquitectura y desarrollo de APIs Web RESTful robustas usando C# y .NET Core 8, dando soporte a servicios críticos de telemetría y gestión de flotas.",
        "Implementación de procesos automáticos en segundo plano y pipelines de reportes aprovechando Azure Functions y servicios en la nube de Azure, mejorando la velocidad de entrega de datos operativos.",
        "Administración de bases de datos relacionales en SQL Server, escribiendo consultas T-SQL complejas y procedimientos almacenados para reducir tiempos de ejecución en el backend.",
        "Liderazgo en entregas de Sprints y flujos de integración continua a través de Azure DevOps y Git, estableciendo rigurosos estándares de revisión de código y testing QA que disminuyeron las tasas de errores en producción.",
      ],
    },
    jabil: {
      role: "Programmer Analyst I",
      bullets: [
        "Diseño, desarrollo y mantenimiento de aplicaciones web empresariales y APIs backend internas utilizando .NET Framework (C#) y Microsoft SQL Server.",
        "Colaboración con equipos de operaciones de manufactura para dar soporte a flujos de datos, reportes e integraciones con Sistemas de Ejecución de Manufactura (MES) y SAP.",
        "Elaboración de documentación técnica exhaustiva de arquitectura, especificaciones de APIs y manuales de usuario final para optimizar la capacitación entre equipos y el cumplimiento de normas.",
        "Realización de pruebas funcionales y de regresión sistemáticas, identificando cuellos de botella y previniendo anomalías en los sistemas de ejecución.",
        "Colaboración con equipos de ingeniería multifuncionales e internacionales en entornos ágiles para desplegar actualizaciones de características en servidores IIS.",
      ],
    },
    talentNetwork: {
      role: "General Incident Leader",
      bullets: [
        "Dirección de respuesta a incidentes, resolución de crisis y operaciones de servicio al cliente para la convención de innovación tecnológica más grande de América Latina con más de 40,000 asistentes.",
        "Coordinación de equipos de soporte multidisciplinarios bajo escenarios de alta presión, garantizando el cumplimiento de los estándares de privacidad de datos y protocolos de resolución rápida.",
      ],
    },
  },
  projects: {
    petMePhone: {
      description: "Aplicación Móvil con IA. Desarrollo de aplicación de overlay para tareas en Android aplicando el ciclo completo de Ingeniería de IA (síntesis de requerimientos, generación de assets, arquitectura de código, pruebas y cumplimiento normativo).",
      tags: ["Android", "IA", "Móvil"],
    },
    jalapenoLab: {
      description: "Jalapeño Store. Colectivo diseñado para dar a los juegos latinoamericanos el escaparate que merecen, impulsando la industria local al conectar autores, tiendas y jugadores. Participo como gestor y coordinador de eventos.",
      tags: ["Gestión de Eventos", "Comunidad", "Juegos de Mesa"],
    },
    juegalajara: {
      description: "Plataforma y Comunidad. Desarrollador principal y gestor del sitio web oficial. Miembro del comité organizador encargado del funcionamiento de la comunidad, así como de la coordinación y gestión de eventos sociales.",
      tags: ["Frontend", "Comunidad", "Gestión de Eventos"],
    },
    creepyBoardDay: {
      description: "Sitio de evento y manual de juego. Desarrollo del sitio del evento de Halloween de Juegalajara y del manual del juego de roles ocultos creado para esa noche, con reserva por WhatsApp, itinerario en tiempo real y buscador de roles.",
      tags: ["Astro", "Eventos", "Juegos de Mesa"],
    },
    gcatcode: {
      description: "Plataformas Web y Portafolio. Construcción de plataformas web responsivas utilizando Astro, Tailwind CSS y TypeScript, alcanzando métricas de alto rendimiento en Lighthouse.",
      tags: ["Astro", "Tailwind CSS", "TypeScript"],
    },
  },
  projectsPage: {
    heading: "Proyectos Destacados",
    intro: "Una colección de mis trabajos recientes que abarcan ingeniería de IA, desarrollo web y plataformas comunitarias.",
    moreProjects: "Más proyectos",
  },
  education: {
    graduatedLabel: "Graduado",
    licenseLabel: "Cédula Profesional (Federal)",
    entries: {
      ceti: {
        degree: "Licenciatura en Ingeniería en Desarrollo de Software",
        degreeAlt: "Bachelor of Science in Software Development Engineering",
      },
      udg: {
        degree: "Técnico Profesional en Informática",
        degreeAlt: "Professional Technician in Computer Science",
      },
    },
  },
  skills: {
    categories: {
      backend: "Backend y Núcleo",
      ai: "Ingeniería de IA y Metodologías",
      databases: "Bases de Datos y Sistemas Empresariales",
      cloud: "Nube y DevOps",
      frontend: "Frontend y Desarrollo Web",
      testing: "Testing y Calidad",
    },
    terms: {
      dependencyInjection: "Inyección de Dependencias",
      restfulApis: "APIs RESTful",
      oop: "POO",
      designPatterns: "Patrones de Diseño",
      aiSdlc: "Ciclo de Vida con IA (SDLC)",
      promptEngineering: "Ingeniería de Prompts y Harness",
      rapidPrototyping: "Prototipado Rápido",
      agile: "Scrum / Ágil",
      selfLearning: "Aprendizaje Continuo",
      storedProcedures: "Procedimientos Almacenados",
      queryOptimization: "Optimización de Consultas",
      mesSap: "Básicos de MES y SAP",
      qaIncidentPrevention: "QA y Prevención de Incidentes",
      technicalDocumentation: "Documentación Técnica",
    },
  },
  landing: {
    whatsappMessages: {
      general: "Hola, GCatcode. Me interesa optimizar mi negocio con tecnología y me gustaría platicar sobre mi caso.",
      freeCall: "Hola, GCatcode. Me gustaría agendar la cita gratuita de {minutes} minutos para platicar sobre mi negocio.",
      advisory: "Hola, GCatcode. Me interesa la asesoría técnica por hora. ¿Me pueden dar más información?",
    },
    newTabNote: "(abre WhatsApp en una pestaña nueva)",
    hero: {
      eyebrow: "Soluciones tecnológicas a tu medida",
      title: "Tu negocio debería crecer, no estancarse en tareas repetitivas.",
      subtitle: "Creamos la tecnología que necesitas para optimizar tu tiempo. Olvídate del software complicado y caro: en GCatcode diseñamos soluciones digitales a tu medida, paso a paso, con resultados desde la primera entrega.",
      primaryCta: "Quiero optimizar mi negocio",
      secondaryCta: "Agenda tu cita gratis",
      note: "Primera cita gratis y sin compromiso, de hasta {minutes} minutos, en línea o presencial en Zapopan y Guadalajara.",
    },
    problem: {
      title: "¿Te suena familiar?",
      intro: "Muchos negocios pequeños pierden horas cada semana por las mismas razones:",
      items: [
        {
          title: "Tareas manuales que se repiten",
          text: "Capturas, reportes y seguimientos que haces a mano una y otra vez, y que te quitan tiempo para lo importante.",
        },
        {
          title: "Información dispersa",
          text: "Datos repartidos entre hojas de cálculo, chats de WhatsApp y notas, difíciles de encontrar cuando más los necesitas.",
        },
        {
          title: "Software caro o que no se adapta",
          text: "Herramientas que pagas cada mes, pero que no se ajustan a la forma en que trabaja tu negocio.",
        },
      ],
    },
    services: {
      title: "Lo que hacemos por tu negocio",
      intro: "Soluciones digitales pensadas para tu forma de trabajar, sin tecnicismos innecesarios.",
      items: {
        web: {
          title: "Sitios y plataformas web",
          text: "Desde un sitio que presente tu negocio hasta plataformas con panel de administración para gestionar tu operación. Páginas web informativas desde ${staticFrom} MXN, IVA incluido.",
        },
        mobile: {
          title: "Aplicaciones móviles",
          text: "Apps para que tú, tu equipo o tus clientes tengan la información y las herramientas a la mano.",
        },
        desktop: {
          title: "Sistemas de escritorio a la medida",
          text: "Programas para tu computadora que automatizan procesos internos y se ajustan a tu operación.",
        },
        advisory: {
          title: "Asesoría y capacitación",
          text: "Te ayudamos a elegir, configurar y aprovechar la tecnología que ya existe, y capacitamos a tu equipo para usarla.",
        },
      },
    },
    method: {
      title: "Un método pensado para tu tranquilidad y tu presupuesto.",
      intro: "No te vendemos un proyecto enorme e incierto. Trabajamos por ciclos cortos y claros para que veas resultados rápidos y mantengas el control de tu inversión.",
      points: {
        cycles: {
          title: "Entregas rápidas (ciclos de {cycleWeeks} semanas)",
          text: "Trabajamos en periodos fijos de {cycleDays} días hábiles; recibes avances constantes sin esperar meses.",
        },
        results: {
          title: "Pagas por resultados, no por horas",
          text: "Pagas por módulo, y cada uno se entrega funcionando, listo para usar en tu negocio (web, móvil o escritorio).",
        },
        flexibility: {
          title: "Flexibilidad total",
          text: "¿Tuviste una idea nueva? Si aún no empezamos un módulo, lo cambiamos: solo ajustamos su cotización, sin cargos por el cambio.",
        },
      },
    },
    trust: {
      title: "Tu información y tu negocio están seguros.",
      intro: "Usamos Inteligencia Artificial para desarrollar más rápido y reducir costos, pero la calidad y la seguridad las garantiza la experiencia humana.",
      privacy: {
        title: "Cuidamos tus datos",
        text: "Trabajamos en entornos seguros y tratamos tu información conforme a nuestro",
        linkLabel: "aviso de privacidad",
      },
      review: {
        title: "Revisión humana siempre",
        text: "Cada detalle de tu proyecto se revisa y aprueba antes de entregártelo.",
      },
      warranty: {
        title: "Garantía de {warrantyDays} días",
        text: "Corregimos sin costo cualquier error en lo entregado durante los {warrantyDays} días siguientes a la entrega.",
        linkLabel: "Consulta los términos",
      },
    },
    about: {
      title: "Sobre mí",
      avatarAlt: "Logo de GCatcode",
      intro: "Soy Jorge Osvaldo Perez Mendoza, Ingeniero en Desarrollo de Software titulado. Llevo más de {years} años ayudando a empresas a resolver problemas complejos con tecnología.",
      missionLabel: "Mi misión",
      mission: "Traducir tus dolores de cabeza diarios en plataformas, aplicaciones o sistemas que simplemente funcionan.",
      cvLink: "Ver mi CV",
    },
    freeCall: {
      title: "¿No sabes por dónde empezar? Hablemos.",
      text: "A veces, el mayor obstáculo es no saber qué tecnología necesita tu negocio. Agenda una cita gratis y sin compromiso de hasta {minutes} minutos, en línea o presencial en Zapopan y Guadalajara: escuchamos tu problema y te orientamos hacia la solución tecnológica ideal, en lenguaje claro.",
      badge: "Gratis",
      details: [
        "Hasta {minutes} minutos",
        "Videollamada o presencial en Zapopan y Guadalajara",
        "Sin compromiso",
      ],
      cta: "Reservar mi cita gratis",
      advisory: {
        title: "Asesoría, capacitación y soporte técnico",
        pricePrefix: "Desde",
        price: "${rate} MXN",
        unit: "por hora",
        taxNote: "IVA incluido",
        intro: "Para cuando necesitas ayuda puntual, sin iniciar un proyecto:",
        examples: [
          "Aprender a usar una plataforma o herramienta que ya existe en el mercado.",
          "Capacitar a tu equipo de hasta {attendees} personas en las herramientas digitales de tu negocio.",
          "Resolver problemas técnicos generales con el software que ya usas.",
        ],
        scopeNote: "Tarifa para sesiones de hasta {attendees} personas sobre plataformas de uso común. Para grupos más grandes o sistemas empresariales, te enviamos una cotización por escrito antes de empezar.",
        cta: "Solicitar asesoría",
      },
    },
    faq: {
      title: "Preguntas frecuentes",
      items: {
        freeCall: {
          question: "¿La cita inicial tiene costo?",
          answer: "No. La cita inicial es gratis y sin compromiso, y dura hasta {minutes} minutos.",
        },
        inPerson: {
          question: "¿Atienden en persona?",
          answer: "Sí, en Zapopan y Guadalajara, sin costo de traslado. En otras localidades, cotizamos la sesión con los viáticos incluidos. También atendemos en línea por videollamada.",
        },
        websitePrice: {
          question: "¿Cuánto cuesta una página web informativa?",
          answer: "Desde ${staticFrom} MXN, IVA incluido, con landing page, sección «Acerca de», términos y condiciones y catálogo de productos o servicios, adaptada a celular y computadora, con SEO básico. Cada página adicional cuesta ${staticExtraPage} MXN. Se inicia con un anticipo del {staticDeposit} % y el saldo se paga antes de publicar.",
        },
        advisoryPrice: {
          question: "¿Cuánto cuesta la asesoría?",
          answer: "La asesoría, capacitación y soporte técnico cuestan desde ${rate} MXN por hora, IVA incluido. Esa tarifa base aplica a sesiones de hasta {attendees} personas sobre plataformas de uso común. Para grupos más grandes o sistemas empresariales o especializados, te enviamos una cotización por escrito antes de empezar.",
        },
        projectPayment: {
          question: "¿Cómo se paga un proyecto?",
          answer: "Por módulo, no por horas. El primer módulo inicia con un anticipo del {deposit} % y se liquida a su entrega; los siguientes se pagan antes de iniciarlos. Cada módulo se entrega funcionando, en ciclos de {cycleWeeks} semanas ({cycleDays} días hábiles).",
        },
        warranty: {
          question: "¿Qué cubre la garantía?",
          answer: "Durante los {warrantyDays} días siguientes a la entrega de cada módulo de desarrollo o página web estática, corregimos sin costo los defectos en lo entregado. No cubre funciones nuevas, cambios de alcance, fallas causadas por modificaciones de terceros ni cambios en plataformas de terceros.",
        },
        ai: {
          question: "¿Usan IA con mis datos?",
          answer: "Usamos Inteligencia Artificial para desarrollar más rápido, pero todo pasa por revisión humana antes de entregártelo. Tus datos se tratan conforme a nuestro aviso de privacidad.",
        },
      },
      termsLink: "Consulta los términos y condiciones",
      privacyLink: "Lee el aviso de privacidad",
    },
    finalCta: {
      title: "¿Listo para dejar atrás las tareas repetitivas?",
      text: "Cuéntanos qué le quita tiempo a tu negocio y te diremos cómo podemos ayudarte.",
      cta: "Escríbenos por WhatsApp",
      emailLabel: "¿Prefieres el correo? Escríbenos a",
    },
    images: {
      hero: "Comerciante sonriente con el pulgar arriba detrás del mostrador de su tienda",
      problem: "Escritorio cubierto de pilas de papeles y carpetas",
      services: "Dueña de negocio sonriente cobrando a un cliente en una terminal de punto de venta",
      method: "Dos personas planean un proyecto con notas adhesivas en una pared de vidrio",
    },
    photoCredits: { lead: "Fotos de", on: "en" },
  },
  notFound: {
    title: "Página no encontrada | GCatcode",
    description: "La página que buscas no existe o cambió de dirección.",
    heading: "Esta página no existe",
    text: "Puede que el enlace esté mal escrito o que la página haya cambiado de dirección. Desde aquí puedes volver al sitio.",
    homeCta: "Ir al inicio",
    cvCta: "Ver el CV",
    otherLanguage: "View the site in English",
    brandHome: "GCatcode, ir al inicio",
  },
  caseStudies: {
    juegalajara: {
      eyebrow: "Caso real",
      title: "Juegalajara: la comunidad de juegos de mesa de Guadalajara, en un solo lugar",
      intro: "Desarrollamos de principio a fin la plataforma web de Juegalajara. Además, conocemos la comunidad desde dentro: participamos en su coordinación, con eventos, difusión digital y alianzas con el estado y otros aliados.",
      challengeLabel: "El reto",
      challenge: "La información de la comunidad (eventos, sedes aliadas y grupos de juego) estaba dispersa entre chats y redes sociales, y era difícil saber qué, cuándo y dónde se jugaba.",
      solutionLabel: "Lo que construimos",
      solution: "Una plataforma web bilingüe (español e inglés) que reúne todo en un mismo sitio:",
      features: [
        "Panel de administración con inicio de sesión para gestionar eventos, sedes aliadas y grupos.",
        "Eventos recurrentes, sin tener que capturarlos una y otra vez.",
        "Opción para compartir la agenda de un día como imagen.",
        "Ambientes separados de pruebas y producción para publicar cambios con seguridad.",
      ],
      resultLabel: "El resultado",
      result: "La comunidad tiene un punto de referencia claro y actualizado, y el equipo organizador administra la información desde un solo panel, sin depender de mensajes dispersos.",
      stackLabel: "Tecnologías",
      linkLabel: "Visitar juegalajara.mx",
      images: {
        desktop: "Página de inicio de juegalajara.mx en una computadora",
        mobile: "Página de inicio de juegalajara.mx en un celular",
      },
    },
    creepyBoardDay: {
      eyebrow: "Caso real",
      title: "Creepy BoardDay: una noche de Halloween con juegos de mesa, de la invitación al manual del juego",
      intro: "Desarrollamos el sitio del evento de Halloween de Juegalajara en Leyendas Music Club y el manual del juego de roles ocultos creado para esa noche.",
      challengeLabel: "El reto",
      challenge: "El evento necesitaba un lugar con la fecha, la sede, el precio, el itinerario y la forma de reservar. También necesitaba un juego exclusivo cuyas reglas y roles los participantes pudieran consultar desde el celular durante la noche.",
      solutionLabel: "Lo que construimos",
      solution: "Un sitio estático y rápido, con todo el contenido en un solo archivo de datos que se valida al compilar:",
      features: [
        "Reserva directa por WhatsApp e Instagram, con cuenta regresiva y un itinerario que marca en tiempo real lo que está pasando.",
        "Manual del jugador con buscador de roles y preguntas frecuentes, al que se llega con el código QR del sobre.",
        "Cartas, íconos y código QR generados con código a partir de los mismos datos.",
        "Datos estructurados para buscadores, imágenes optimizadas y una navegación accesible que funciona sin JavaScript.",
      ],
      resultLabel: "El resultado",
      result: "Los asistentes tienen toda la información del evento y las reglas del juego en un mismo enlace, desde la invitación hasta el conteo final.",
      stackLabel: "Tecnologías",
      linkLabel: "Visitar creepyboardday.web.app",
      images: {
        desktop: "Página de inicio de creepyboardday.web.app en una computadora",
        mobile: "Página de inicio de creepyboardday.web.app en un celular",
      },
    },
  },
  legal: {
    updatedLabel: "Última actualización:",
    updatedDate: "28 de octubre de 2026",
    prevailNote: "Este documento también está disponible en inglés. En caso de discrepancia entre versiones, prevalece la versión en español.",
    backHome: "Volver al inicio",
    terms: {
      heading: "Términos y condiciones",
      intro: "Estos términos y condiciones regulan la contratación de los servicios que se ofrecen bajo la marca {brand}. Al solicitar o contratar cualquiera de nuestros servicios, aceptas estos términos.",
      sections: [
        {
          title: "Identificación del proveedor",
          blocks: [
            "Los servicios de {brand} son prestados por {name}, con sede en {location}.",
            "Correo electrónico: {email}. Teléfono y WhatsApp: {phone}.",
          ],
        },
        {
          title: "Servicios",
          blocks: [
            "{brand} ofrece los siguientes servicios:",
            [
              "Cita inicial de diagnóstico, gratuita y sin compromiso.",
              "Asesoría técnica, capacitación y soporte técnico general, incluida la orientación sobre el uso de plataformas y herramientas existentes en el mercado.",
              "Desarrollo de soluciones a la medida: sitios y plataformas web, aplicaciones móviles y sistemas de escritorio.",
              "Páginas web estáticas: sitios informativos sin backend ni base de datos.",
            ],
          ],
        },
        {
          title: "Precios",
          blocks: [
            "Todos los precios se expresan en pesos mexicanos (MXN) e incluyen el Impuesto al Valor Agregado (IVA).",
            [
              "Cita inicial: gratuita, con una duración de hasta {minutes} minutos, por videollamada o presencial en Zapopan y Guadalajara, Jalisco.",
              "Asesoría, capacitación y soporte técnico: desde ${rate} MXN por hora, IVA incluido, según el alcance descrito en la sección siguiente.",
              "Desarrollo a la medida: se cotiza por módulo, según lo descrito en la sección «Desarrollo a la medida».",
              "Páginas web estáticas: desde ${staticFrom} MXN, IVA incluido; se cotizan por actividad, según lo descrito en la sección «Páginas web estáticas».",
            ],
          ],
        },
        {
          title: "Alcance de la asesoría, capacitación y soporte técnico",
          blocks: [
            "La tarifa base de ${rate} MXN por hora, IVA incluido, aplica a sesiones de hasta {attendees} personas sobre plataformas y herramientas de uso común en el mercado, como suites de oficina, herramientas de diseño o plataformas de venta en línea.",
            "Los siguientes casos no se rigen por la tarifa base y se cotizan por escrito antes de iniciar:",
            [
              "Sesiones con más de {attendees} personas.",
              "Sistemas empresariales o especializados, o sistemas desarrollados a la medida por terceros, que requieran estudio previo de nuestra parte.",
            ],
            "La cotización indica el precio total, IVA incluido, y puede incluir el tiempo de estudio del sistema y de preparación del material. El servicio inicia únicamente cuando aceptas la cotización.",
            "Si tienes duda sobre si tu caso se cubre con la tarifa base, te lo confirmamos antes de agendar la sesión.",
          ],
        },
        {
          title: "Pago, reprogramación y cancelación de sesiones",
          blocks: [
            "Para confirmar una sesión de asesoría, capacitación o soporte técnico se paga un anticipo del {deposit} % de su costo total. El resto se paga al terminar la sesión.",
            "Cada sesión tiene una duración mínima de 1 hora y se cobra por horas completas. Del tiempo que exceda la última hora completa:",
            [
              "Hasta {graceMinutes} minutos no se cobran.",
              "Más de {graceMinutes} minutos se cobran como una hora adicional.",
            ],
            "Ese margen de {graceMinutes} minutos se reserva entre sesiones agendadas para cubrir retrasos del cliente o técnicos.",
            "Reprogramación con {noticeHours} horas o más de anticipación: sin costo, hasta {maxEarlyReschedules} veces por sesión. Si necesitas reprogramar más veces, puedes cancelar con reembolso total.",
            "Reprogramación con menos de {noticeHours} horas de anticipación:",
            [
              "El anticipo pagado se aplica a la nueva fecha.",
              "Para reprogramar, el monto pagado debe alcanzar el {lateTopUp} % del costo total de la sesión. Si ya lo alcanza, no pagas nada adicional. Este pago se descuenta del total de la sesión.",
              "Se permite hasta {maxLateReschedules} veces por sesión. Una solicitud adicional se considera cancelación con menos de {noticeHours} horas de anticipación.",
            ],
            "La nueva fecha no puede estar a más de un mes de la fecha original de la sesión. Si no aceptamos la nueva fecha, puedes elegir otra dentro de ese plazo o cancelar: sin penalización si ninguna reprogramación anterior se hizo con menos de {noticeHours} horas de anticipación; en caso contrario, se retiene el anticipo.",
            "Cancelación:",
            [
              "Con {noticeHours} horas o más de anticipación: reembolsamos el total de lo pagado.",
              "Con menos de {noticeHours} horas de anticipación: retenemos el anticipo del {deposit} % del costo total de la sesión y reembolsamos el resto de lo pagado.",
            ],
            "Si no te presentas a la sesión, tienes {noShowDays} días hábiles a partir de su fecha para reprogramarla, en las condiciones de una reprogramación con menos de {noticeHours} horas de anticipación. Si no la reprogramas en ese plazo, la sesión se cancela con la retención del anticipo.",
            "Si cancelamos o reprogramamos una sesión por causas atribuibles a nosotros, incluidas fallas técnicas de nuestra parte, puedes elegir una nueva fecha sin costo o el reembolso total. Esa reprogramación no cuenta para los límites anteriores.",
          ],
        },
        {
          title: "Sesiones presenciales",
          blocks: [
            "Las sesiones presenciales en Zapopan y Guadalajara, Jalisco, tienen la misma tarifa que las sesiones en línea. El traslado no se cobra ni cuenta como tiempo de sesión.",
            "Las sesiones presenciales en otras localidades se cotizan por escrito antes de agendarlas, con los viáticos incluidos en el precio total.",
          ],
        },
        {
          title: "Grabaciones y material de capacitación",
          blocks: [
            [
              "Puedes grabar una sesión si nos avisas antes de iniciarla. La grabación es solo para uso personal de quienes asistieron.",
              "El material que entregamos, como guías y presentaciones, es para uso interno de quienes asistieron a la sesión.",
              "No está permitido distribuir, publicar o revender las grabaciones ni el material, ni usarlos para capacitar a otras personas. Para capacitar a más personas, solicita una cotización.",
              "El material sigue siendo de nuestra autoría: al recibirlo obtienes una autorización de uso, no su propiedad.",
            ],
          ],
        },
        {
          title: "Desarrollo a la medida",
          blocks: [
            [
              "Los proyectos a la medida se organizan en módulos y se desarrollan en ciclos de {cycleWeeks} semanas ({cycleDays} días hábiles). Un módulo puede ocupar uno o varios ciclos.",
              "Al cierre de cada módulo entregamos una versión funcional: su código fuente y, si lo solicitas, su implementación en servidor.",
              "El pago es por módulo cotizado, no por horas trabajadas.",
            ],
            "Pagos:",
            [
              "Primer módulo: se inicia con un anticipo del {deposit} % y el resto se paga a más tardar en su entrega. El módulo se entrega cuando está pagado en su totalidad, y el anticipo no es reembolsable si el resto no se paga.",
              "Módulos siguientes: se pagan en su totalidad antes de iniciar su desarrollo.",
            ],
            "La planeación de los módulos futuros es una estimación y puede cambiar hasta que cada módulo se paga. El precio de un módulo queda fijo al momento de pagarlo.",
            "Cualquier módulo que aún no se haya iniciado puede cambiarse, sin importar el ciclo en el que esté planeado:",
            [
              "Un cambio se resuelve recotizando el módulo. Una vez pagado el primer módulo, recotizar cambios no tiene costo.",
              "Si un cambio afecta técnicamente a otros módulos aún no iniciados, esos módulos también se recotizan.",
              "Si un módulo recotizado ya estaba pagado, la diferencia queda como saldo a favor, que se aplica a los siguientes módulos, o como saldo pendiente, que se paga antes de iniciar ese módulo.",
              "Un módulo en desarrollo no se modifica. Los cambios que solicites sobre él se cotizan como un módulo nuevo después de su entrega.",
            ],
          ],
        },
        {
          title: "Páginas web estáticas",
          blocks: [
            "Una página web estática es un sitio informativo sin backend ni base de datos, como una landing page, una sección «Acerca de», términos y condiciones o un catálogo de productos o servicios. Esta sección aplica solo a páginas estáticas; los sistemas con frontend, backend y base de datos se rigen por la sección «Desarrollo a la medida».",
            "Precios:",
            [
              "Se cotizan por actividad (análisis, diseño, desarrollo y pruebas) con la tarifa de ${rate} MXN por hora, IVA incluido. El desarrollo incluye SEO básico y la optimización de los recursos gráficos.",
              "Cada página informativa adicional cuesta ${staticExtraPage} MXN, IVA incluido (una hora de análisis y una de desarrollo).",
              "Las promociones vigentes se rigen por la sección «Promociones».",
            ],
            "Pagos:",
            [
              "Se inicia con un anticipo del {staticDeposit} % del total.",
              "El saldo se paga antes de publicar el sitio en tu servidor.",
              "Al pagar el anticipo aceptas el desarrollo y los precios de la cotización.",
            ],
            "Entrega:",
            [
              "Debes entregarnos el material gráfico y la información del negocio que requiera el sitio.",
              "El desarrollo dura como mínimo 1 semana. Puede extenderse con aviso previo y depende del tiempo que tardes en enviarnos el material solicitado.",
              "Los avances se publican en servidores de {brand} para tu revisión.",
              "Una vez liquidado el proyecto, publicamos el sitio en el servidor que elijas y te entregamos el sitio compilado.",
            ],
            "Código fuente:",
            [
              "Si pagas el proyecto sin promociones ni descuentos, el código fuente desarrollado para tu sitio es de tu propiedad al liquidarlo y te lo entregamos junto con el sitio compilado, como se indica en la sección «Propiedad del código».",
              "En los proyectos con promoción o descuento, {brand} retiene el código fuente y su propiedad, incluso si el proyecto se detiene. Pasa a ser tuyo si pagas el valor del proyecto sin descuento.",
              "Los cambios futuros cuestan ${rate} MXN por hora, IVA incluido.",
            ],
            "La pausa y la cancelación se rigen por la sección «Pausa y cancelación de proyectos», considerando la página estática como un único módulo. En los proyectos con promoción o descuento, detenerla de inmediato no incluye la entrega del código fuente.",
          ],
        },
        {
          title: "Promociones",
          blocks: [
            "Las promociones no son permanentes. Cada promoción indica en su cotización o en su anuncio a quién va dirigida, su vigencia y sus condiciones.",
            [
              "Una promoción aplica solo a las personas a quienes va dirigida su cotización y a los proyectos contratados, con el pago del anticipo, durante su vigencia.",
              "Las promociones no son combinables.",
              "En un proyecto con promoción, {brand} retiene el código fuente y su propiedad hasta que pagues el valor del proyecto sin descuento.",
              "Una promoción puede fijar sus propios precios y su propio anticipo; si no los fija, se aplican los de estos términos.",
              "La cotización muestra el valor real del proyecto y el descuento de la promoción.",
              "Al terminar la vigencia, los proyectos nuevos se cotizan con los precios de estos términos.",
              "En todo lo que la promoción no indique, se aplican estos términos.",
            ],
          ],
        },
        {
          title: "Pausa y cancelación de proyectos",
          blocks: [
            "Puedes pausar o cancelar un proyecto en cualquier momento. En ambos casos te reembolsamos en su totalidad los módulos pagados que no se hayan iniciado y cualquier saldo a favor.",
            "Si hay un módulo en desarrollo:",
            [
              "La pausa o la cancelación toman efecto al cierre de ese módulo: lo terminamos y te lo entregamos funcionando.",
              "Si solicitas por escrito detenerlo de inmediato, te entregamos su código en el estado en que se encuentre y te reembolsamos la parte proporcional a los ciclos de ese módulo que no se hayan trabajado. Si es el primer módulo y solo se pagó el anticipo, ese anticipo cubre el trabajo realizado y no se reembolsa.",
              "Un módulo entregado de esta forma no está terminado ni probado, y no cuenta con la garantía de {warrantyDays} días. No recomendamos integrarlo a tu sistema sin completarlo; si decides hacerlo, las fallas que cause en él o en los módulos anteriores no están cubiertas.",
            ],
            "Como el código de cada módulo se entrega a su cierre, conservas todo lo entregado hasta el último módulo pagado.",
            [
              "Pausa: resguardamos el proyecto en nuestros repositorios privados durante {pauseMonths} meses para que puedas reanudarlo. Si no se reanuda en ese plazo, se considera cancelado.",
              "Cancelación: conservamos una copia del código fuente durante {retentionMonths} meses a partir de la cancelación y después la eliminamos de nuestros repositorios.",
            ],
          ],
        },
        {
          title: "Propiedad del código",
          blocks: [
            [
              "El código desarrollado específicamente para tu proyecto es de tu propiedad una vez pagado el módulo que lo contiene.",
              "En las páginas web estáticas y en los proyectos con promoción, el código fuente se rige por las secciones «Páginas web estáticas» y «Promociones».",
              "Conservamos la titularidad de nuestras herramientas, plantillas, librerías y componentes previos o de uso genérico, incluidos los que desarrollemos durante tu proyecto. Podemos publicarlos bajo una licencia de código abierto o licenciarlos a terceros.",
              "El código de uso genérico no incluye tus datos, tu información confidencial ni la lógica propia de tu negocio.",
              "Recibes una autorización gratuita, permanente y no exclusiva para usar ese código genérico dentro de tu proyecto. Si requieres exclusividad sobre él, se cotiza por separado.",
              "Las librerías de código abierto de terceros se rigen por sus propias licencias.",
              "Podemos mencionar el proyecto en nuestro portafolio, como se describe en el aviso de privacidad. Puedes negarte en cualquier momento escribiendo a {email}.",
            ],
          ],
        },
        {
          title: "Servicios de terceros",
          blocks: [
            "El hosting, los dominios y los demás servicios de terceros que requiera tu proyecto, como bases de datos, correo o APIs, se contratan a tu nombre y los pagas directamente a cada proveedor. Su configuración e implementación se incluyen en la cotización del módulo correspondiente.",
          ],
        },
        {
          title: "Garantía",
          blocks: [
            "Cada módulo de desarrollo a la medida y cada página web estática cuentan con una garantía de {warrantyDays} días naturales, contados a partir de su entrega.",
            [
              "Cubre: la corrección sin costo de defectos en lo entregado.",
              "No cubre: funciones nuevas, cambios de alcance, fallas causadas por modificaciones realizadas por terceros, cambios en plataformas o servicios de terceros ni módulos entregados sin terminar a tu solicitud.",
            ],
            "La asesoría, capacitación y soporte técnico no garantizan resultados específicos, porque estos dependen de cómo apliques lo aprendido. Si una sesión no se puede impartir por una falla de nuestra parte, se reprograma sin costo, como se indica en la sección «Pago, reprogramación y cancelación de sesiones».",
            "Para hacer válida la garantía, escríbenos dentro de ese periodo por WhatsApp al {phone} o por correo a {email}, describiendo el defecto que encontraste.",
          ],
        },
        {
          title: "Modificaciones a los términos",
          blocks: [
            "Podemos actualizar estos términos en cualquier momento. La versión vigente es la publicada en este sitio, con su fecha de última actualización. Los servicios ya contratados se rigen por los términos vigentes al momento de su contratación.",
          ],
        },
        {
          title: "Contacto",
          blocks: [
            "Para cualquier duda sobre estos términos, escríbenos a {email} o por WhatsApp al {phone}.",
          ],
        },
        {
          title: "Legislación aplicable y jurisdicción",
          blocks: [
            "Estos términos se rigen por las leyes de los Estados Unidos Mexicanos.",
            "En materia de protección al consumidor, puedes acudir a la Procuraduría Federal del Consumidor (Profeco).",
            "Para la interpretación y el cumplimiento de estos términos, las partes se someten a los tribunales competentes de Zapopan o Guadalajara, Jalisco.",
          ],
        },
      ],
    },
    privacy: {
      heading: "Aviso de privacidad",
      intro: "En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, publicada en el Diario Oficial de la Federación el 20 de marzo de 2025, te informamos cómo tratamos tus datos personales.",
      sections: [
        {
          title: "Responsable",
          blocks: [
            "{name}, quien ofrece sus servicios bajo la marca {brand}, con sede en {location}, es responsable del tratamiento de tus datos personales.",
            "Correo electrónico: {email}. Teléfono y WhatsApp: {phone}.",
          ],
        },
        {
          title: "Datos personales que recabamos",
          blocks: [
            "Recabamos los siguientes datos cuando nos contactas por WhatsApp o correo electrónico, durante una cita o durante la prestación de los servicios:",
            [
              "Nombre.",
              "Número de teléfono.",
              "Correo electrónico.",
              "Información sobre tu negocio que decidas compartirnos.",
              "Domicilio donde se realizará una sesión presencial, cuando la solicites.",
              "Datos fiscales, únicamente cuando solicites una factura.",
              "Datos bancarios, únicamente para realizar un reembolso.",
            ],
            "Tus datos bancarios son datos financieros: los solicitamos solo cuando procede un reembolso y con tu consentimiento expreso en ese momento. No los guardamos en nuestros registros; si se requiere otro reembolso, te los volvemos a solicitar. Solo se conservan en los comprobantes de la operación que exige la legislación fiscal.",
            "No recabamos datos personales sensibles.",
          ],
        },
        {
          title: "Finalidades del tratamiento",
          blocks: [
            "Usamos tus datos personales para las siguientes finalidades, necesarias para la relación que tienes con nosotros:",
            [
              "Atender tus solicitudes y responder tus mensajes.",
              "Agendar, reprogramar y cancelar citas y sesiones.",
              "Elaborar cotizaciones y prestarte los servicios contratados.",
              "Gestionar anticipos, pagos y reembolsos.",
              "Emitir facturas.",
            ],
            "Además, tenemos una finalidad secundaria, que no es necesaria para prestarte el servicio:",
            [
              "Mencionar en nuestro portafolio el proyecto que desarrollamos para ti: el nombre de tu negocio o del proyecto, su descripción y capturas de pantalla. Las capturas nunca muestran datos personales de terceros.",
            ],
            "Puedes negarte a esta finalidad en cualquier momento escribiendo a {email}. Tu negativa no afecta los servicios que te prestamos. No usamos tus datos para ninguna otra finalidad de publicidad o mercadotecnia.",
          ],
        },
        {
          title: "Datos que tratamos por cuenta de nuestros clientes",
          blocks: [
            "Cuando desarrollamos un sistema o damos soporte técnico, podemos tener acceso a datos personales que tú tratas, como los de tus clientes, y a las cuentas de los servicios contratados a tu nombre.",
            "Tratamos esos datos únicamente por tu cuenta y conforme a tus instrucciones, para prestar el servicio contratado. No los usamos para ninguna otra finalidad y los mantenemos confidenciales.",
          ],
        },
        {
          title: "Transferencias y proveedores",
          blocks: [
            "No transferimos tus datos personales a terceros, salvo cuando una ley o una autoridad competente lo exija.",
            "Nos apoyamos en proveedores de servicios tecnológicos que tratan datos por nuestra cuenta, como servicios de correo electrónico, repositorios privados de código y herramientas de Inteligencia Artificial. Solo les compartimos la información necesaria para prestar el servicio.",
            "Si nos contactas por WhatsApp, esa plataforma es operada por Meta y la información que envíes por ese medio también se rige por sus propias políticas de privacidad.",
          ],
        },
        {
          title: "Conservación de los datos",
          blocks: [
            [
              "Datos de contacto de quienes no contrataron un servicio: se eliminan después de {leadMonths} meses sin comunicación.",
              "Datos de clientes y de facturación: se conservan durante {clientYears} años, el plazo que exige la legislación fiscal, y después se eliminan.",
              "El código fuente de los proyectos se conserva según lo indicado en los términos y condiciones.",
            ],
          ],
        },
        {
          title: "Derechos ARCO y revocación del consentimiento",
          blocks: [
            "Tienes derecho a acceder a tus datos personales, rectificarlos, cancelarlos u oponerte a su tratamiento (derechos ARCO), así como a revocar el consentimiento que nos hayas otorgado.",
            "Para ejercer cualquiera de estos derechos, envía tu solicitud a {email} con la siguiente información:",
            [
              "Tu nombre y un medio para comunicarte contigo.",
              "Los documentos que acrediten tu identidad o, en su caso, la de tu representante legal.",
              "La descripción clara de los datos personales y del derecho que deseas ejercer.",
              "Cualquier otro elemento que facilite la localización de tus datos.",
            ],
            "Responderemos tu solicitud en los plazos que establece la ley.",
          ],
        },
        {
          title: "Uso de cookies y tecnologías de rastreo",
          blocks: [
            "Este sitio no utiliza cookies, herramientas de analítica ni otras tecnologías de rastreo.",
          ],
        },
        {
          title: "Cambios al aviso de privacidad",
          blocks: [
            "Podemos modificar este aviso de privacidad. Publicaremos cualquier cambio en esta página, junto con su fecha de última actualización.",
          ],
        },
        {
          title: "Autoridad",
          blocks: [
            "Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes acudir ante la Secretaría Anticorrupción y Buen Gobierno.",
          ],
        },
      ],
    },
  },
  footer: {
    builtWith: "Hecho con 💚🎲 y Astro.",
    tagline: "Soluciones tecnológicas a tu medida.",
    legalNav: "Enlaces del sitio",
    home: "Inicio",
    cv: "CV",
    terms: "Términos y condiciones",
    privacy: "Aviso de privacidad",
    whatsapp: "WhatsApp",
    email: "Correo",
    rights: "Todos los derechos reservados.",
  },
} satisfies Dictionary;
