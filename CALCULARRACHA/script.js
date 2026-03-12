



function calcularRacha(){

let total = parseFloat(document.getElementById("valorTotal").value);
let pessoas = parseInt(document.getElementById("qtdPessoas").value);
let resp = document.getElementById("resultado");

  if(pessoas > 0 && isNaN("valorTotal") ){
    let resultado = total / pessoas
    resp.innerText = "Cada um da R$ " + resultado.toFixed(2);
    console.log(resultado)
    document.getElementById("total").value = ""
    document.getElementById("pessoas").value = ""
  }else if(pessoas === 0){
    alert('Opa! Tem que ter pelo menos você no rolê, né?')
  }}
