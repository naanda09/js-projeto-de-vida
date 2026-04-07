const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

contadores[0].textContent = "Contagem Regressiva"

for(let i = 0; i < botoes.length; i = i + 1){
    botoes[i].onclick = function(){
        for(let j = 0; j < botoes.length; j = j + 1){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        botoes[i].classList.add("ativo");
    }

}
console.log(botoes);