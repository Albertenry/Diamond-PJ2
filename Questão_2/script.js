function compararNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, digite números válidos.');
        return;
    }

    // Comparar os números e exibir o resultado
    if (num1 > num2) {
        exibirResultado('O primeiro número é maior.');
    } else if (num2 > num1) {
        exibirResultado('O segundo número é maior.');
    } else {
        exibirResultado('Os números são iguais.');
    }
}

function exibirResultado(mensagem) {
    document.getElementById('result').innerText = mensagem;
}