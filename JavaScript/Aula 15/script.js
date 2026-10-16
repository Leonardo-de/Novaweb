/*
Descricao: Aula 15 - JavaScript aplicado a Formulários
nome_arquivo: script.js
nome_exercicio: Aula 15 - JavaScript aplicado a Formulários
nome_aluno: Leonardo de Oliveira Rodrigues
email_aluno: leonardo.rodrigues4@portalsesisp.org.br
turma: TDE-1BAA-26
*/

function cadastrar(evento) {
    evento.preventDefault();

    const formulario = evento.currentTarget;
    const nome = formulario.elements.nome.value.trim();
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = `Cadastrado com sucesso, ${nome}!`;
}
