/*
Descricao: Aula 16 - Integração de Componentes de Interface
nome_arquivo: script.js
nome_exercicio: Aula 16 - Integração de Componentes de Interface
nome_aluno: Leonardo de Oliveira Rodrigues
email_aluno: leonardo.rodrigues4@portalsesisp.org.br
turma: TDE-1BAA-26
*/

const tabela = document.querySelector("#tabela-produtos tbody");
const formulario = document.getElementById("form-produto");
const mensagem = document.getElementById("mensagem");
const orientacao = document.getElementById("orientacao");
const campos = ["nome", "categoria", "preco", "estoque"];

function selecionarProduto(linha) {
    tabela.querySelectorAll("tr").forEach((item) => item.classList.remove("selecionado"));
    linha.classList.add("selecionado");

    formulario.elements.id.value = linha.dataset.id;
    formulario.elements.nome.value = linha.querySelector(".produto").textContent;
    formulario.elements.categoria.value = linha.querySelector(".categoria").textContent;
    formulario.elements.preco.value = linha.querySelector(".preco").textContent
        .replace("R$", "").trim().replace(".", "").replace(",", ".");
    formulario.elements.estoque.value = linha.querySelector(".estoque").textContent;

    campos.forEach((campo) => { formulario.elements[campo].disabled = false; });
    formulario.querySelector("#salvar").disabled = false;
    orientacao.textContent = `Editando: ${formulario.elements.nome.value}`;
    mensagem.textContent = "";
}

tabela.addEventListener("click", (evento) => {
    const linha = evento.target.closest("tr[data-id]");
    if (linha) selecionarProduto(linha);
});

tabela.addEventListener("keydown", (evento) => {
    const linha = evento.target.closest("tr[data-id]");
    if (linha && (evento.key === "Enter" || evento.key === " ")) {
        evento.preventDefault();
        selecionarProduto(linha);
    }
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (!formulario.reportValidity()) return;

    const linha = tabela.querySelector(`tr[data-id="${formulario.elements.id.value}"]`);
    if (!linha) return;

    linha.querySelector(".produto").textContent = formulario.elements.nome.value.trim();
    linha.querySelector(".categoria").textContent = formulario.elements.categoria.value.trim();
    linha.querySelector(".preco").textContent = `R$ ${Number(formulario.elements.preco.value).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
    linha.querySelector(".estoque").textContent = formulario.elements.estoque.value;
    orientacao.textContent = `Editando: ${formulario.elements.nome.value.trim()}`;
    mensagem.textContent = "Produto atualizado com sucesso!";
});
