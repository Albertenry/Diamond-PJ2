
function exibirNumeros() {
    var valor = parseInt(document.getElementById('valor').value);

    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um número inteiro positivo válido.");
        return;
    }

    var numerosExibidos = "";
    for (var i = 1; i <= valor; i++) {
        numerosExibidos += i + " ";
    }

    var numerosExibidosElement = document.getElementById('numerosExibidos');
    numerosExibidosElement.textContent = "Números até o valor " + valor + ": " + numerosExibidos;
}