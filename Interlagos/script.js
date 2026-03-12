function verificarIngresso(){
    let grana = document.getElementById("granaInput").value;
    let resp = document.getElementById("mensagemFinal");

    if(grana >= 600){
        resp.innerText = 'Aí sim! Ingresso garantido, partiu Lolla!'
    }else if(grana < 600){
        let falta = 600 - grana
        resp.innerText = `Deu ruim! Ainda faltam R$ ${falta} pra você colar no festival.`
    }

}