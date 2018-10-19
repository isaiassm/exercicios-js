//Object.preventExtesions
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag:'promocao'
})
console.log('extnsivel:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

//object.seal 
const pessoa = {nome: 'juliana', idade: 35}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29 
console.log(pessoa)

//Object.freeze = selado + valores constantes

