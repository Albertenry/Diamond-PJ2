
function informarDiaSemana() {
    let numeroDia = parseInt(document.getElementById('numeroDia').value);

    if (isNaN(numeroDia) || numeroDia < 1 || numeroDia > 7) {
        alert("Por favor, insira um número válido de 1 a 7.");
        return;
    }

    let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let diaCorrespondente = diasSemana[numeroDia - 1];

    let mensagemElement = document.getElementById('mensagem');
    mensagemElement.textContent = "O dia correspondente ao número " + numeroDia + " é: " + diaCorrespondente;
}