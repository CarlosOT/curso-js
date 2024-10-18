function tabuada(){
    //EFEITO CLIQUE NO BOTÃO
    let botao = document.getElementById('botao');
    botao.style.transform = 'scale(1.0)';
    botao.style.background = 'white';
    botao.style.color = 'blue';
    //TABUADA
    let num =  document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!');
    }else{
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = '';
        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}

//FUNÇÕES PARA O BOTÃO
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