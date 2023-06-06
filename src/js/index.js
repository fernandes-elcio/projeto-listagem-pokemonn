/*
   O que precisamos fazer - quando clicarmos no botão de troca de tema temos que alertar a cor do tema da página para as cores do tema claro ou do tema escuro.
 
  - Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no BODY pra que os estílos de modo-escuro seja aplicado e mudar a imagem para a lua.
      - passo 1 - pegar no js o elemento HTML correspondente ao botão de troca de tema
      - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao botão de troca de tema
      - passo 3 - dar um jeito de indentificar o clique do usuário no botão de troca de tema
      - passo 4 - adicionar a classe modo-escuro no BODY
      - passo 5 - trocar a imagem do botão e alterar tema para lua
  
  - Objetivo 2 - quando clicar no botão troca de tema, caso a BODY ja tenha a classe modo-escuro, remover a classe pra mudar pro modo-claro e mudar a imagem pro sol
     - passo 6 - verificar se o BODY já tem a classe modo escuro
     - passo 7 - remover a classe modo-escuro do BODY
     - passo 8 - trocar a imagem do botão e alterar tema pra sol
     
*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
   const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

   body.classList.toggle("modo-escuro")

   if (modoEscuroEstaAtivo) {
      imagemBotaoTrocaDeTema.setAttribute("src", "./src/image/sun.png");
   } else {
      imagemBotaoTrocaDeTema.setAttribute("src", "./src/image/moon.png");
   }
});


