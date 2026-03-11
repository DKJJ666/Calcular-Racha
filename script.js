const total = parseFloat(document.getElementById("valorTotal").value);
const pessoas = parseInt(document.getElementById("qtdPessoas").value);
const resp = document.getElementById("resultado");

document.getElementById("total").value = ""
document.getElementById("pessoas").value = ""

function calcularRacha(){
  if(pessoas > 0 && isNaN("valorTotal") ){
    const resultado = total / pessoas
    resp.innerText = "Cada um da R$ " + resultado.toFixed(2);
    console.log(resultado)
    
    document.getElementById("total").value = ""
    document.getElementById("pessoas").value = ""
  }else if(pessoas === 0){
    alert('Opa! Tem que ter pelo menos você no rolê, né?')
  }}
