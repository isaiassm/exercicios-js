function area (largura, altura){
    const area = largura *  altura
    if(area > 20){
        console.log(`valor acima de parametro: ${area}m2`)
    }else{
        return area
    }
}

console.log(area(2 , 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4, 5, 7, 5))
console.log(area(5, 5))