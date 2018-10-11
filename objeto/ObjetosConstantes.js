//pessoa ->  123 -> {....}
const pessoa = {nome: 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

//pessoa -> 456  -> {....}
//pessoa = {nome : 'ana'}

Object.freeze(pessoa)

pessoa.nome = 'maria'
pessoa.end = 'rua abs'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'joao'})
pessoaConstante.nome = 'maria'
console.log(pessoaConstante)
