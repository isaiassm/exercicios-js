//funcao sem retorno

function imprimirSoma(a, b){
console.log(a + b)

}
imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,3,10,4,5,6) //Como e linguagem é fracamente tipada não a reclamação por não passar os parametros corretos.
imprimirSoma()

//funcao com retorno
function soma(a, b = 0){
    return a + b
}
console.log(soma(2,3)) //como tem retorno a função deve ser chamada dentro do console.
console.log(soma(2))


