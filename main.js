// Declaração das variaveis. Ultilizando o document.querySelectorAll com os seletores em CSS para estilização. 
let BtCadastrar = document.querySelectorAll('#botoes button')[0];
let BtExcluir = document.querySelectorAll('#botoes button')[1];
let nome = document.querySelectorAll('#wrap input')[0];
let quantidade = document.querySelectorAll('#wrap input')[1];
let codigo = document.querySelectorAll('#wrap input')[2];
let tabela = document.querySelector('#saida table');
//Lista/Tabela onde serão armazenados os produtos.
let lista = [];

//função onclick para cadastrar o produto.
BtCadastrar.onclick = function(){
    let produto = new Object();
    produto.nome = nome.value;
    produto.quantidade = quantidade.value;
    produto.codigo = codigo.value;
    produto.id = lista.length;
    //o novo produto será adicionado no final da lista.
    lista.push(produto);
    tabela.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.nome}</td><td>${produto.quantidade}</td><td>${codigo.value}</td></tr>`;
}

//Função para montar a Lista/Tabela para que os item sejam organizados.
function montarTabela(){
    //Sempre que um item for cadastrado ele irá ser possionado na proxima posição da Lista/Tabela.
    for (let i = 0; i < lista.length; i++){
        tabela.innerHTML += `<tr><td width="30px"><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${lista[i].nome}</td><td>${lista[i].quantidade}</td><td>${lista[i].codigo}</td></tr>`;
    }
}

//função onclick para excluir um ou mais produtos selecionados.
BtExcluir.onclick = function(){
    for (let i = 0; i < lista.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        //se o elemento estiver selecionado ele será excluido.
        if (elemento.checked){
            lista.splice(elemento.id);
            tabela.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quant.</td><td>Preço</td></tr>`;
            montarTabela();
        }
    }
}

/*
Fontes ultilizados:
https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelectorAll
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML
https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/checkbox

*/

