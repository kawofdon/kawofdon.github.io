//var valorTotal = [0];
var valorProduto = [50.00];
var qtd = 1;
var cont = 0 

function adicionarItem()
{

    cont ++
    qtd++
    var total = document.getElementById("total1");
    var quantidade = document.getElementById("quantidade");

    if(cont==2)
    qtd--
   
    //document.write(qtd)
    quantidade.textContent = qtd;
    if(cont == 2)
    cont =0

    
    


    valorTotal = Number.parseFloat(valorProduto) * qtd;
    

    total.textContent = valorTotal.toFixed(2);   
    
}

function removerItem(item) {
    if (qtd > 1) {
        qtd -= 1;
        var quantidade = document.getElementById("quantidade");
        var total = document.getElementById("total1");
        quantidade.innerHTML = qtd;
        valorTotal = Number.parseFloat(valorProduto) * qtd;
        total.innerHTML = valorTotal.toFixed(2);
        valorCompra();
    }
}



function valorCompra(){
    var valorTotalCompra = document.getElementById("valorTotalCompra");
    var valor = 0;

    for(var i = 0; i < valorTotal.length; i++){
        valor += valorTotal[i];
    }
    valorTotalCompra.innerHTML = valor.toFixed(2);
}

// function removerItem(item) {
//     // Obtém o elemento que exibe a quantidade
//     var quantidadeElement = document.getElementById('quantidade' + item);

//     // Obtém o valor atual
//     var valorAtual = parseInt(quantidadeElement.innerText);

//     // Verifica se o valor atual é maior que 1 antes de decrementar
//     if (valorAtual > 1) {
//         valorAtual--;
//         quantidadeElement.innerText = valorAtual;
//         // Adicione aqui o código para atualizar outras informações conforme necessário
//     }
// }

// function adicionarItem(item) {
//     // Obtém o elemento que exibe a quantidade
//     var quantidadeElement = document.getElementById('quantidade' + item);

//     // Obtém o valor atual
//     var valorAtual = parseInt(quantidadeElement.innerText);

//     // Incrementa o valor atual
//     valorAtual++;
//     quantidadeElement.innerText = valorAtual;
//     // Adicione aqui o código para atualizar outras informações conforme necessário
// }

/*  var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById("total" + item);
    qtd[item] ++;
    //qtd[item] += 1;


    quantidade.textContent = qtd[item];
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    
    

    
   

    //valorCompra();
   
    */