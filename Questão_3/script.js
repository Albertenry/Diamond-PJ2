function verificarVotacao() {
    const anoNascimento = document.getElementById('anoNascimento').value;
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    const mensagemElement = document.getElementById('mensagem');

    if (idade >= 16) {
        mensagemElement.textContent = "Você pode votar este ano! Com " + idade + " anos de idade.";
    } else {
        mensagemElement.textContent = "Você não pode votar este ano. A idade mínima é 16 anos e você tem " + idade + " anos.";
    }
}