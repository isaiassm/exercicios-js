//colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'

produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.nome
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'a4',
    valor:8900,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }], 
    calcularvalorseguro: function(){

    }

}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'av gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularvalorseguro
console.log(carro)
console.log(carro.condutores)