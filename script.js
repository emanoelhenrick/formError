let estados = {
    sp: ['Guarulhos', 'Santo Andre', 'Sao Paulo'],
    pe: ['Recife', 'Belo Jardim', 'Arcoverde']
}
let selectEstados = document.querySelector('#estados')
let selectCidades = document.querySelector('#cidades')

let formulario = document.querySelector('.container')

// ANALISE DE ERRO 
formulario.onsubmit = function(event){
    event.preventDefault()

    let inputEstado = document.forms['formContainer']['estados']
    let inputCidade = document.forms['formContainer']['cidades']
    
    let flagError = false

    if(!inputEstado.value){
        flagError = true
        let spanError = selectEstados.nextElementSibling
        inputEstado.classList.add('selectError')
        spanError.classList.add('erro')
    } else {
        let spanError = selectEstados.nextElementSibling
        inputEstado.classList.remove('selectError')
        spanError.classList.remove('erro')
    }
    
    if(!inputCidade.value){
        flagError = true
        let spanError = selectCidades.nextElementSibling
        inputCidade.classList.add('selectError')
        spanError.classList.add('erro')
    } else {
        let spanError = selectCidades.nextElementSibling
        inputCidade.classList.remove('selectError')
        spanError.classList.remove('erro')
    }

    if (!flagError){
        formulario.submit()
    }
}


// MUDANCA DE CIDADES 
function changeCity(estado){
    if(estado.target.value === 'sp') {

        document.querySelector('#cidades').innerHTML = `<option value="">Selecione a Cidade</option>`

        estados.sp.forEach(function(cidade){
            document.querySelector('#cidades').innerHTML += `<option value="${cidade}">${cidade}</option>`
        })

    } else if(estado.target.value === 'pe'){

        document.querySelector('#cidades').innerHTML = `<option value="">Selecione a Cidade</option>`

        estados.pe.forEach(function(cidade){
            document.querySelector('#cidades').innerHTML += `<option value="${cidade}">${cidade}</option>`
        })
    } else {

        document.querySelector('#cidades').innerHTML = `<option value="">Selecione a Cidade</option>`
    }
}

selectEstados.onchange = changeCity