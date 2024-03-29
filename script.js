function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    } else {
    img.setAttribute("src", "./assets/avatar.png")
    }

   const alt = document.querySelector(".alt")
   if (html.classList.contains("light")) {
     alt.setAttribute(
       "alt",
       "Gabs com um olhar sério, usando uma camisa xadrez vermelha, barba, cabelo preto até os ombros, fundo gradiente rosa pastel"
     )
   } else {
     alt.setAttribute(
       "alt",
       "Gabs com um olhar sério, usando uma camisa xadrez vermelha, barba, cabelo preto até os ombros, fundo gradiente lilás"
     )
   }

  }
