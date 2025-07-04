var itens =[];

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var valorProduto = document.querySelector('input[name=price]');
    
    itens.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    });
   
    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML="";
    itens.map((val)=>{
        soma+=parseFloat(val.valor);

        listaProdutos.innerHTML+=`
        <div class="lista-produto-single">
        <h3>`+val.nome+`<h3>
        <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
        </div>
        `;
    })
    soma = soma.toFixed(2);
    nomeProduto.value = "";
    valorProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'R$'+soma;
})

document.querySelector('button[name=limpar]')
.addEventListener('click', ()=>{
    itens = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "Total: R$0";
})