/* =============================
   TRADUCTIONS
============================= */
const translations = {
  fr: {
    't-nav-home': 'Accueil',
    't-nav-tours': 'Tours',
    't-nav-services': 'Services',
    't-nav-contact': 'Contact',

    't-omra1-card-dates': '25 décembre<br>au 3 janvier',
    't-omra1-card-price': '1595€',
    't-omra2-card-dates': '20 janvier<br>au 3 février',
    't-omra2-card-price': '1395€',
    't-omra3-card-dates': 'Omra du<br>Ramadan',
    't-omra3-card-sub': 'Inscription ouverte',
    't-omra-card-cta-1': 'S’inscrire',
    't-omra-card-cta-2': 'S’inscrire',
    't-omra-card-cta-3': 'S’inscrire',
    't-hajj-banner-title': 'Inscription Hajj 2026',

    't-omra-title': 'Offres Omra',
    't-products-title': 'Nos produits phares',
    't-car-omra': 'Omra',
    't-car-hajj': 'Hajj 2026',
    't-car-sahara': 'Sahara algérien',
    't-car-study': 'Études Espagne & UK',
    't-car-services': 'Services de l’agence',

    't-tours-title': 'Tours & voyages',

    't-services-title': 'Services & partenaires',

    't-contact-title': 'Contact',
    't-contact-name': 'Nom',
    't-contact-firstname': 'Prénom',
    't-contact-nationality': 'Nationalité',
    't-contact-residence': 'Résidence',
    't-contact-phone': 'Téléphone',
    't-contact-message': 'Message',
    't-contact-send': 'Envoyer',
    't-contact-city': 'Ville de départ',
    't-contact-lang': 'Langue préférée',
    't-contact-date': 'Date estimée du voyage',
    't-contact-type': 'Type de demande',
    't-contact-method': 'Moyen de contact souhaité'
  },

  es: {
    't-nav-home': 'Inicio',
    't-nav-tours': 'Viajes',
    't-nav-services': 'Servicios',
    't-nav-contact': 'Contacto',

    't-contact-title': 'Contacto',
    't-contact-name': 'Nombre',
    't-contact-firstname': 'Apellido',
    't-contact-nationality': 'Nacionalidad',
    't-contact-residence': 'Residencia',
    't-contact-phone': 'Teléfono',
    't-contact-message': 'Mensaje',
    't-contact-send': 'Enviar',
    't-contact-city': 'Ciudad de salida',
    't-contact-lang': 'Idioma preferido',
    't-contact-date': 'Fecha estimada del viaje',
    't-contact-type': 'Tipo de solicitud',
    't-contact-method': 'Método de contacto preferido'
  },

  en: {
    't-nav-home': 'Home',
    't-nav-tours': 'Tours',
    't-nav-services': 'Services',
    't-nav-contact': 'Contact',

    't-contact-title': 'Contact',
    't-contact-name': 'Last name',
    't-contact-firstname': 'First name',
    't-contact-nationality': 'Nationality',
    't-contact-residence': 'Residence',
    't-contact-phone': 'Phone',
    't-contact-message': 'Message',
    't-contact-send': 'Send',
    't-contact-city': 'Departure city',
    't-contact-lang': 'Preferred language',
    't-contact-date': 'Estimated travel date',
    't-contact-type': 'Type of request',
    't-contact-method': 'Preferred contact method'
  },

  ar: {
    't-nav-home': 'الرئيسية',
    't-nav-tours': 'الرحلات',
    't-nav-services': 'الخدمات',
    't-nav-contact': 'اتصل بنا',

    't-contact-title': 'اتصل بنا',
    't-contact-name': 'الاسم',
    't-contact-firstname': 'اللقب',
    't-contact-nationality': 'الجنسية',
    't-contact-residence': 'بلد الإقامة',
    't-contact-phone': 'رقم الهاتف',
    't-contact-message': 'رسالتك',
    't-contact-send': 'إرسال',
    't-contact-city': 'مدينة الانطلاق',
    't-contact-lang': 'اللغة المفضلة',
    't-contact-date': 'تاريخ السفر المتوقع',
    't-contact-type': 'نوع الطلب',
    't-contact-method': 'طريقة التواصل المفضلة'
  }
};

/* =============================
   CHANGEMENT DE PAGE
============================= */
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.toggle("active", p.id === "page-" + pageId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =============================
   TRADUCTION
============================= */
function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  Object.keys(dict).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    if (dict[id].includes("<br>")) el.innerHTML = dict[id];
    else el.textContent = dict[id];
  });

  document.body.classList.toggle("rtl", lang === "ar");
}

function switchLang(lang) {
  document.querySelectorAll(".lang-pill").forEach(p =>
    p.classList.toggle("active", p.dataset.lang === lang)
  );
  applyTranslations(lang);
}

/* =============================
   CLICS → CONTACT
============================= */
function activateCards() {
  document.querySelectorAll(".hero-to-contact, #page-tours .card").forEach(card => {
    card.addEventListener("click", () => showPage("contact"));
  });
}

/* =============================
   CARROUSEL
============================= */
function initCarousel() {
  const track = document.querySelector(".carousel-inner");
  if (!track) return;

  let index = 0;

  setInterval(() => {
    const items = document.querySelectorAll(".carousel-item");
    if (!items.length) return;

    const width = items[0].offsetWidth + 16;
    index = (index + 1) % items.length;

    track.scrollTo({
      left: width * index,
      behavior: "smooth"
    });
  }, 3000);
}

/* =============================
   INIT
============================= */
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations("fr");
  activateCards();
  initCarousel();
});
