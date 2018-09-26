function tratarErrorELancer(){
    //throw new Error('....')
    //throw 10
    //throw true
    //throw 'mensagens'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!')
    }catch(e){
        tratarErrorELancer(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'roberto'}
imprimirNomeGritado(obj)