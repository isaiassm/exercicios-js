function teste (num){
    if(num > 7)
        console.log(num)
        console.log('final')
    
}

teste(6)
teste(8)

function teste2(num){
    if(num > 7); {//cuidado com o ;. não usar com as estruturas de controle
        console.log(num)
    }
}
teste2(5)
teste2(8)