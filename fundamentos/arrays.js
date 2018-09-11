const valores = [7.7 ,8.9 ,9.2 ,7.5]
console.log(valores[0], valores[3])
console.log(valores[4])

//adicionando elemento no array
valores[4] = 10
console.log(valores)

//funcao que informa quantos elementos tem no array
console.log(valores.length)

valores.push({id: 3}, false,null, 'teste')
console.log(valores)

//tirar o valor
console.log(valores.pop())
delete valores[0]
console.log(valores)

//identificar se é objeto
console.log(typeof valores)
