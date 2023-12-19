function contarMaioresQue50() {
    const listaNumeros = document.getElementById('listaNumeros').value;

    if (listaNumeros.trim() === "") {
      alert("Por favor, insira a lista de números.");
      return;
    }

    function contarMaioresQue50(listaString) {
      const numeros = listaString.split('/').map(Number);
      const numerosMaioresQue50 = numeros.filter(numero => numero > 50);
      const quantidade = numerosMaioresQue50.length;
      return quantidade;
    }

    const quantidadeNumeros = contarMaioresQue50(listaNumeros);
    document.getElementById('quantidadeNumeros').textContent = "Quantidade de números maiores que 50: " + quantidadeNumeros;
  }