Array.prototype.map2 = function(callback){
    const NewArray = []
    for (let i = 0 ; i < this.length; i++){
        NewArray.push(callback(this [i], this))
    }
   return NewArray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome":"caneta", "preco": 7.50}'
]

//retornar um array apenas com os precos


const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)
