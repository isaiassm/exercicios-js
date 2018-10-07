//factory

function criarProduto(nome , preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('note', 12540))
console.log(criarProduto('tv', 50000))

