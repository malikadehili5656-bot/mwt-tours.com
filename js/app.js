/* ===========================
   TRANSLATIONS
=========================== */
function applyTranslations(lang){
  const dict = translations[lang];
  if(!dict) return;

  Object.keys(dict).forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    if(dict[id].includes("<br>")) el.innerHTML = dict[id];
    else el.textContent = dict[id];
  });

  document.body.classList.toggle("rtl", lang === "ar");
}

function switchLang(lang){
  document.querySelectorAll(".lang-pill").forEach(p=>{
    p.classList.toggle("active", p.dataset.lang === lang);
  });
  applyTranslations(lang);
}

/* ===========================
   NAVIGATION
=========================== */
function showPage(page){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.toggle("active", p.id === "page-" + page);
  });

  document.querySelectorAll(".nav-link").forEach(link=>{
    link.classList.toggle("active", link.dataset.pageLink === page);
  });

  window.scrollTo({ top:0, behavior:"smooth" });
}

/* ===========================
   DOM READY
=========================== */
document.addEventListener("DOMContentLoaded", ()=>{

  /* CLICK CARDS → NAV */
  document.querySelectorAll(".carousel-item").forEach(item=>{
    item.addEventListener("click", ()=>{
      const target = item.dataset.target;
      if(target) showPage(target);
    });
  });

  /* HERO buttons → contact */
  document.querySelectorAll(".hero-to-contact").forEach(btn=>{
    btn.addEventListener("click", ()=> showPage("contact"));
  });

  switchLang("fr"); // langue par défaut

  /* ===========================
     CAROUSEL AUTOMATIQUE
  =========================== */
  const carousel = document.querySelector(".carousel-inner");
  if(!carousel) return;

  let scrollPos = 0;
  let itemW = 200; // largeur estimée

  function updateItemWidth(){
    const first = carousel.querySelector(".carousel-item");
    if(first) itemW = first.offsetWidth + 16;
  }
  updateItemWidth();

  function autoSlide(){
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    scrollPos += itemW;

    if(scrollPos >= maxScroll){
      scrollPos = 0;
    }

    carousel.scrollTo({ left: scrollPos, behavior: "smooth" });
  }

  setInterval(autoSlide, 3000);

  /* ===========================
     DRAG (Desktop)
  =========================== */
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  document.addEventListener("mouseup", ()=> isDown = false);

  carousel.addEventListener("mousemove", e=>{
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
  });

});
