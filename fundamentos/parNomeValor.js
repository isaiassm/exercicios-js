//par nome/valor
const saudacao = 'opa' //contexte lexico 1 

function exec(){
   const saudacao = 'falaaa' //contexte lexico 2
   return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 23,
    peso:90,
    endereco: {
        logradouro:'rua muito legal',
        numero: 123
    }

}
console.log(saudacao)
console.log(exec())
console.log(cliente)