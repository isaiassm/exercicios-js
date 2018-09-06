//formas de ultilizar numero
const peso1 = 1.0
const peso2 = Number('2.0')


console.log(peso1 , peso2)
console.log(Number.isInteger(peso1)) //ultilizado para indentificar se é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2) 

console.log(media.toFixed(2)) //função ultilizada para cortar as casas decimais
console.log(media.toString()) //função para tornar String
console.log(typeof media) //mostra o tipo 

/* Number com N MAIUSCULO é uma Função
number com n minusculo é um tipo de dado
*/
