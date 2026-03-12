function checarEntrada(){
let idade = parseInt(document.getElementById("idadeCandidato").value)
let resp = document.getElementById("mensagemPortaria")

let select = document.getElementById("vipSelect").value

    if(idade < 18){
        resp.innerText = "É proibida a entrada de menores de 18 anos, sem exceção."
    }else if(idade >= 18 && select === "sim" ){
        resp.innerText = "Tá no VIP pae, ta com pataco então pode entrar!!"
    }else if(idade >= 18 && select === "nao" )
    resp.innerText = "Ta sem pataco né nego, pague pra entrar"
    }