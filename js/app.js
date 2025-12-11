// js/app.js

// Dictionnaire de traductions : FR, ES, EN, AR
// Clé = id de l'élément dans le HTML (ex: t-nav-home)

const translations = {
  fr: {
    // NAV
    "t-nav-home": "Accueil",
    "t-nav-tours": "Voyages",
    "t-nav-services": "Services",
    "t-nav-visas": "Visas",
    "t-nav-etudes": "Études",
    "t-nav-omra": "Omra",
    "t-nav-sport": "Événements sportifs",
    "t-nav-contact": "Contact",

    // INDEX / OMRA (ancienne home – au cas où tu la gardes)
    "t-hajj-banner-title": "Inscription Hajj 2026",
    "t-omra-title": "Offres Omra",
    "t-omra1-title": "Omra 25 décembre — 3 janvier",
    "t-omra1-dates": "25/12 — 03/01",
    "t-omra1-price": "1595€",
    "t-omra1-cta": "S’inscrire",
    "t-omra2-title": "Omra 20 janvier — 3 février",
    "t-omra2-dates": "20/01 — 03/02",
    "t-omra2-price": "1395€",
    "t-omra2-cta": "S’inscrire",
    "t-omra3-title": "Omra du Ramadan",
    "t-omra3-dates": "Inscriptions ouvertes (dates à confirmer)",
    "t-omra3-cta": "S’inscrire",

    "t-audience-title": "À qui s’adresse MWT ?",
    "t-audience-sub":
      "Une agence internationale basée à Alicante, au service des voyageurs, familles, expatriés, étudiants et touristes de toutes nationalités.",
    "t-audience-spirit-title": "Voyageurs spirituels & halal",
    "t-audience-spirit-desc":
      "Omra, Hajj, voyages halal organisés avec sérieux et accompagnement premium.",
    "t-audience-expat-title": "Expatriés & nouveaux résidents",
    "t-audience-expat-desc":
      "NIE, visas, démarches administratives, logement, installation à Alicante.",
    "t-audience-tourist-title": "Touristes & voyageurs internationaux",
    "t-audience-tourist-desc":
      "Billets d’avion & ferry, séjours, excursions, transferts aéroport.",
    "t-audience-student-title": "Étudiants & parents",
    "t-audience-student-desc":
      "Études en Espagne & UK, dossiers, visas, orientation et installation.",
    "t-products-title": "Nos produits phares",
    "t-car-omra": "Omra",
    "t-car-hajj": "Hajj 2026",
    "t-car-sahara": "Sahara algérien",
    "t-car-study": "Études Espagne & UK",
    "t-car-services": "Location de voiture",

    /* ==========================
       TOURS
       ========================== */

    "t-tours-hero-kicker": "Séjours • Circuits • Expériences",
    "t-tours-hero-title": "Découvrez nos voyages & circuits avec MWT",
    "t-tours-hero-sub":
      "Séjours en Espagne, circuits dans le Sahara, voyages sur mesure, excursions et escapades. Des expériences authentiques et organisées avec soin.",
    "t-tours-hero-cta-main": "Demander un voyage sur mesure",
    "t-tours-hero-cta-whatsapp": "💬 WhatsApp MWT",

    "t-tours-intro-title": "Des voyages adaptés à chaque voyageur",
    "t-tours-intro-sub":
      "Que vous souhaitiez une aventure dans le désert, une escapade en Europe, un circuit familial ou un voyage romantique, MWT crée des expériences uniques selon votre profil et votre budget.",

    "t-tours-sahara-title": "Circuits dans le Sahara algérien",
    "t-tours-sahara-sub":
      "Découvrez le désert algérien : dunes immenses, silence magique, oasis et culture saharienne.",
    "t-tours-sahara-card1-title": "Circuit Tassili & oasis",
    "t-tours-sahara-card1-desc":
      "Randonnées, couchers de soleil, nuits en bivouac et découverte des oasis.",
    "t-tours-sahara-card2-title": "Aventure dunes & étoiles",
    "t-tours-sahara-card2-desc":
      "Excursions dans les grandes dunes, soirées sahariennes & observation du ciel.",
    "t-tours-sahara-card3-title": "Voyage culturel saharien",
    "t-tours-sahara-card3-desc":
      "Villages, traditions locales et circuits adaptés pour familles.",

    "t-tours-spain-title": "Voyages & séjours en Espagne",
    "t-tours-spain-sub":
      "City trips, détente, plages, culture : l’Espagne offre des destinations parfaites pour tous les profils.",
    "t-tours-spain-card1-title": "Alicante & Costa Blanca",
    "t-tours-spain-card1-desc":
      "Plages, paysages méditerranéens, gastronomie et excursions locales.",
    "t-tours-spain-card2-title": "Barcelone",
    "t-tours-spain-card2-desc":
      "Art, culture, mer, architecture moderne… une destination incontournable.",
    "t-tours-spain-card3-title": "Madrid & Andalousie",
    "t-tours-spain-card3-desc":
      "Séjours culturels, visites historiques, ambiance andalouse et mosquées emblématiques.",

    "t-tours-custom-title": "Voyages 100% personnalisés",
    "t-tours-custom-sub":
      "Vous choisissez : dates, destination, style d’hébergement, activités, budget. Nous organisons votre voyage sur mesure.",
    "t-tours-custom-card1-title": "Voyages romantiques",
    "t-tours-custom-card1-desc":
      "Week-ends, anniversaires, escapades couples.",
    "t-tours-custom-card2-title": "Voyages en famille",
    "t-tours-custom-card2-desc":
      "Programmes adaptés aux enfants et aux grands-parents.",
    "t-tours-custom-card3-title": "Voyages aventure",
    "t-tours-custom-card3-desc":
      "Randonnées, désert, nature et circuits sportifs.",

    "t-tours-cta-title": "Envie de voyager avec MWT ?",
    "t-tours-cta-sub":
      "Décrivez-nous votre destination, votre budget, votre style de voyage et vos dates. Nous préparons une proposition sur mesure.",
    "t-tours-cta-btn": "Préparer mon voyage",

    /* ==========================
       CONTACT
       ========================== */

    "t-contact-hero-kicker": "Assistance • Informations • Réservations",
    "t-contact-hero-title": "Contactez MWT",
    "t-contact-hero-sub":
      "Notre équipe est disponible pour répondre à vos questions concernant les voyages, Omra, visas, études, services et réservations personnalisées.",
    "t-contact-hero-cta-whatsapp": "💬 WhatsApp",
    "t-contact-hero-cta-call": "📞 Appeler MWT",

    "t-contact-direct-title": "Contact direct",
    "t-contact-direct-sub":
      "Vous pouvez nous joindre facilement par téléphone, WhatsApp ou email.",
    "t-contact-call-title": "Téléphone",
    "t-contact-call-sub": "Appelez-nous pour toute information.",
    "t-contact-whatsapp-title": "WhatsApp",
    "t-contact-whatsapp-sub": "Réponse rapide et assistance 7j/7.",
    "t-contact-mail-title": "Email",
    "t-contact-mail-sub": "Envoyez-nous vos demandes détaillées.",

    "t-contact-location-title": "Adresse de l’agence",
    "t-contact-location-sub":
      "Nous vous accueillons dans notre agence au cœur d’Alicante.",
    "t-contact-location-address":
      "📍 Calle Italia 9, 03003 Alicante – Espagne",

    "t-contact-hours-title": "Horaires",
    "t-contact-hours-sub":
      "Nos horaires d’ouverture sont adaptés aux besoins des voyageurs et familles.",
    "t-contact-hours-1": "Lundi – Vendredi : 10h–14h / 17h–20h",
    "t-contact-hours-2": "Samedi : 10h–14h30",
    "t-contact-hours-3": "Dimanche : Fermé",

    "t-contact-cta-final-title":
      "Un conseiller MWT peut vous aider maintenant",
    "t-contact-cta-final-sub":
      "Décrivez votre demande (Omra, visa, voyage, études…). Nous vous répondons rapidement.",
    "t-contact-cta-final-btn": "💬 Contacter sur WhatsApp",

    /* ==========================
       SPORT
       ========================== */

    "t-sport-hero-kicker": "Football • Formule 1 • Grands événements",
    "t-sport-hero-title":
      "Billets & Packages VIP pour les grands événements sportifs",
    "t-sport-hero-sub":
      "Ligue des Champions, Liga, Premier League, Coupe du Monde, CAN, Formule 1... Réservez vos places premium avec MWT.",
    "t-sport-hero-cta-main": "Réserver mes billets ⚽🏎️",
    "t-sport-hero-cta-info": "Plus d'informations",

    "t-sport-intro-title":
      "Tous les grands événements sportifs en Europe et dans le monde",
    "t-sport-intro-sub":
      "MWT vous propose des billets officiels, des places VIP, des packages complets (vols + hôtel + transferts) pour les plus grandes compétitions.",

    "t-sport-football-title":
      "Football : compétitions européennes & mondiales",
    "t-sport-football-sub":
      "Réservez vos billets pour les plus grands matchs, classiques européens, derbies et finales internationales.",

    "t-sport-ucl-title": "Ligue des Champions (UEFA Champions League)",
    "t-sport-ucl-desc":
      "Matches, derbies, quarts, demi-finales & finale.",
    "t-sport-europa-title": "Europa League & Conference League",
    "t-sport-europa-desc":
      "Émotions, surprises & grandes affiches européennes.",
    "t-sport-liga-title": "Liga (Espagne)",
    "t-sport-liga-desc":
      "FC Barcelone, Real Madrid, Atlético Madrid.",
    "t-sport-ligue1-title": "Ligue 1 (France)",
    "t-sport-ligue1-desc": "PSG, Marseille, Monaco, Lyon…",
    "t-sport-premier-title": "Premier League (Angleterre)",
    "t-sport-premier-desc":
      "Manchester United, City, Chelsea, Arsenal, Liverpool.",
    "t-sport-seriea-title": "Serie A (Italie)",
    "t-sport-seriea-desc": "Inter, Milan, Juventus, Napoli, Roma.",
    "t-sport-bundes-title": "Bundesliga (Allemagne)",
    "t-sport-bundes-desc": "Bayern Munich, Dortmund…",
    "t-sport-worldcup-title": "Coupe du Monde FIFA",
    "t-sport-worldcup-desc":
      "Billets, hospitalités et packages officiels.",
    "t-sport-afcon-title": "Coupe d'Afrique des Nations (CAN)",
    "t-sport-afcon-desc":
      "Places officielles, déplacements & hébergements.",

    "t-sport-f1-title": "Formule 1 : Grand Prix",
    "t-sport-f1-sub":
      "Monaco, Espagne, Italie, Belgique, Abu Dhabi… Accédez aux billets officiels et packages VIP Paddock Club.",
    "t-sport-f1-monaco-title": "Grand Prix de Monaco",
    "t-sport-f1-monaco-desc":
      "Une expérience unique dans le monde du sport automobile.",
    "t-sport-f1-spain-title": "Grand Prix d'Espagne (Barcelone)",
    "t-sport-f1-spain-desc":
      "Billets officiels et packages premium.",
    "t-sport-f1-italy-title": "Grand Prix d'Italie (Monza)",
    "t-sport-f1-italy-desc":
      "Atmosphère exceptionnelle & hospitalités VIP.",

    "t-sport-cta-title":
      "Réserver vos billets ou packages sportifs",
    "t-sport-cta-sub":
      "Dites-nous la compétition, les équipes, la date et le type de billet souhaité (standard ou VIP). Nous vous envoyons une proposition rapide et officielle.",
    "t-sport-cta-whatsapp": "💬 Réserver sur WhatsApp",
    "t-sport-cta-contact": "📄 Formulaire de contact"
  },

  /* ==========================
     ESPAGNOL
     ========================== */
  es: {
    "t-nav-home": "Inicio",
    "t-nav-tours": "Viajes",
    "t-nav-services": "Servicios",
    "t-nav-visas": "Visados",
    "t-nav-etudes": "Estudios",
    "t-nav-omra": "Omra",
    "t-nav-sport": "Eventos deportivos",
    "t-nav-contact": "Contacto",

    "t-hajj-banner-title": "Inscripción Hajj 2026",
    "t-omra-title": "Ofertas de Omra",
    "t-omra1-title": "Omra 25 diciembre — 3 enero",
    "t-omra1-dates": "25/12 — 03/01",
    "t-omra1-price": "1595€",
    "t-omra1-cta": "Inscribirse",
    "t-omra2-title": "Omra 20 enero — 3 febrero",
    "t-omra2-dates": "20/01 — 03/02",
    "t-omra2-price": "1395€",
    "t-omra2-cta": "Inscribirse",
    "t-omra3-title": "Omra de Ramadán",
    "t-omra3-dates": "Inscripciones abiertas (fechas por confirmar)",
    "t-omra3-cta": "Inscribirse",

    "t-audience-title": "¿A quién va dirigida MWT?",
    "t-audience-sub":
      "Una agencia internacional con sede en Alicante, al servicio de viajeros, familias, expatriados, estudiantes y turistas de todas las nacionalidades.",
    "t-audience-spirit-title": "Viajeros espirituales & halal",
    "t-audience-spirit-desc":
      "Omra, Hajj y viajes halal organizados con seriedad y acompañamiento premium.",
    "t-audience-expat-title": "Expatriados & nuevos residentes",
    "t-audience-expat-desc":
      "NIE, visados, trámites administrativos, vivienda e instalación en Alicante.",
    "t-audience-tourist-title": "Turistas & viajeros internacionales",
    "t-audience-tourist-desc":
      "Billetes de avión y ferry, estancias, excursiones, traslados aeropuerto.",
    "t-audience-student-title": "Estudiantes & padres",
    "t-audience-student-desc":
      "Estudios en España & Reino Unido, expedientes, visados, orientación e instalación.",
    "t-products-title": "Nuestros productos estrella",
    "t-car-omra": "Omra",
    "t-car-hajj": "Hajj 2026",
    "t-car-sahara": "Sáhara argelino",
    "t-car-study": "Estudios España & Reino Unido",
    "t-car-services": "Alquiler de coche",

    // TOURS
    "t-tours-hero-kicker": "Estancias • Circuitos • Experiencias",
    "t-tours-hero-title":
      "Descubra nuestros viajes y circuitos con MWT",
    "t-tours-hero-sub":
      "Estancias en España, circuitos en el Sáhara, viajes a medida, excursiones y escapadas. Experiencias auténticas organizadas con cuidado.",
    "t-tours-hero-cta-main": "Solicitar viaje a medida",
    "t-tours-hero-cta-whatsapp": "💬 WhatsApp MWT",

    "t-tours-intro-title":
      "Viajes adaptados a cada viajero",
    "t-tours-intro-sub":
      "Aventura en el desierto, escapada en Europa, circuito en familia o viaje romántico: MWT crea experiencias únicas según su perfil y presupuesto.",

    "t-tours-sahara-title": "Circuitos en el Sáhara argelino",
    "t-tours-sahara-sub":
      "Descubra el desierto argelino: dunas inmensas, silencio mágico, oasis y cultura sahariana.",
    "t-tours-sahara-card1-title": "Circuito Tassili & oasis",
    "t-tours-sahara-card1-desc":
      "Senderismo, puestas de sol, noches en bivac y descubrimiento de oasis.",
    "t-tours-sahara-card2-title": "Aventura dunas & estrellas",
    "t-tours-sahara-card2-desc":
      "Excursiones a las grandes dunas, veladas saharianas y observación del cielo.",
    "t-tours-sahara-card3-title": "Viaje cultural sahariano",
    "t-tours-sahara-card3-desc":
      "Pueblos, tradiciones locales y circuitos adaptados a familias.",

    "t-tours-spain-title": "Viajes & estancias en España",
    "t-tours-spain-sub":
      "City trips, relax, playas y cultura: España ofrece destinos perfectos para todos los perfiles.",
    "t-tours-spain-card1-title": "Alicante & Costa Blanca",
    "t-tours-spain-card1-desc":
      "Playas, paisajes mediterráneos, gastronomía y excursiones locales.",
    "t-tours-spain-card2-title": "Barcelona",
    "t-tours-spain-card2-desc":
      "Arte, cultura, mar y arquitectura moderna: un destino imprescindible.",
    "t-tours-spain-card3-title": "Madrid & Andalucía",
    "t-tours-spain-card3-desc":
      "Estancias culturales, visitas históricas, ambiente andaluz y mezquitas emblemáticas.",

    "t-tours-custom-title": "Viajes 100% personalizados",
    "t-tours-custom-sub":
      "Usted elige: fechas, destino, estilo de alojamiento, actividades y presupuesto. Nosotros organizamos su viaje a medida.",
    "t-tours-custom-card1-title": "Viajes románticos",
    "t-tours-custom-card1-desc":
      "Fines de semana, aniversarios y escapadas en pareja.",
    "t-tours-custom-card2-title": "Viajes en familia",
    "t-tours-custom-card2-desc":
      "Programas adaptados a niños y abuelos.",
    "t-tours-custom-card3-title": "Viajes de aventura",
    "t-tours-custom-card3-desc":
      "Senderismo, desierto, naturaleza y circuitos deportivos.",

    "t-tours-cta-title": "¿Quiere viajar con MWT?",
    "t-tours-cta-sub":
      "Cuéntenos su destino, presupuesto, estilo de viaje y fechas. Prepararemos una propuesta a medida.",
    "t-tours-cta-btn": "Preparar mi viaje",

    // CONTACT
    "t-contact-hero-kicker":
      "Asistencia • Información • Reservas",
    "t-contact-hero-title": "Contactar con MWT",
    "t-contact-hero-sub":
      "Nuestro equipo está disponible para responder a sus preguntas sobre viajes, Omra, visados, estudios, servicios y reservas personalizadas.",
    "t-contact-hero-cta-whatsapp": "💬 WhatsApp",
    "t-contact-hero-cta-call": "📞 Llamar a MWT",

    "t-contact-direct-title": "Contacto directo",
    "t-contact-direct-sub":
      "Puede comunicarse con nosotros fácilmente por teléfono, WhatsApp o email.",
    "t-contact-call-title": "Teléfono",
    "t-contact-call-sub":
      "Llámenos para cualquier información.",
    "t-contact-whatsapp-title": "WhatsApp",
    "t-contact-whatsapp-sub":
      "Respuesta rápida y asistencia 7/7.",
    "t-contact-mail-title": "Correo electrónico",
    "t-contact-mail-sub":
      "Envíenos sus solicitudes detalladas.",

    "t-contact-location-title": "Dirección de la agencia",
    "t-contact-location-sub":
      "Le recibimos en nuestra agencia en el corazón de Alicante.",
    "t-contact-location-address":
      "📍 Calle Italia 9, 03003 Alicante – España",

    "t-contact-hours-title": "Horario",
    "t-contact-hours-sub":
      "Nuestro horario está adaptado a las necesidades de viajeros y familias.",
    "t-contact-hours-1":
      "Lunes – Viernes: 10h–14h / 17h–20h",
    "t-contact-hours-2": "Sábado: 10h–14h30",
    "t-contact-hours-3": "Domingo: Cerrado",

    "t-contact-cta-final-title":
      "Un asesor MWT puede ayudarle ahora",
    "t-contact-cta-final-sub":
      "Describa su solicitud (Omra, visado, viaje, estudios…). Le responderemos rápidamente.",
    "t-contact-cta-final-btn":
      "💬 Contactar por WhatsApp",

    // SPORT
    "t-sport-hero-kicker":
      "Fútbol • Fórmula 1 • Grandes eventos",
    "t-sport-hero-title":
      "Entradas & paquetes VIP para grandes eventos deportivos",
    "t-sport-hero-sub":
      "Champions League, Liga, Premier League, Mundial, CAN, Fórmula 1... Reserve sus plazas premium con MWT.",
    "t-sport-hero-cta-main":
      "Reservar mis entradas ⚽🏎️",
    "t-sport-hero-cta-info": "Más información",

    "t-sport-intro-title":
      "Todos los grandes eventos deportivos en Europa y en el mundo",
    "t-sport-intro-sub":
      "MWT le ofrece entradas oficiales, plazas VIP y paquetes completos (vuelos + hotel + traslados) para las competiciones más importantes.",

    "t-sport-football-title":
      "Fútbol: competiciones europeas y mundiales",
    "t-sport-football-sub":
      "Reserve entradas para los mejores partidos, clásicos europeos, derbis y finales internacionales.",

    "t-sport-ucl-title":
      "Champions League (UEFA)",
    "t-sport-ucl-desc":
      "Partidos, derbis, cuartos, semifinales y final.",
    "t-sport-europa-title":
      "Europa League & Conference League",
    "t-sport-europa-desc":
      "Emociones, sorpresas y grandes duelos europeos.",
    "t-sport-liga-title": "Liga (España)",
    "t-sport-liga-desc":
      "FC Barcelona, Real Madrid, Atlético de Madrid.",
    "t-sport-ligue1-title": "Ligue 1 (Francia)",
    "t-sport-ligue1-desc": "PSG, Marsella, Mónaco, Lyon…",
    "t-sport-premier-title":
      "Premier League (Inglaterra)",
    "t-sport-premier-desc":
      "Manchester United, City, Chelsea, Arsenal, Liverpool.",
    "t-sport-seriea-title": "Serie A (Italia)",
    "t-sport-seriea-desc":
      "Inter, Milan, Juventus, Napoli, Roma.",
    "t-sport-bundes-title":
      "Bundesliga (Alemania)",
    "t-sport-bundes-desc":
      "Bayern Múnich, Dortmund…",
    "t-sport-worldcup-title": "Copa del Mundo FIFA",
    "t-sport-worldcup-desc":
      "Entradas, hospitality y paquetes oficiales.",
    "t-sport-afcon-title":
      "Copa Africana de Naciones (CAN)",
    "t-sport-afcon-desc":
      "Entradas oficiales, desplazamientos y alojamiento.",

    "t-sport-f1-title": "Fórmula 1: Grandes Premios",
    "t-sport-f1-sub":
      "Mónaco, España, Italia, Bélgica, Abu Dabi… Acceda a entradas oficiales y paquetes VIP Paddock Club.",
    "t-sport-f1-monaco-title":
      "Gran Premio de Mónaco",
    "t-sport-f1-monaco-desc":
      "Una experiencia única en el mundo del motor.",
    "t-sport-f1-spain-title":
      "Gran Premio de España (Barcelona)",
    "t-sport-f1-spain-desc":
      "Entradas oficiales y paquetes premium.",
    "t-sport-f1-italy-title":
      "Gran Premio de Italia (Monza)",
    "t-sport-f1-italy-desc":
      "Ambiente excepcional y hospitality VIP.",

    "t-sport-cta-title":
      "Reserve sus entradas o paquetes deportivos",
    "t-sport-cta-sub":
      "Indíquenos la competición, los equipos, la fecha y el tipo de entrada (estándar o VIP). Le enviaremos una propuesta rápida y oficial.",
    "t-sport-cta-whatsapp":
      "💬 Reservar por WhatsApp",
    "t-sport-cta-contact":
      "📄 Formulario de contacto"
  },

  /* ==========================
     ENGLISH
     ========================== */
  en: {
    "t-nav-home": "Home",
    "t-nav-tours": "Trips",
    "t-nav-services": "Services",
    "t-nav-visas": "Visas",
    "t-nav-etudes": "Studies",
    "t-nav-omra": "Umrah",
    "t-nav-sport": "Sports events",
    "t-nav-contact": "Contact",

    "t-hajj-banner-title": "Hajj 2026 registration",
    "t-omra-title": "Umrah offers",
    "t-omra1-title": "Umrah 25 December — 3 January",
    "t-omra1-dates": "25/12 — 03/01",
    "t-omra1-price": "1595€",
    "t-omra1-cta": "Register",
    "t-omra2-title": "Umrah 20 January — 3 February",
    "t-omra2-dates": "20/01 — 03/02",
    "t-omra2-price": "1395€",
    "t-omra2-cta": "Register",
    "t-omra3-title": "Ramadan Umrah",
    "t-omra3-dates":
      "Registrations open (dates to be confirmed)",
    "t-omra3-cta": "Register",

    "t-audience-title": "Who is MWT for?",
    "t-audience-sub":
      "An international agency based in Alicante, serving travellers, families, expatriates, students and tourists of all nationalities.",
    "t-audience-spirit-title": "Spiritual & halal travellers",
    "t-audience-spirit-desc":
      "Umrah, Hajj and halal trips organized seriously with premium support.",
    "t-audience-expat-title": "Expatriates & new residents",
    "t-audience-expat-desc":
      "NIE, visas, paperwork, housing, settling in Alicante.",
    "t-audience-tourist-title":
      "Tourists & international travellers",
    "t-audience-tourist-desc":
      "Flight & ferry tickets, stays, excursions, airport transfers.",
    "t-audience-student-title": "Students & parents",
    "t-audience-student-desc":
      "Studies in Spain & the UK, files, visas, guidance and settling in.",
    "t-products-title": "Our key products",
    "t-car-omra": "Umrah",
    "t-car-hajj": "Hajj 2026",
    "t-car-sahara": "Algerian Sahara",
    "t-car-study": "Studies in Spain & UK",
    "t-car-services": "Car rental",

    // TOURS
    "t-tours-hero-kicker": "Stays • Circuits • Experiences",
    "t-tours-hero-title":
      "Discover our trips & tours with MWT",
    "t-tours-hero-sub":
      "Stays in Spain, Sahara tours, tailor-made trips, excursions and getaways. Authentic experiences organized with care.",
    "t-tours-hero-cta-main": "Request a tailor-made trip",
    "t-tours-hero-cta-whatsapp": "💬 WhatsApp MWT",

    "t-tours-intro-title":
      "Trips tailored to every traveller",
    "t-tours-intro-sub":
      "Whether you want a desert adventure, a European escape, a family tour or a romantic trip, MWT creates unique experiences based on your profile and budget.",

    "t-tours-sahara-title": "Algerian Sahara tours",
    "t-tours-sahara-sub":
      "Discover the Algerian desert: huge dunes, magical silence, oases and Saharan culture.",
    "t-tours-sahara-card1-title":
      "Tassili & oasis tour",
    "t-tours-sahara-card1-desc":
      "Hikes, sunsets, bivouac nights and oasis discovery.",
    "t-tours-sahara-card2-title":
      "Dunes & stars adventure",
    "t-tours-sahara-card2-desc":
      "Excursions in the big dunes, Saharan evenings and stargazing.",
    "t-tours-sahara-card3-title":
      "Cultural Saharan journey",
    "t-tours-sahara-card3-desc":
      "Villages, local traditions and family-friendly tours.",

    "t-tours-spain-title": "Trips & stays in Spain",
    "t-tours-spain-sub":
      "City trips, relaxation, beaches, culture: Spain offers perfect destinations for every profile.",
    "t-tours-spain-card1-title":
      "Alicante & Costa Blanca",
    "t-tours-spain-card1-desc":
      "Beaches, Mediterranean landscapes, gastronomy and local excursions.",
    "t-tours-spain-card2-title": "Barcelona",
    "t-tours-spain-card2-desc":
      "Art, culture, sea and modern architecture… a must-see destination.",
    "t-tours-spain-card3-title":
      "Madrid & Andalusia",
    "t-tours-spain-card3-desc":
      "Cultural stays, historical visits, Andalusian atmosphere and iconic mosques.",

    "t-tours-custom-title": "100% tailor-made trips",
    "t-tours-custom-sub":
      "You choose: dates, destination, accommodation style, activities, budget. We organize your tailor-made trip.",
    "t-tours-custom-card1-title":
      "Romantic getaways",
    "t-tours-custom-card1-desc":
      "Weekends, anniversaries, couple trips.",
    "t-tours-custom-card2-title": "Family trips",
    "t-tours-custom-card2-desc":
      "Programs suitable for children and grandparents.",
    "t-tours-custom-card3-title": "Adventure trips",
    "t-tours-custom-card3-desc":
      "Hiking, desert, nature & sports tours.",

    "t-tours-cta-title": "Want to travel with MWT?",
    "t-tours-cta-sub":
      "Tell us your destination, budget, travel style and dates. We’ll prepare a tailor-made proposal.",
    "t-tours-cta-btn": "Plan my trip",

    // CONTACT
    "t-contact-hero-kicker":
      "Support • Information • Bookings",
    "t-contact-hero-title": "Contact MWT",
    "t-contact-hero-sub":
      "Our team is available to answer your questions about trips, Umrah, visas, studies, services and tailor-made bookings.",
    "t-contact-hero-cta-whatsapp": "💬 WhatsApp",
    "t-contact-hero-cta-call": "📞 Call MWT",

    "t-contact-direct-title": "Direct contact",
    "t-contact-direct-sub":
      "You can reach us easily by phone, WhatsApp or email.",
    "t-contact-call-title": "Phone",
    "t-contact-call-sub":
      "Call us for any information.",
    "t-contact-whatsapp-title": "WhatsApp",
    "t-contact-whatsapp-sub":
      "Quick reply and 7/7 assistance.",
    "t-contact-mail-title": "Email",
    "t-contact-mail-sub":
      "Send us your detailed requests.",

    "t-contact-location-title": "Agency address",
    "t-contact-location-sub":
      "We welcome you in our agency in the heart of Alicante.",
    "t-contact-location-address":
      "📍 Calle Italia 9, 03003 Alicante – Spain",

    "t-contact-hours-title": "Opening hours",
    "t-contact-hours-sub":
      "Our opening hours are adapted to travellers and families.",
    "t-contact-hours-1":
      "Monday – Friday: 10:00–14:00 / 17:00–20:00",
    "t-contact-hours-2":
      "Saturday: 10:00–14:30",
    "t-contact-hours-3":
      "Sunday: Closed",

    "t-contact-cta-final-title":
      "An MWT advisor can help you now",
    "t-contact-cta-final-sub":
      "Describe your request (Umrah, visa, trip, studies…). We will answer quickly.",
    "t-contact-cta-final-btn":
      "💬 Contact on WhatsApp",

    // SPORT
    "t-sport-hero-kicker":
      "Football • Formula 1 • Major events",
    "t-sport-hero-title":
      "VIP tickets & packages for major sports events",
    "t-sport-hero-sub":
      "Champions League, La Liga, Premier League, World Cup, AFCON, Formula 1... Book your premium seats with MWT.",
    "t-sport-hero-cta-main":
      "Book my tickets ⚽🏎️",
    "t-sport-hero-cta-info": "More information",

    "t-sport-intro-title":
      "All major sports events in Europe and worldwide",
    "t-sport-intro-sub":
      "MWT offers official tickets, VIP seats, and full packages (flights + hotel + transfers) for the biggest competitions.",

    "t-sport-football-title":
      "Football: European & world competitions",
    "t-sport-football-sub":
      "Book tickets for top matches, European classics, derbies and international finals.",

    "t-sport-ucl-title":
      "UEFA Champions League",
    "t-sport-ucl-desc":
      "Matches, derbies, quarter-finals, semi-finals & final.",
    "t-sport-europa-title":
      "Europa League & Conference League",
    "t-sport-europa-desc":
      "Emotions, surprises & major European clashes.",
    "t-sport-liga-title": "La Liga (Spain)",
    "t-sport-liga-desc":
      "FC Barcelona, Real Madrid, Atlético Madrid.",
    "t-sport-ligue1-title": "Ligue 1 (France)",
    "t-sport-ligue1-desc":
      "PSG, Marseille, Monaco, Lyon…",
    "t-sport-premier-title":
      "Premier League (England)",
    "t-sport-premier-desc":
      "Manchester United, City, Chelsea, Arsenal, Liverpool.",
    "t-sport-seriea-title": "Serie A (Italy)",
    "t-sport-seriea-desc":
      "Inter, Milan, Juventus, Napoli, Roma.",
    "t-sport-bundes-title":
      "Bundesliga (Germany)",
    "t-sport-bundes-desc":
      "Bayern Munich, Dortmund…",
    "t-sport-worldcup-title": "FIFA World Cup",
    "t-sport-worldcup-desc":
      "Tickets, hospitality and official packages.",
    "t-sport-afcon-title":
      "Africa Cup of Nations (AFCON)",
    "t-sport-afcon-desc":
      "Official tickets, travel and accommodation.",

    "t-sport-f1-title": "Formula 1: Grand Prix",
    "t-sport-f1-sub":
      "Monaco, Spain, Italy, Belgium, Abu Dhabi… Access official tickets and VIP Paddock Club packages.",
    "t-sport-f1-monaco-title":
      "Monaco Grand Prix",
    "t-sport-f1-monaco-desc":
      "A unique experience in the motorsport world.",
    "t-sport-f1-spain-title":
      "Spanish Grand Prix (Barcelona)",
    "t-sport-f1-spain-desc":
      "Official tickets and premium packages.",
    "t-sport-f1-italy-title":
      "Italian Grand Prix (Monza)",
    "t-sport-f1-italy-desc":
      "Exceptional atmosphere & VIP hospitality.",

    "t-sport-cta-title":
      "Book your sports tickets or packages",
    "t-sport-cta-sub":
      "Tell us the competition, teams, date and ticket type (standard or VIP). We will send you a fast and official offer.",
    "t-sport-cta-whatsapp":
      "💬 Book via WhatsApp",
    "t-sport-cta-contact":
      "📄 Contact form"
  },

  /* ==========================
     ARABE (simple & clair)
     ========================== */
  ar: {
    "t-nav-home": "الرئيسية",
    "t-nav-tours": "الرحلات",
    "t-nav-services": "الخدمات",
    "t-nav-visas": "التأشيرات",
    "t-nav-etudes": "الدراسة",
    "t-nav-omra": "العمرة",
    "t-nav-sport": "الفعاليات الرياضية",
    "t-nav-contact": "اتصل بنا",

    "t-hajj-banner-title": "التسجيل لحج 2026",
    "t-omra-title": "عروض العمرة",
    "t-omra1-title": "عمرة 25 ديسمبر – 3 يناير",
    "t-omra1-dates": "25/12 – 03/01",
    "t-omra1-price": "1595€",
    "t-omra1-cta": "التسجيل",
    "t-omra2-title": "عمرة 20 يناير – 3 فبراير",
    "t-omra2-dates": "20/01 – 03/02",
    "t-omra2-price": "1395€",
    "t-omra2-cta": "التسجيل",
    "t-omra3-title": "عمرة رمضان",
    "t-omra3-dates": "التسجيل مفتوح (التواريخ لاحقًا)",
    "t-omra3-cta": "التسجيل",

    "t-audience-title": "لمن موجهة MWT؟",
    "t-audience-sub":
      "وكالة دولية في أليكانتي، في خدمة المسافرين والعائلات والمغتربين والطلاب والسياح من جميع الجنسيات.",
    "t-audience-spirit-title": "المسافرون الروحانيون والحلال",
    "t-audience-spirit-desc":
      "عمرة، حج ورحلات حلال بتنظيم جدي ومرافقة مميزة.",
    "t-audience-expat-title": "المغتربون والمقيمون الجدد",
    "t-audience-expat-desc":
      "رقم NIE، التأشيرات، الإجراءات الإدارية، السكن والاستقرار في أليكانتي.",
    "t-audience-tourist-title": "السياح والمسافرون الدوليون",
    "t-audience-tourist-desc":
      "تذاكر طيران وبحرية، إقامات، جولات، ونقل من وإلى المطار.",
    "t-audience-student-title": "الطلاب والأولياء",
    "t-audience-student-desc":
      "دراسة في إسبانيا والمملكة المتحدة، ملفات، تأشيرات، توجيه واستقرار.",
    "t-products-title": "أهم خدماتنا",
    "t-car-omra": "العمرة",
    "t-car-hajj": "حج 2026",
    "t-car-sahara": "الصحراء الجزائرية",
    "t-car-study": "الدراسة في إسبانيا والمملكة المتحدة",
    "t-car-services": "تأجير السيارات",

    // TOURS
    "t-tours-hero-kicker": "إقامات • جولات • تجارب",
    "t-tours-hero-title": "اكتشف رحلات وجولات MWT",
    "t-tours-hero-sub":
      "إقامات في إسبانيا، جولات في الصحراء، رحلات حسب الطلب، ونزهات قصيرة. تجارب أصيلة بتنظيم احترافي.",
    "t-tours-hero-cta-main": "طلب رحلة حسب الطلب",
    "t-tours-hero-cta-whatsapp": "💬 واتساب MWT",

    "t-tours-intro-title":
      "رحلات تناسب كل مسافر",
    "t-tours-intro-sub":
      "مغامرة في الصحراء، هروب إلى أوروبا، جولة عائلية أو رحلة رومانسية – نُعدّ لك تجربة خاصة حسب ميزانيتك واحتياجاتك.",

    "t-tours-sahara-title": "جولات في الصحراء الجزائرية",
    "t-tours-sahara-sub":
      "اكتشف الصحراء الجزائرية: كثبان عالية، سكون ساحر، وواحات وثقافة صحراوية.",
    "t-tours-sahara-card1-title": "جولة الطاسيلي والواحات",
    "t-tours-sahara-card1-desc":
      "مشي، غروب شمس، مبيت في الخلاء واكتشاف الواحات.",
    "t-tours-sahara-card2-title": "مغامرة الكثبان والنجوم",
    "t-tours-sahara-card2-desc":
      "خروج إلى الكثبان الكبرى، سهرات صحراوية ومشاهدة السماء.",
    "t-tours-sahara-card3-title":
      "رحلة ثقافية صحراوية",
    "t-tours-sahara-card3-desc":
      "قرى، عادات محلية وجولات مناسبة للعائلات.",

    "t-tours-spain-title": "رحلات وإقامات في إسبانيا",
    "t-tours-spain-sub":
      "مدن، استرخاء، شواطئ وثقافة – إسبانيا وجهة تناسب الجميع.",
    "t-tours-spain-card1-title":
      "أليكانتي وكوستا بلانكا",
    "t-tours-spain-card1-desc":
      "شواطئ، مناظر متوسطية، مطبخ محلي وجولات قريبة.",
    "t-tours-spain-card2-title": "برشلونة",
    "t-tours-spain-card2-desc":
      "فن، ثقافة، بحر وعمارة حديثة – مدينة لا بد من زيارتها.",
    "t-tours-spain-card3-title":
      "مدريد والأندلس",
    "t-tours-spain-card3-desc":
      "إقامات ثقافية، زيارات تاريخية، أجواء أندلسية ومساجد معروفة.",

    "t-tours-custom-title": "رحلات مصممة 100٪ حسب الطلب",
    "t-tours-custom-sub":
      "أنت تختار: التواريخ، الوجهة، نوع السكن، الأنشطة والميزانية. ونحن ننظم رحلتك بالكامل.",
    "t-tours-custom-card1-title":
      "رحلات رومانسية",
    "t-tours-custom-card1-desc":
      "عطلات نهاية الأسبوع، أعياد الزواج ورحلات الأزواج.",
    "t-tours-custom-card2-title":
      "رحلات عائلية",
    "t-tours-custom-card2-desc":
      "برامج تناسب الأطفال وكبار السن.",
    "t-tours-custom-card3-title":
      "رحلات مغامرة",
    "t-tours-custom-card3-desc":
      "مشي، صحراء، طبيعة وجولات رياضية.",

    "t-tours-cta-title": "هل تريد السفر مع MWT؟",
    "t-tours-cta-sub":
      "أخبرنا بوجهتك، ميزانيتك، أسلوب السفر والتواريخ. سنقترح عليك رحلة مناسبة.",
    "t-tours-cta-btn": "تخطيط رحلتي",

    // CONTACT
    "t-contact-hero-kicker":
      "مساعدة • معلومات • حجوزات",
    "t-contact-hero-title": "اتصل بـ MWT",
    "t-contact-hero-sub":
      "فريقنا متوفر للرد على استفساراتك حول السفر، العمرة، التأشيرات، الدراسة والخدمات والحجوزات الخاصة.",
    "t-contact-hero-cta-whatsapp": "💬 واتساب",
    "t-contact-hero-cta-call": "📞 الاتصال بـ MWT",

    "t-contact-direct-title": "اتصال مباشر",
    "t-contact-direct-sub":
      "يمكنك التواصل معنا بسهولة عبر الهاتف أو الواتساب أو البريد الإلكتروني.",
    "t-contact-call-title": "الهاتف",
    "t-contact-call-sub":
      "اتصل بنا لأي استفسار.",
    "t-contact-whatsapp-title": "واتساب",
    "t-contact-whatsapp-sub":
      "رد سريع ومساعدة 7 أيام في الأسبوع.",
    "t-contact-mail-title": "البريد الإلكتروني",
    "t-contact-mail-sub":
      "أرسل لنا طلبك بالتفصيل.",

    "t-contact-location-title": "عنوان الوكالة",
    "t-contact-location-sub":
      "نستقبلكم في وكالتنا في قلب مدينة أليكانتي.",
    "t-contact-location-address":
      "📍 كالي إيطاليا 9، 03003 أليكانتي – إسبانيا",

    "t-contact-hours-title": "ساعات العمل",
    "t-contact-hours-sub":
      "ساعات عملنا ملائمة لاحتياجات المسافرين والعائلات.",
    "t-contact-hours-1":
      "الاثنين – الجمعة: 10:00–14:00 / 17:00–20:00",
    "t-contact-hours-2": "السبت: 10:00–14:30",
    "t-contact-hours-3": "الأحد: مغلق",

    "t-contact-cta-final-title":
      "مستشار من MWT يمكنه مساعدتك الآن",
    "t-contact-cta-final-sub":
      "صف لنا طلبك (عمرة، تأشيرة، سفر، دراسة…) وسنرد عليك في أقرب وقت.",
    "t-contact-cta-final-btn":
      "💬 التواصل عبر الواتساب",

    // SPORT
    "t-sport-hero-kicker":
      "كرة قدم • فورمولا 1 • أحداث كبرى",
    "t-sport-hero-title":
      "تذاكر وباقات VIP لأهم الأحداث الرياضية",
    "t-sport-hero-sub":
      "دوري أبطال أوروبا، الليغا، البريميرليغ، كأس العالم، كأس إفريقيا، فورمولا 1… احجز مقاعدك المميزة مع MWT.",
    "t-sport-hero-cta-main": "حجز تذاكر ⚽🏎️",
    "t-sport-hero-cta-info": "مزيد من المعلومات",

    "t-sport-intro-title":
      "أهم الأحداث الرياضية في أوروبا والعالم",
    "t-sport-intro-sub":
      "نوفر تذاكر رسمية، مقاعد VIP وباقات كاملة (طيران + فندق + نقل) لأكبر البطولات.",

    "t-sport-football-title":
      "كرة القدم: بطولات أوروبية وعالمية",
    "t-sport-football-sub":
      "احجز تذاكر أكبر المباريات والكلاسيكيات الأوروبية والنهائيات الدولية.",

    "t-sport-ucl-title":
      "دوري أبطال أوروبا",
    "t-sport-ucl-desc":
      "مباريات، كلاسيكيات، ربع نهائي، نصف نهائي ونهائي.",
    "t-sport-europa-title":
      "الدوري الأوروبي وكونفرنس ليغ",
    "t-sport-europa-desc":
      "إثارة، مفاجآت ومواجهات أوروبية قوية.",
    "t-sport-liga-title": "الليغا (إسبانيا)",
    "t-sport-liga-desc":
      "برشلونة، ريال مدريد، أتلتيكو مدريد.",
    "t-sport-ligue1-title": "الدوري الفرنسي",
    "t-sport-ligue1-desc":
      "باريس سان جيرمان، مارسيليا، موناكو، ليون…",
    "t-sport-premier-title":
      "البريميرليغ (إنجلترا)",
    "t-sport-premier-desc":
      "مانشستر يونايتد، سيتي، تشيلسي، أرسنال، ليفربول.",
    "t-sport-seriea-title": "السيري آ (إيطاليا)",
    "t-sport-seriea-desc":
      "إنتر، ميلان، يوفنتوس، نابولي، روما.",
    "t-sport-bundes-title":
      "البوندسليغا (ألمانيا)",
    "t-sport-bundes-desc":
      "بايرن ميونخ، دورتموند…",
    "t-sport-worldcup-title":
      "كأس العالم لكرة القدم",
    "t-sport-worldcup-desc":
      "تذاكر، ضيافة وباقات رسمية.",
    "t-sport-afcon-title":
      "كأس أمم إفريقيا",
    "t-sport-afcon-desc":
      "تذاكر رسمية، سفر وإقامة.",

    "t-sport-f1-title": "فورمولا 1: سباقات الجائزة الكبرى",
    "t-sport-f1-sub":
      "موناكو، إسبانيا، إيطاليا، بلجيكا، أبوظبي… تذاكر رسمية وباقات VIP.",
    "t-sport-f1-monaco-title":
      "جائزة موناكو الكبرى",
    "t-sport-f1-monaco-desc":
      "تجربة فريدة في عالم سباقات السيارات.",
    "t-sport-f1-spain-title":
      "جائزة إسبانيا الكبرى (برشلونة)",
    "t-sport-f1-spain-desc":
      "تذاكر رسمية وباقات مميزة.",
    "t-sport-f1-italy-title":
      "جائزة إيطاليا الكبرى (مونزا)",
    "t-sport-f1-italy-desc":
      "أجواء استثنائية وضيافة VIP.",

    "t-sport-cta-title":
      "حجز تذاكر أو باقات رياضية",
    "t-sport-cta-sub":
      "أخبرنا بالبطولة، الفرق، التاريخ ونوع التذكرة (عادية أو VIP)، وسنرسل لك عرضًا رسميًا سريعًا.",
    "t-sport-cta-whatsapp":
      "💬 الحجز عبر الواتساب",
    "t-sport-cta-contact":
      "📄 استمارة الاتصال"
  }
};

/* =========================================
   FONCTIONS DE LANGUE
   ========================================= */

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  Object.keys(dict).forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = dict[id];
    }
  });
}

function updateDirection(lang) {
  if (lang === "ar") {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }
  document.documentElement.lang = lang;
}

function setActiveLangPill(lang) {
  document.querySelectorAll(".lang-pill").forEach((pill) => {
    if (pill.dataset.lang === lang) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
}

function setLanguage(lang) {
  updateDirection(lang);
  setActiveLangPill(lang);
  applyTranslations(lang);
  try {
    localStorage.setItem("mwt-lang", lang);
  } catch (e) {
    // ignore if storage blocked
  }
}

/* =========================================
   INIT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Récupérer langue sauvegardée ou défaut FR
  let lang = "fr";
  try {
    const saved = localStorage.getItem("mwt-lang");
    if (saved && translations[saved]) {
      lang = saved;
    }
  } catch (e) {}

  setLanguage(lang);

  // Click sur les pastilles de langue
  document.querySelectorAll(".lang-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const newLang = pill.dataset.lang;
      if (newLang && translations[newLang]) {
        setLanguage(newLang);
      }
    });
  });
});
