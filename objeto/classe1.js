class lancamento {
    constructor(nome = 'generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }
    addLancamentos(...lancamento){
        lancamento.forEach(l => this.lancamento.push(l))

    }
    sumario(){
        let valorConsolidado = 0
        this.lancamento.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('salario', 45000)
const contaluz = new lancamento('luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaluz)
console.log(contas.sumario())
