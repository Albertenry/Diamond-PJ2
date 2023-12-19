function calcularSoma() {
    var listaNumeros = document.getElementById('listaNumeros').value;

    // Validar se a entrada está vazia
    if (listaNumeros.trim() === "") {
        alert("Por favor, insira a lista de números.");
        return;
    }

    // Função original
    function calcularSomaMenorQue30(listaString) {
        const numeros = listaString.split('-').map(Number);
        const numerosMenoresQue30 = numeros.filter(numero => numero < 30);
        const soma = numerosMenoresQue30.reduce((acumulador, numero) => acumulador + numero, 0);
        return soma;
    }

    // Calcular e exibir resultado
    const resultado = calcularSomaMenorQue30(listaNumeros);
    document.getElementById('resultado').textContent = "A soma dos números menores que 30 é: " + resultado;
}
