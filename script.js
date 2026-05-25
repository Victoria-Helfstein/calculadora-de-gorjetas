let conta = 0
let pessoas = 0


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