import Operation from "./operations.js";

/* DOM manipulation*/
const operatorButtons = document.querySelectorAll('[data-operator]')
const visorElement = document.querySelector('output')
let num1
let num2
let operator

function displayOnVisor(value){
    visorElement.value += value
}
function keyboardAccessibility(){
    document.addEventListener("keypress", event =>{
        let keycode = event.key
        switch (keycode){
            case '0':
            case '1': 
            case '2': 
            case '3': 
            case '4': 
            case '5': 
            case '6': 
            case '7': 
            case '8': 
            case '9':  
                displayOnVisor(keycode)
                break
            case '+':
            case '-': 
            case '*': 
            case '/': 
                operator = keycode
                break
            case ',':
            case '.':  
                displayOnVisor('.')
                break
        }
    })
}

keyboardAccessibility()
