/*Operation Logic*/
export default class Operation{
    sum(firstNumber,secondNumber){
        let result = parseFloat(firstNumber) + parseFloat(secondNumber)
        return this.checkFloat(result)
    }
    subtract(firstNumber,secondNumber){
        let result = parseFloat(firstNumber) - parseFloat(secondNumber)
        return this.checkFloat(result)
    }
    multiply(firstNumber,secondNumber){
        let result = parseFloat(firstNumber) * parseFloat(secondNumber)
        return this.checkFloat(result)
    }
    divide(firstNumber,secondNumber){
        return secondNumber == 0 ? 'not so fast' : this.checkFloat(parseFloat(firstNumber) / parseFloat(secondNumber))
    
    }
    checkFloat(number){
        return (number.toFixed(2) != `${number}.00` ? number.toFixed(2) : number)
    }
    result(firstNumber,secondNumber,operator){
        switch (operator) {
            case '+': return  this.sum(firstNumber, secondNumber)
            case '-': return  this.subtract(firstNumber, secondNumber)
            case '/': return  this.divide(firstNumber, secondNumber)
            case '*': return  this.multiply(firstNumber, secondNumber)
            case null: return NaN
            default: return  0
        }
    }
}
