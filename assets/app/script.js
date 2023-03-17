import Operation from "./operations.js";

const buttons = document.querySelectorAll('button')
const visorElement = document.querySelector('output')
let operate = new Operation()
let calculator = {
    firstNumber: 0, 
    secondNumber: 0, 
    operator: '', 
    result: ''
}
let keyCode = ""
let lastAction = ""

document.addEventListener("keypress", event =>{
    keyCode = event.key
    codeCheck(keyCode)
})

buttons.forEach(button => button.addEventListener("click", () =>{
    if (button.dataset.key != null) {
        keyCode = button.dataset.key
    } else if (button.dataset.operator != null) {
        keyCode = button.dataset.operator
    }
    codeCheck(keyCode)
}))

function displayOnVisor(value,action){  
    if (
        lastAction === 'operator' ||
        visorElement.value.charAt(0) === "0" && 
        !visorElement.value.includes("0.") && 
        value !== "."
    ) {
        visorElement.value = value
    }else {
        visorElement.value += value
    }
    lastAction = action
}
function displayResult(result){
    visorElement.value = result
}
function getResult(){
    calculator.secondNumber = visorElement.value
    calculator.result = operate.result(
        calculator.firstNumber,
        calculator.secondNumber,
        calculator.operator
    )
    calculator.firstNumber = calculator.result
}
function clearAll(){
    visorElement.value = "0"
    lastAction = ''
    calculator.firstNumber = 0 
    calculator.secondNumber = 0
    calculator.operator = '' 
    calculator.result =  ''
}
function deleteChar(){
    if (visorElement.value.length > 1) {
        visorElement.value = visorElement.value.slice(0, -1)
    } else if (visorElement.value != "0"){
        visorElement.value = "0"
    }
}
function codeCheck(key){
    switch (key){
        case '0':
            if(
                visorElement.value.charAt(0) === "0" && 
                visorElement.value.charAt(1) !== "."
            ) {
                break
            } else {
                displayOnVisor(key,'key')
                break
            }
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            displayOnVisor(key,'key')
            break
        case '+':
        case '-':
        case '*':
        case '/':
            if(
                calculator.firstNumber && 
                calculator.operator && 
                lastAction !== 'calculate' &&
                lastAction !== 'operator'
            ){
                getResult()
                displayResult(calculator.result)
                calculator.operator = key
            }else {
                calculator.firstNumber = visorElement.value
                calculator.operator = key
            }
            lastAction = 'operator'
            break
        case ',':
        case '.':
            if (lastAction === 'operator') displayOnVisor("0.")
            else if(!visorElement.value.includes(".")) displayOnVisor(".")
            break
        case 'clear':
            clearAll()
            break         
        case 'erase':
            deleteChar()
            break
        case '=':
        case 'Enter':
            if(
                calculator.operator !== "" && 
                lastAction !=='calculate' &&
                lastAction !=='operator'
            ){
                getResult()
                displayResult(calculator.result)
                lastAction = 'calculate'
            }
            break
    }
}