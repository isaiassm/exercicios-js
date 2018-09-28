Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <=fim
}

const imprimiResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('quadro de honra')
    }else if(nota.entre(7, 8.99)){
        console.log('reprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('recuperacao')
    }else if(nota.entre(0, 3.99)){
        console.log('reprovado')
    }else{
        console.log('nota invalida')
    }
}

imprimiResultado(10)
imprimiResultado(8.9)
imprimiResultado(6.55)
imprimiResultado(2.3)
imprimiResultado(-1)
imprimiResultado(11)