function tabuada(){
    //EFEITO CLIQUE NO BOTÃO
    let botao = document.getElementById('botao');
    botao.style.transform = 'scale(1.0)';
    botao.style.background = 'white';
    botao.style.color = 'blue';
    //TABUADA
    let num =  document.getElementById('txtn');
    let divTab = document.getElementById('divTabuada');
    let selectTab = document.createElement('select');
    selectTab.size = '10';
    selectTab.name = 'tabuada';
    selectTab.id = 'idTab';

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!');
    }else{
        divTab.innerHTML = '';
        let n = Number(num.value);
        let c = 1;
        divTab.appendChild(selectTab);
    
        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            selectTab.appendChild(item);
            c++;
        }
    }
}

//FUNÇÕES PARA EFEITOS BOTÃO GERAR TABUADA
function escalaBotao(){
    let botao = document.getElementById('botao');
    botao.style.transform = 'scale(1.1)';
    botao.style.background = 'blue';
    botao.style.color = 'white';
}
function botaoNormal(){
    let botao = document.getElementById('botao');
    botao.style.transform = 'scale(1.0)';
    botao.style.background = 'white';
    botao.style.color = 'blue';
}

//FUNÇÃO LIMPA TELA
function limpaTela(){
    let limpa = document.getElementById('divTabuada');
    limpa.innerHTML = '';
}