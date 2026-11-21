(function(){
  var t=document.getElementById("mob-toggle"),d=document.getElementById("mob-drawer"),o=document.getElementById("mob-overlay"),c=document.getElementById("drawer-close");
  function openMenu(){d.removeAttribute("hidden");o.classList.add("visible");t.setAttribute("aria-expanded","true");t.setAttribute("aria-label","Close navigation menu");document.documentElement.style.overflow="hidden";}
  function closeMenu(){d.setAttribute("hidden","");o.classList.remove("visible");t.setAttribute("aria-expanded","false");t.setAttribute("aria-label","Open navigation menu");document.documentElement.style.overflow="";}
  if(t&&d&&o){
    t.addEventListener("click",function(){t.getAttribute("aria-expanded")==="true"?closeMenu():openMenu();});
    if(c){c.addEventListener("click",closeMenu);}
    o.addEventListener("click",closeMenu);
    d.querySelectorAll("a").forEach(function(a){a.addEventListener("click",closeMenu);});
    document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeMenu();}});
  }
  document.querySelectorAll(".faq-q").forEach(function(b){
    b.addEventListener("click",function(){
      var item=b.parentElement,isOpen=item.classList.contains("open");
      item.classList.toggle("open",!isOpen);
      b.setAttribute("aria-expanded",isOpen?"false":"true");
    });
  });
  var fab=document.querySelector(".fab-call"),ft=document.querySelector("footer.site-footer");
  if(fab&&ft&&"IntersectionObserver" in window){
    new IntersectionObserver(function(es){es.forEach(function(e){fab.classList.toggle("hide",e.isIntersecting);});}).observe(ft);
  }
})();
