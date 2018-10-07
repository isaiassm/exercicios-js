// closure é o escopo criado quando uma função é declarada
//esse escopo permite a função acessar a manipular variaveis externas á função

//contexto lexico em ação

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro 
}
const minhaFuncao = fora()
console.log(minhaFuncao())