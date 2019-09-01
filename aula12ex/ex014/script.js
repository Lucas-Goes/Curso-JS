function carregar() {
    var msg = window.document.querySelector('#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 15 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora <= 12 ) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#ebdc83'
    }else if (hora >=12 && hora <=18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#ec8a59'
    }else{
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#272624'
    }
}
