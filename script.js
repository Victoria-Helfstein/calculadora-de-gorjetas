let conta = 0
let pessoas = 0
let porcentagem = 0


const contaImput = document.querySelector("#conta")
contaImput.addEventListener("input", receberValorConta)

function receberValorConta(evento){
    conta = Number(evento.target.value)
}

const pessoasImput = document.querySelector("#pessoas")
pessoasImput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento){
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")


    if(evento.target.value === "0"){
    paragrafoErro.style.display = "block"
    divErro.setAttribute("id", "erro-div")
    } else{
    paragrafoErro.style.display = "none"
    divErro.setAttribute("id", "")
    pessoas = Number(evento.target.value)
    }
}

const botoesGorjetas = document.querySelectorAll(".gorjeta imput[type 'button']")
botoesGorjetas.forEach(botao =>{
botao.addEventListener("click", receberPorcentagem)

})

function receberPorcentagemBotao(evento){

    botoesGorjetas.forEach(botao => {

        botao.classList.remove("botao-ativo")


    if(botao.value === evento.target.value){
        botao.classList.add("botao-ativo")
    }

})
 porcentagem = parseFloat(evento.target.evento) /100

}