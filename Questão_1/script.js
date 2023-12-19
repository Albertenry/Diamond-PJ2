function verificarParidade() {
    let inputField = document.getElementById("inputField");
    let resultMessage = document.getElementById("result");

    // Obtém o valor do campo de entrada
    var numeroDigitado = parseInt(inputField.value);

    // Verifica se o valor é um número inteiro
    if (isNaN(numeroDigitado)) {
        resultMessage.innerText = "Por favor, digite um número inteiro válido.";
    } else {
        // Verifica a paridade do número
        if (numeroDigitado % 2 === 0) {
            resultMessage.innerText = "O número é par.";
        } else {
            resultMessage.innerText = "O número é ímpar.";
        }
    }
}