function calcularSoma() {
    let valor = parseInt(document.getElementById('valor').value);

    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um número inteiro positivo válido.");
        return;
    }

    let soma = 0;
    for (let i = 1; i < valor; i++) {
        soma += i;
    }

    let somaExibidaElement = document.getElementById('somaExibida');
    somaExibidaElement.textContent = "A soma de todos os números menores que " + valor + " é: " + soma;
}