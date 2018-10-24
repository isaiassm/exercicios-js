const alunos = [
    {nome: 'joao', nota: 7.3, bolsista : false},
    {nome: 'maria', nota: 9.2, bolsista: true},
    {nome: 'pedro', nota: 9.8, bolsista: false},
    {nome: 'ana', nota:8.7, bolsista: true}
]

//desafio 1: todos os alunos são bolsistas?
const tbolsistas = (resultado, bolsista) => resultado && bolsista
console.log (alunos.map(a => a.bolsista).reduce(tbolsistas))
   

//desafio 2: algum aluno é bolsista? 
const bolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(bolsistas))

   
