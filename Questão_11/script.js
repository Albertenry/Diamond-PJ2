function inverterString() {
   const inputString = document.getElementById('inputString').value;

    if (inputString.trim() === "") {
      alert("Por favor, insira uma string.");
      return;
    }

    function inverterStringSemReverse(str) {
     let resultado = "";
      for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
      }
      return resultado;
    }

    const resultadoInverso = inverterStringSemReverse(inputString);
    document.getElementById('resultado').textContent = "Inverso da string: " + resultadoInverso;
  }