const form = document.getElementById('form')
const imgAprovado = '<img src= "./images/aprovado.png"/>'
const imgReprovado = '<img src= "./images/reprovado.png"/>'
const atividade = []
const notas = []
const spanAprovado = '<span class="resultado aprovado" > Aprovado </span>'
const spanReprovado = '<span class="resultado reprovado" > Reprovado </span>'
const notaMinima = parseFloat(prompt('Digite a nota mínima para aprovação:'))

let linhas = '';
addEventListener('submit', function (e) {

    e.preventDefault()

    adicionaLinhas();
    atualizaTabela();
    calculaMedias();
    atualizaMediaFinal();
});

function adicionaLinhas() {
    const inputAtividade = document.getElementById('inputAtividade')
    const inputNota = document.getElementById('inputNota')

    if (atividade.includes(inputAtividade.value)) {
        alert(`A atividade ${inputAtividade.value} já existe.`)
    } else {
        atividade.push(inputAtividade.value);
        notas.push(parseFloat(inputNota.value));

        let linha = '<tr>'
        linha += `<td>${inputAtividade.value}</td>`
        linha += `<td>${inputNota.value}</td>`
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'

        linhas += linha
    }

    inputAtividade.value = '';
    inputNota.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMedias();

    document.getElementById('mediaFinal-valor').innerHTML = mediaFinal;
    document.getElementById('resultadoFinal').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMedias() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length;
}

