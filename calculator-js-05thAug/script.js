let inputField=document.getElementById('input1');
let outputValue = 0;
let resultDisplay=document.querySelector('#result')
resultDisplay.textContent = outputValue;
let operations = document.querySelectorAll("button");
console.log(operations);
operations[0].addEventListener('click', calculator.bind(this,'add'));
operations[1].addEventListener('click', calculator.bind(this,'subtract'));
operations[2].addEventListener('click',calculator.bind(this,'multiply'));
operations[3].addEventListener('click',calculator.bind(this,'divide'));

function getInput(){
    return parseInt(inputField.value);
}

function calculator(operation){
    enteredInput = getInput();
    if(operation == 'add'){
        outputValue+=enteredInput;
        inputField.value = null;
    }
    else if(operation == 'subtract'){
        outputValue-=enteredInput;
        inputField.value = null;
    }
    else if(operation == 'multiply'){
        outputValue*=enteredInput;
        inputField.value = null;
    }
    else if(operation == 'divide'){
        outputValue/=enteredInput;
        inputField.value = null;
    }
    setResult(outputValue);
}
function setResult(result){
    resultDisplay.textContent = result;
}