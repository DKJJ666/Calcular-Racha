
function testarSenha(){
let senha = document.getElementById("senhaInput").value;
let mensagem = document.getElementById("mensagem");



    if (senha.length < 8) {
        mensagem.innerText = "Senha muito curta! Use pelo menos 8 caracteres."
        mensagem.style.color = "red"
    }else if (senha === "12345678"){
        mensagem.innerText = "Essa senha é muito manjada, parceiro! Troca isso aí."
        mensagem.style.color = "red"
    }else{
        mensagem.innerText = 'Senha forte! Cadastro liberado.'
        mensagem.style.color = "green"
    }
    
}