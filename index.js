'use strict'

async function pesquisarCep(cep) {
    const url = `https://corsproxy.io/?url=https://cdn.apicep.com/file/apicep/${cep}.json`
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function preencherCampos({ target }) {
    const infoCep = await pesquisarCep(target.value)
    document.getElementById('endereco').value = infoCep.address
    document.getElementById('bairro').value = infoCep.district
    document.getElementById('cidade').value = infoCep.city
    document.getElementById('estado').value = infoCep.state
}

document.getElementById('cep').addEventListener('focusout', preencherCampos)