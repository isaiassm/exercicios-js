const pessoa  = {
    saudacao : 'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa) //bind :  metoto usado para amarrar o this
falarDePessoa()