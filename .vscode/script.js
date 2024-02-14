function toggleMode() {
  //dentro do pontinho, vai buscar o elemento dentro de html
  const html = document.documentElement

  //verifica se contem dentro do body, se tem o light
  //se essa informação for verdadeira
  //if(html.classList.contains('light')) {
  //faça essa excução de codigo
  //  html.classList.remove('light')
  //} else {
  //se não for, faça essa
  //  html.classList.add('light')
  //}

  //ou podemos resumir em uma só linha
  //o toggle é uma função que tem uma logica que se tem light, tira ou se não tiver, coloca
  html.classList.toggle("light")

  //tem que pegar a tag img
  const img = document.querySelector("#profile img")

  //depois susbstituir a imagem
  if (html.classList.contains("light")) {
    //condição - se tiver light mode, add imagem light
    //para modificar um atributo
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
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
