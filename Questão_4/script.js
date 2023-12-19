function calcularNovoSalario() {
    let salarioAtual = parseFloat(document.getElementById('salarioAtual').value);
    let percentualReajuste = parseFloat(document.getElementById('percentualReajuste').value);

    if (isNaN(salarioAtual) || isNaN(percentualReajuste)) {
      alert("Por favor, insira valores numéricos válidos.");
      return;
    }

    let novoSalario = salarioAtual + (salarioAtual * percentualReajuste / 100);

    let mensagemElement = document.getElementById('mensagem');
    mensagemElement.textContent = "O novo salário é: R$ " + novoSalario.toFixed(2);
  }