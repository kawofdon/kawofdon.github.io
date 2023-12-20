//var valorTotal = [0];
//var valorProduto = [45.75];
var qtd = 1;
var cont = 0 

function adicionarItem2()
{
    cont ++
    qtd++
    var quantidade = document.getElementById("quantidade");

   if(cont==2)
   qtd--
   
    //document.write(qtd)
    quantidade.textContent = qtd;
    if(cont == 2)
    cont =0
}