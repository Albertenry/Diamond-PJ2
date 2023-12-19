function formatarString() {
    const inputString = document.getElementById('inputString').value;

    if (inputString.trim() === "") {
      alert("Por favor, insira uma string.");
      return;
    }

    function primeiraUltimaMaiusculas(str) {
      if (str.length <= 1) {
        return str.toUpperCase();
      }

      return str.charAt(0).toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase();
    }

    const resultadoFormatado = primeiraUltimaMaiusculas(inputString);
    document.getElementById('resultado').textContent = "Resultado: " + resultadoFormatado;
  }