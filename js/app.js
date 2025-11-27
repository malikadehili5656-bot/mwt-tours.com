/* === Fonction pages === */
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.toggle("active", p.id === "page-" + pageId);
  });
  window.scrollTo({top:0, behavior:"smooth"});
}

/* === Traduction === */
function applyTranslations(lang){
  const dict = translations[lang];
  if(!dict) return;
  Object.keys(dict).forEach(id=>{
    let el=document.getElementById(id);
    if(el){
      dict[id].includes("<br>") ? el.innerHTML=dict[id] : el.textContent=dict[id];
    }
  });
}
function switchLang(l){
  document.querySelectorAll(".lang-pill").forEach(p=>p.classList.toggle("active", p.dataset.lang===l));
  applyTranslations(l);
}

/* === CAROUSEL FULL AUTO === */
document.addEventListener("DOMContentLoaded",()=>{
  const track = document.querySelector(".carousel-inner");
  if(track){
    let index = 0;

    function slide(){
      const items = document.querySelectorAll(".carousel-item");
      const width = items[0].offsetWidth + 16;
      index++;
      if(index >= items.length){ index = 0; }

      track.scrollTo({
        left: width * index,
        behavior: "smooth"
      });
    }

    setInterval(slide, 3000);
  }

  /* CARTES CLIQUABLES → CONTACT */
  document.querySelectorAll("#page-tours .card").forEach(c=>{
    c.addEventListener("click", ()=>showPage("contact"));
  });

  /* Langue par défaut */
  applyTranslations("fr");
});
