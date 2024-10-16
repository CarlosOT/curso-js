function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var titulo = window.document.getElementById('titulo');
    var hora = new Date().getHours();
    msg.innerHTML = `Agora são ${hora} horas`;

    //funcao para definir saudação e imagens correspondente
    if(hora >= 0 && hora < 12){
        //BOM DIA
        titulo.innerText = 'Bom dia';
        img.src = 'manha.png';
        document.body.style.background = '#a59d27';
    }else if(hora >= 12 && hora < 18){
        //BOM TARDE
        titulo.innerText = 'Bom Tarde';
        img.src = 'tarde.png';
        document.body.style.background = '#f9dc75';
    }else{
        //BOM NOITE
        titulo.innerText = 'Bom Noite';
        img.src = 'noite.png';
        document.body.style.background = '#294f88';
    }
}

