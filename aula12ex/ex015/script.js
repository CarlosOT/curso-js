function limpaRes(){
    var res = document.getElementById('res');
    res.innerHTML = '';
    res.style.background = 'white';
}

function verificar(){
    var ano = new Date().getFullYear();
    var inputAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(inputAno.value);
    var genero = '';
    //ATRIBUINDO AS IMAGENS AO SCRIPT
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if(inputAno.value.length == 0 || Number(inputAno.value) > ano || Number(inputAno.value) == 0){
        window.alert('[ERRO] verifique os dados e digite novamente');
    }else if(fsex[0].checked){
        genero = 'Homem';
        //VERIFICANDO FAIXA ETÁRIA
        if(idade >= 0 && idade < 10){
            //crianca
            img.setAttribute('src','imagens/bebe-menino.png');
        }else if(idade >= 10 && idade < 21){
            //jovem
            img.setAttribute('src','imagens/jovem-h.png');
        }else if(idade < 50){
            //adulto
            img.setAttribute('src','imagens/adulto-h.png');
        }else{
            //idoso
            img.setAttribute('src','imagens/idoso.png');
        }
        //ESTILOS E SAÍDA
        res.style.textAlign = 'center';
        res.style.background = "#6b6bf124";
        res.innerHTML = `${genero} com ${idade} anos`;
        res.appendChild(img);
    }else if(fsex[1].checked){
        genero = 'Mulher';
        //VERIFICANDO FAIXA ETÁRIA
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src','imagens/bebe-menina.png');
        }else if(idade >= 10 && idade < 21){
            //jovem
            img.setAttribute('src','imagens/jovem-m.png');
        }else if(idade < 50){
            //adulto
            img.setAttribute('src','imagens/adulto-m.png');
        }else{
            //idoso
            img.setAttribute('src','imagens/idosa.png');
        }
        //ESTILOS E SAÍDA
        res.style.textAlign = 'center';
        res.style.background = "#6b6bf124";
        res.innerHTML = `${genero} com ${idade} anos`;
        res.appendChild(img);
    }else if(fsex[2].checked){
        //ESTILOS E SAÍDA
        genero = 'não definido';
        res.style.textAlign = 'center';
        res.style.background = "#6b6bf124";
        res.innerHTML = `Gênero ${genero} com ${idade} anos`;
    }
}


