let sacola = [sacola.push(produto)]

function adicionarNoCarrinho(){
let produto = document.getElementById("produtoInput").value
    document.getElementById('produtoInput').value = ""
let elmLista = document.getElementById('listaDeCompras')
    elmLista.innerHTML = ""
      for (let i = 0; i < sacola.length; i++) {
        // O += é super importante aqui para ir ACUMULANDO as tags <li>
        elementoLista.innerHTML += `<li>${sacola[i]}</li>`;

if(produto === ""){
    alert('Bota algo ai mão de vaca')
    return;
}}}