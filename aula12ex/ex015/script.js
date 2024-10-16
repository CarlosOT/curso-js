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

    if(inputAno.value.length == 0 || Number(inputAno.value) > ano || Number(inputAno.value) == 0){
        window.alert('[ERRO] verifique os dados e digite novamente');
    }else if(fsex[0].checked){
        genero = 'Homem';
        res.style.textAlign = 'center';
        res.style.background = "#6b6bf124";
        res.innerHTML = `${genero} com ${idade} anos`;
    }else if(fsex[1].checked){
        genero = 'Mulher';
        res.style.textAlign = 'center';
        res.style.background = "#6b6bf124";
        res.innerHTML = `${genero} com ${idade} anos`;
    }else if(fsex[2].checked){
        genero = 'não definido';
        res.style.textAlign = 'center';
        res.style.background = "#6b6bf124";
        res.innerHTML = `Pessoa com gênero ${genero} com ${idade} anos`;
    }
}


