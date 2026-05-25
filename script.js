let conta = 0
let pessoas = 0
let porcentagem = 0


const contaImput = document.querySelector("#conta")
contaImput.addEventListener("input", receberValorConta)

function receberValorConta(evento){
    conta = Number(evento.target.value)
    calcular()
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

    calcular()
}

const botoesGorjetas = document.querySelectorAll(".gorjeta input[type= 'button']")
botoesGorjetas.forEach(botao =>{
botao.addEventListener("click", receberPorcentagem)

})

function receberPorcentagem(evento){

    botoesGorjetas.forEach(botao => {

        botao.classList.remove("botao-ativo")


    if(botao.value === evento.target.value){
        botao.classList.add("botao-ativo")
    }

})

if(evento.target.value !== ""){
porcentagem = parseFloat(evento.target.value)/100
} else{
    porcentagem = 0
}
 
 calcular()
}

const gorjetaImput = document.querySelector("#outra")
gorjetaImput.addEventListener("input",receberPorcentagem)

function calcular() {

    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0){
const  strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
strongGorjetaTotal.innerHTML = `$ $((conta * porcentagem / pessoas).toFixed(2))`

const strongTotal = document.querySelector(".total > strong")
strongTotal.innerHTML = `$ $((conta + (conta * porcentagem) / pessoas)toFixed(2))`
    }
}

const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

function limpar(){
    contaImput.value = ""

    botoesGorjetas.forEach(botao => {
botao.classList.remove("botao-ativo")

    })

gorjetaImput.value = ""

pessoasImput.value = ""

document.querySelector(".gorjeta-total > strong").innerHTML = "$ 0.00"
document.querySelector(".total > strong").innerHTML = "$ 0.00"

conta = 0
porcentagem = 0
pessoas = 0

}
