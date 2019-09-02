function calcular(){
    var inicio = Number(document.querySelector('#txtinicio').value)
    var fim = Number(document.querySelector('#txtfim').value)
    var inc = Number(document.querySelector('#txtincremento').value)
    var res = document.querySelector('div#res')

    res.innerHTML = '<br> Contando... <br>'
    if( inicio == 0 || fim == 0 || inc == 0){
        res.innerHTML = '<br> [ERRO] Impossível contar! <br>'
    }else{
        if (inicio <= fim){
            for(var i = inicio;i <= fim; i += inc){
                res.innerHTML += ` ${i} \u{1f449}`
            }
        } else {
            for(var i = inicio;i >= fim; i -= inc){
                res.innerHTML += ` ${i} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
      
}