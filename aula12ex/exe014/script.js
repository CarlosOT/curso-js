function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var hora = new Date().getHours();
    msg.innerHTML = `Agora são ${hora} horas`;

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.png';
        document.body.style.background = '#a59d27';
    }else if(hora >= 12 && hora < 18){
        //BOM TARDE
        img.src = 'tarde.png';
        document.body.style.background = '#f9dc75';
    }else{
        //BOM NOITE
        img.src = 'noite.png';
        document.body.style.background = '#294f88';
    }
}

