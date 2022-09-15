let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular() {
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let totalCarne = adultos * carnePP(duracao) + criancas * carnePP(duracao) / 2
    let totalCerveja = adultos * cervejaPP(duracao)
    let totalRefrigerante = criancas * bebidasPP(duracao)

    //--------código do curso ProgBR--------
    //resultado.innerHTML = `<p>${totalCarne / 1000}Kg de carne</p>`
    //resultado.innerHTML += `<p>${Math.ceil(totalCerveja / 473)} Latão de cerveja</p>`
    //resultado.innerHTML += `<p>${totalRefrigerante / 1000} Litros de refrigerante</p>`
    //--------------------------------------

    //-----Alteração para não aparecer "0"-----
    resultado.innerHTML = `<h3>Você vai precisar de:</h3>`

    if (totalCarne > 0) { resultado.innerHTML += `<p>${totalCarne / 1000}Kg de carne</p>` 
    } else {
        resultado.innerHTML += `<p>Você não precisa de carne.</p>`
    }

    if (totalCerveja > 0) {
        resultado.innerHTML += `<p>${Math.ceil(totalCerveja / 473)} Latões de cerveja</p>`
    } else {
        resultado.innerHTML += `<p>Você não precisa de cerveja.</p>`
    }
    
    if (totalRefrigerante > 0) {
        resultado.innerHTML += `<p>${totalRefrigerante / 1000} Litros de refrigerante</p>`
    } else {
        resultado.innerHTML += `<p>Você não precisa de refrigerante.</p>`
    }
    //--------------------------------------

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}