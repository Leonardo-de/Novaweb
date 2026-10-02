const formulario = document.getElementById("form-login");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const erroEmail = document.getElementById("erro-email");
const erroSenha = document.getElementById("erro-senha");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    erroEmail.textContent = "";
    erroSenha.textContent = "";
    mensagem.textContent = "";
    campoEmail.classList.remove("invalido");
    campoSenha.classList.remove("invalido");

    let formularioValido = true;

    if (campoEmail.value.trim() === "") {
        erroEmail.textContent = "Informe seu e-mail.";
        campoEmail.classList.add("invalido");
        formularioValido = false;
    } else if (!campoEmail.validity.valid) {
        erroEmail.textContent = "Digite um endereço de e-mail válido.";
        campoEmail.classList.add("invalido");
        formularioValido = false;
    }

    if (campoSenha.value === "") {
        erroSenha.textContent = "Informe sua senha.";
        campoSenha.classList.add("invalido");
        formularioValido = false;
    } else if (campoSenha.value.length < 6) {
        erroSenha.textContent = "A senha deve ter pelo menos 6 caracteres.";
        campoSenha.classList.add("invalido");
        formularioValido = false;
    }

    if (formularioValido) {
        mensagem.textContent = "Dados validados! Esta tela é apenas uma demonstração de login.";
    }
});
