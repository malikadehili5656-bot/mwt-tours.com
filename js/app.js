// === REVEAL ON SCROLL ===
const revealElements = document.querySelectorAll(
  '.hero-inner-card, .audience-card, .carousel-item'
);

const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      el.classList.add('reveal');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// === DRAG CAROUSEL HORIZONTALLY ===
document.querySelectorAll('.carousel-inner').forEach((carousel) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('dragging');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('dragging');
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('dragging');
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.3;
    carousel.scrollLeft = scrollLeft - walk;
  });
});

// === NAV ACTIVE HIGHLIGHT ===
document.querySelectorAll('.nav-link').forEach((link) => {
  const file = location.pathname.split('/').pop() || 'index.html';
  if (link.getAttribute('href') === file) {
    link.classList.add('active');
  }
});

// === TRANSLATIONS FR / EN / ES ===
// IDs utilisés sur index.html
const translations = {
  fr: {
    // Nav
    't-nav-home': 'Accueil',
    't-nav-tours': 'Voyages',
    't-nav-services': 'Services',
    't-nav-visas': 'Visas',
    't-nav-etudes': 'Études',
    't-nav-omra': 'Omra',
    't-nav-sport': 'Événements sportifs',
    't-nav-contact': 'Contact',

    // Hero
    't-hero-kicker': 'Agence internationale de voyages & services',
    't-hero-title': 'MWT – Votre passerelle vers les plus beaux voyages',
    't-hero-subtitle':
      'Omra, Hajj 2026, séjours, études, services administratifs & événements sportifs depuis Alicante.',
    't-hero-cta-omra': "Découvrir l’Omra & Hajj 2026",
    't-hero-cta-contact': 'Parler à un conseiller',
    't-hero-badge1': 'Basée à Alicante, accompagnement international',
    't-hero-badge2': 'Spécialiste Omra & Hajj 2026',
    't-hero-badge3': 'Packages événements sportifs & hospitalités',

    // Audience
    't-audience-title': 'À qui s’adresse MWT ?',
    't-audience-sub':
      'Une agence internationale basée à Alicante, au service des voyageurs, familles, expatriés, étudiants et touristes de toutes nationalités.',
    't-audience-spirit-title': 'Voyageurs spirituels & halal',
    't-audience-spirit-desc':
      'Omra, Hajj, voyages halal organisés avec sérieux, encadrement et accompagnement premium.',
    't-audience-expat-title': 'Expatriés & nouveaux résidents',
    't-audience-expat-desc':
      'NIE, visas, démarches administratives, logement, installation à Alicante & en Espagne.',
    't-audience-tourist-title': 'Touristes & voyageurs internationaux',
    't-audience-tourist-desc':
      'Billets d’avion & ferry, séjours, excursions, transferts aéroport, circuits sur-mesure.',
    't-audience-student-title': 'Étudiants & parents',
    't-audience-student-desc':
      'Études en Espagne & UK, dossiers, visas, orientation, logement & installation accompagnée.',
    't-audience-sport-title': 'Passionnés d’événements sportifs',
    't-audience-sport-desc':
      'Accès à des événements sportifs majeurs : football, Formule 1, tennis, hospitalités VIP & packages complets.',

    // Produits phares
    't-products-title': 'Nos produits phares',
    't-products-sub':
      'Une sélection de services et voyages signés MWT – pensés pour vos projets de vie, vos séjours et vos voyages spirituels.',
    't-car-omra': 'Omra',
    't-car-hajj': 'Hajj 2026',
    't-car-sahara': 'Sahara algérien',
    't-car-study': 'Études Espagne & UK',
    't-car-services': 'Location de voiture',
    't-car-sport': 'Événements sportifs'
  },

  en: {
    // Nav
    't-nav-home': 'Home',
    't-nav-tours': 'Tours',
    't-nav-services': 'Services',
    't-nav-visas': 'Visas',
    't-nav-etudes': 'Studies',
    't-nav-omra': 'Umrah',
    't-nav-sport': 'Sports events',
    't-nav-contact': 'Contact',

    // Hero
    't-hero-kicker': 'International travel & service agency',
    't-hero-title': 'MWT – Your gateway to the most beautiful journeys',
    't-hero-subtitle':
      'Umrah, Hajj 2026, holidays, studies, administrative services & sports events from our office in Alicante.',
    't-hero-cta-omra': 'Discover Umrah & Hajj 2026',
    't-hero-cta-contact': 'Speak with an advisor',
    't-hero-badge1': 'Based in Alicante, international support',
    't-hero-badge2': 'Umrah & Hajj 2026 specialist',
    't-hero-badge3': 'Sports events & hospitality packages',

    // Audience
    't-audience-title': 'Who is MWT for?',
    't-audience-sub':
      'An international agency based in Alicante, serving travellers, families, expats, students and tourists from all backgrounds.',
    't-audience-spirit-title': 'Spiritual & halal travellers',
    't-audience-spirit-desc':
      'Umrah, Hajj and halal trips organised with care, guidance and premium support.',
    't-audience-expat-title': 'Expats & new residents',
    't-audience-expat-desc':
      'NIE, visas, paperwork, housing and full relocation support in Alicante & Spain.',
    't-audience-tourist-title': 'Tourists & international travellers',
    't-audience-tourist-desc':
      'Flight & ferry tickets, stays, excursions, airport transfers and tailor-made tours.',
    't-audience-student-title': 'Students & parents',
    't-audience-student-desc':
      'Studies in Spain & the UK, applications, visas, guidance, housing & settling in.',
    't-audience-sport-title': 'Sports event lovers',
    't-audience-sport-desc':
      'Access to major sports events: football, Formula 1, tennis, VIP hospitality & full packages.',

    // Products
    't-products-title': 'Our flagship services',
    't-products-sub':
      'A selection of key MWT services & trips – created for your life projects, stays and spiritual journeys.',
    't-car-omra': 'Umrah',
    't-car-hajj': 'Hajj 2026',
    't-car-sahara': 'Algerian Sahara',
    't-car-study': 'Studies in Spain & UK',
    't-car-services': 'Car rental',
    't-car-sport': 'Sports events'
  },

  es: {
    // Nav
    't-nav-home': 'Inicio',
    't-nav-tours': 'Viajes',
    't-nav-services': 'Servicios',
    't-nav-visas': 'Visados',
    't-nav-etudes': 'Estudios',
    't-nav-omra': 'Umrah',
    't-nav-sport': 'Eventos deportivos',
    't-nav-contact': 'Contacto',

    // Hero
    't-hero-kicker': 'Agencia internacional de viajes y servicios',
    't-hero-title': 'MWT – Su puerta a los viajes más bellos',
    't-hero-subtitle':
      'Umrah, Hajj 2026, estancias, estudios, gestiones administrativas y eventos deportivos desde Alicante.',
    't-hero-cta-omra': 'Descubrir Umrah y Hajj 2026',
    't-hero-cta-contact': 'Hablar con un asesor',
    't-hero-badge1': 'Con sede en Alicante, acompañamiento internacional',
    't-hero-badge2': 'Especialista en Umrah y Hajj 2026',
    't-hero-badge3': 'Paquetes para eventos deportivos y hospitalities',

    // Audience
    't-audience-title': '¿A quién se dirige MWT?',
    't-audience-sub':
      'Una agencia internacional con sede en Alicante, al servicio de viajeros, familias, expatriados, estudiantes y turistas de todas las nacionalidades.',
    't-audience-spirit-title': 'Viajeros espirituales y halal',
    't-audience-spirit-desc':
      'Umrah, Hajj y viajes halal organizados con seriedad, acompañamiento y servicio premium.',
    't-audience-expat-title': 'Expatriados y nuevos residentes',
    't-audience-expat-desc':
      'NIE, visados, trámites administrativos, alojamiento e instalación en Alicante y en España.',
    't-audience-tourist-title': 'Turistas y viajeros internacionales',
    't-audience-tourist-desc':
      'Billetes de avión y ferry, estancias, excursiones, traslados al aeropuerto y circuitos a medida.',
    't-audience-student-title': 'Estudiantes y padres',
    't-audience-student-desc':
      'Estudios en España y Reino Unido, expedientes, visados, orientación, alojamiento e instalación.',
    't-audience-sport-title': 'Amantes de los eventos deportivos',
    't-audience-sport-desc':
      'Acceso a grandes eventos deportivos: fútbol, Fórmula 1, tenis, hospitalities VIP y paquetes completos.',

    // Products
    't-products-title': 'Nuestros servicios estrella',
    't-products-sub':
      'Una selección de servicios y viajes MWT pensados para tus proyectos de vida, estancias y viajes espirituales.',
    't-car-omra': 'Umrah',
    't-car-hajj': 'Hajj 2026',
    't-car-sahara': 'Sahara argelino',
    't-car-study': 'Estudios en España y Reino Unido',
    't-car-services': 'Alquiler de coche',
    't-car-sport': 'Eventos deportivos'
  },

  // AR : on garde la structure, tu pourras remplir plus tard
  ar: {}
};

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  Object.keys(dict).forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = dict[id];
  });

  document.documentElement.lang = lang;
}

// === LANG SWITCH CLICKS ===
document.querySelectorAll('.lang-pill').forEach((pill) => {
  pill.addEventListener('click', () => {
    const lang = pill.dataset.lang;

    document.querySelectorAll('.lang-pill').forEach((p) =>
      p.classList.remove('active')
    );
    pill.classList.add('active');

    if (translations[lang]) {
      applyTranslations(lang);
    }
  });
});

// Lang par défaut : FR
window.addEventListener('load', () => {
  applyTranslations('fr');
});
