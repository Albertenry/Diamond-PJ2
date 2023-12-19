function exibirNumerosImpares() {
    let valor = parseInt(document.getElementById('valor').value);

    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um número inteiro positivo válido.");
        return;
    }

    let numerosImparesExibidos = "";
    for (let i = 1; i <= valor; i += 2) {
        numerosImparesExibidos += i + " ";
    }

    let numerosImparesExibidosElement = document.getElementById('numerosImparesExibidos');
    numerosImparesExibidosElement.textContent = "Números ímpares até o valor " + valor + ": " + numerosImparesExibidos;
}