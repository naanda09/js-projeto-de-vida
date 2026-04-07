const botoes = document.querySelectorAll(".botao");

for(let i = 0; i < botoes.length; i = i + 1){
    botoes[i].onclick = function(){
        for(let j = 0; j < botoes.length; j = j + 1){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
    }

}
console.log(botoes);