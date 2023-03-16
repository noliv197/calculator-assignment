/*Operation Logic*/
export default class Operation{
    sum(num1,num2){
        return parseFloat(num1) + parseFloat(num2)
    }
    subtract(num1,num2){
        return parseFloat(num1) - parseFloat(num2)
    }
    multiply(num1,num2){
        return parseFloat(num1) * parseFloat(num2)
    }
    divide(num1,num2){
        return num2 == 0 ? NaN : parseFloat(num1) / parseFloat(num2)
    }
    operate(num1,num2,operator){
        switch (operator) {
            case '+': return  this.sum(num1, num2)
            case '-': return  this.subtract(num1, num2)
            case '/': return  this.divide(num1, num2)
            case '*': return  this.multiply(num1, num2)
            case null: return NaN
            default: return  0
        }
    }
}
