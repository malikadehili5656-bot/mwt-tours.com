/* =============================
      SYSTEME DE PAGES
============================= */
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.toggle("active", p.id === "page-" + pageId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =============================
     TRADUCTIONS — FIX COMPLET
============================= */
function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  Object.keys(dict).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    // Autoriser <br> dans les traductions
    if (dict[id].includes("<br>")) {
      el.innerHTML = dict[id];
    } else {
      el.textContent = dict[id];
    }
  });
}

// Changer de langue
function switchLang(lang) {
  document
    .querySelectorAll(".lang-pill")
    .forEach(p => p.classList.toggle("active", p.dataset.lang === lang));

  applyTranslations(lang);
}

/* =============================
     CARROUSSEL AUTOMATIQUE
============================= */
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-inner");

  if (track) {
    let index = 0;

    function autoSlide() {
      const items = document.querySelectorAll(".carousel-item");
      if (items.length < 2) return;

      const itemWidth = items[0].offsetWidth + 16; // marge/gap
      index++;

      if (index >= items.length) {
        index = 0;
      }

      track.scrollTo({
        left: itemWidth * index,
        behavior: "smooth"
      });
    }

    // Défilement automatique toutes les 3 secondes
    setInterval(autoSlide, 3000);
  }

  /* =============================
       CARTES TOURS → CONTACT
  ============================= */
  document.querySelectorAll("#page-tours .card").forEach(card => {
    card.addEventListener("click", () => showPage("contact"));
  });

  /* =============================
       DÉMARRAGE : FR PAR DÉFAUT
  ============================= */
  applyTranslations("fr");
});
