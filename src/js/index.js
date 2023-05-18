const cartoes = document.querySelectorAll(".cartao")
const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0

btnAvancar.addEventListener("click", () => {
    if(cartaoAtual === cartoes.length -1){
        return
    }

    esconderCartao()

    cartaoAtual ++

    mostrarCartao()

    mostrarOuEsconderOpacidade()

})

btnVoltar.addEventListener("click", () => {
    if(cartaoAtual === 0){
       return
    }

    esconderCartao()

    cartaoAtual --

    mostrarCartao()

    mostrarOuEsconderOpacidade()

})

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado")
}

function esconderCartao() {
    const cartao = document.querySelector(".selecionado")
    cartao.classList.remove("selecionado")
}

function mostrarOuEsconderOpacidade(){
    const naoEhAPrimeiroCartao = cartaoAtual !==0
    if(naoEhAPrimeiroCartao){
        btnVoltar.classList.remove("opacidade")
    } else {
        btnVoltar.classList.add("opacidade")
    }

    const chegouNoUtimoCartao = cartaoAtual !==0 && cartaoAtual ===  cartoes.length -1
    if(chegouNoUtimoCartao){
        btnAvancar.classList.add("opacidade")
    } else {
        btnAvancar.classList.remove("opacidade")
    }
}
