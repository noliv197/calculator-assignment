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
let previousKey = ""

document.addEventListener("keydown", event =>{
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

    }else if (lastAction === 'calculate') {
        visorElement.value = value
        calculator.firstNumber = 0
        calculator.secondNumber = 0
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

function checkOperator(key) {
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
}

function checkEqual() {
    if(
        calculator.operator !== "" && 
        lastAction !=='calculate' &&
        lastAction !=='operator'
    ){
        getResult()
        displayResult(calculator.result)
        lastAction = 'calculate'
    }
}

function changeButtonStatus(key) {
    if(previousKey != "") {
        document.querySelector(`button[data-operator="${previousKey}"]`).classList.remove("active")
    }
    document.querySelector(`button[data-operator="${key}"]`).classList.add("active")
    previousKey = key
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
            checkOperator(key)
            changeButtonStatus(key)
            break
        case ',':
        case '.':
            if (lastAction === 'operator' || lastAction === 'calculate') displayOnVisor("0.")
            else if(!visorElement.value.includes(".")) displayOnVisor(".")
            break
        case 'clear':
        case 'Escape':
            clearAll()
            changeButtonStatus(key)
            break
        case 'erase':
        case 'Backspace':
            deleteChar()
            break
        case '=':
            checkEqual()
            changeButtonStatus(key)
            break
    }
}