  const hamburguer = document.querySelector(".burger-button")
 
  hamburguer.addEventListener("click", () => {
    if (document.querySelector(".hide")){
      const switchClass = document.querySelector(".hide")
      const switchClassAll = document.querySelector(".show")
      const switchClassShow = document.querySelector(".show-svg")
      const switchClassHide = document.querySelector(".hide-svg")
      switchClass.className=switchClass.className.replace('hide', 'show');
      switchClassAll.className=switchClassAll.className.replace('show', 'hide');
      switchClassShow.setAttribute("class","hide-svg");
      switchClassHide.setAttribute("class","show-svg");
    } else {
      const switchClass = document.querySelector(".show")
      const switchClassAll = document.querySelector(".hide")
      const switchClassShow = document.querySelector(".show-svg")
      const switchClassHide = document.querySelector(".hide-svg")
      switchClass.className=switchClass.className.replace('show', 'hide');
      switchClassAll.className=switchClassAll.className.replace('hide', 'show');
      switchClassShow.setAttribute("class","hide-svg");
      switchClassHide.setAttribute("class","show-svg");
      
    }
    
  })

