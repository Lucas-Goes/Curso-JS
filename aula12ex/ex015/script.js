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
                img.setAttribute('src','img/bbmenino.png')
            }else if (idade <21){
                //jovem
                img.setAttribute('src','img/jovemhomem.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src','img/adultohomem.png')
            }else{ 
                //idoso
                img.setAttribute('src','img/senhorhomem.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','img/bbmenina.png')
            }else if (idade <21){
                //jovem
                img.setAttribute('src','img/jovemmulher.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src','img/adultomulher.png')
            }else{ 
                //idoso
                img.setAttribute('src','img/senhormulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos </br>`
        res.appendChild(img).style.marginTop = '20px'


    }
}
