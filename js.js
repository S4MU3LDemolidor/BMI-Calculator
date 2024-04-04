const peso = document.getElementById('pesoId');
const altura = document.getElementById('alturaId');
const calculateButton = document.getElementById('calcularId');
const resultado = document.getElementById('resultadoId');

function calcularIMC () {
    const pesoValue = parseFloat(peso.value);
    const alturaValue = parseFloat(altura.value);

    if (isNaN(pesoValue) || isNaN(alturaValue)) {
        alert("Por favor, preencha ambos os campos de peso e altura.");
        return;
    }

    let IMC;
    IMC = (pesoValue / (alturaValue * alturaValue)).toFixed(2);
    if (IMC < 18.5) {
        resultado.innerHTML = `<h1 class="h1Correto">Seu IMC é: ${IMC}, você está com baixo peso</h1>`;
    } else if (IMC >= 18.5 && IMC <= 24.99) {
        resultado.innerHTML = `<h1 class="h1Correto">Seu IMC é: ${IMC}, seu peso está dentro da faixa normal</h1>`;
    } else if (IMC >= 25 && IMC <= 29.99) {
        resultado.innerHTML = `<h1 class="h1Errado">Seu IMC é: ${IMC}, você está com sobrepeso</h1>`;
    } else {
        resultado.innerHTML = `<h1 class="h1Errado">Seu IMC é: ${IMC}, você está com obesidade</h1>`;
    }

    IMC = 0;

}
