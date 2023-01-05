"use strict"


document.addEventListener("click", open);
function open(e){
   const clicClak = e.target;
   if(clicClak.closest(".column-footer__title")){
      const nextElem = clicClak.nextElementSibling;
      console.log(nextElem)
      nextElem.classList.toggle('open-cart')
   }
   }