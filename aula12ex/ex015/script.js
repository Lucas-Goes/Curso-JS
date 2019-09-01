//
function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0){
        alert ('Informe o ano de nascimento!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','bbmenino.png')
            }else if (idade <21){
                //jovem
                img.setAttribute('src','jovemhomem.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src','adultohomem.png')
            }else{ 
                //idoso
                img.setAttribute('src','senhorhomem.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','bbmenina.png')
            }else if (idade <21){
                //jovem
                img.setAttribute('src','jovemmulher.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src','adultomulher.png')
            }else{ 
                //idoso
                img.setAttribute('src','senhormulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos </br>`
        res.appendChild(img).style.marginTop = '20px'


    }
}
