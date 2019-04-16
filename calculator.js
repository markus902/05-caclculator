
let a;
let round = -1;
let chain = [];
let display;
let currentNumber = '';
let operator = null;

let calc = {
    firstOperand: null,
    secondOperand: null,
    missingOperand: true,
    result: null,
    }

function key1() {a = 1; input()};
function key2() {a = 2; input()};
function key3() {a = 3; input()};
function key4() {a = 4; input()};
function key5() {a = 5; input()};
function key6() {a = 6; input()};
function key7() {a = 7; input()};
function key8() {a = 8; input()};
function key9() {a = 9; input()};
function key0() {a = 0; input()};
function keyComma() {a = '.'; input()};

function input(){

if(operator!=null){
        
    switch (operator != null){
        
        case 1:
        addition();
        break;
    
        case 2:
        subtraction();
        break;
    
        case 3:
        multiplication();
        break;
    
        case 4:
        division();
        break;
    
    }  
}

round = round + 1;
chain[round] = a;

currentNumber = currentNumber + chain[round];
   
document.getElementById('numbers').innerHTML = currentNumber;

}

function addition(){calc.result = calc.firstOperand + calc.secondOperand; document.getElementById('numbers').innerHTML = calc.result;}
function subtraction(){calc.result = calc.firstOperand - calc.secondOperand; document.getElementById('numbers').innerHTML = calc.result;}
function multiplication(){calc.result = calc.firstOperand * calc.secondOperand; document.getElementById('numbers').innerHTML = calc.result;}
function division(){
    if (calc.secondOperand == null) {
        calc.secondOperand = 1;
    }
    calc.result = calc.firstOperand / calc.secondOperand;}

function keyPlus() {

    if (calc.missingOperand == true) {
        calc.firstOperand = Number(currentNumber);
        addition();
        document.getElementById('numbers').innerHTML = calc.result;
        calc.missingOperand = false;
        operator = 1;
    }
    else {

        if(operator != 1){
            operatorSwitch();
            document.getElementById('numbers').innerHTML = calc.result;
            calc.firstOperand = calc.result;
            operator = 1;

        }
        else{
        operator = 1;
        calc.secondOperand = Number(currentNumber);
        addition();
        document.getElementById('numbers').innerHTML = calc.result;
        calc.firstOperand = calc.result;
        calc.storage = calc.result;
    }}
    clearVars();
    }
   
function keyMinus(){

    if (calc.missingOperand == true) {
        calc.firstOperand = Number(currentNumber);
        subtraction();
        document.getElementById('numbers').innerHTML = calc.firstOperand;
        calc.missingOperand = false;
        calc.secondOperand = calc.result;
        operator = 2;

    }
    else{
        
        if(operator != 2){
            operatorSwitch();
            document.getElementById('numbers').innerHTML = calc.result;
            calc.firstOperand = calc.result;
            operator = 2;

        }
        else{
        operator = 2;
        calc.firstOperand = calc.result;
        calc.secondOperand = Number(currentNumber);
        subtraction();
        document.getElementById('numbers').innerHTML = calc.result;
        calc.secondOperand = calc.result;
    }}
    clearVars();
    }

function keyTimes() {

    if (calc.missingOperand == true) {
        calc.firstOperand = Number(currentNumber);
        calc.secondOperand = 1;
        multiplication();
        document.getElementById('numbers').innerHTML = calc.firstOperand;
        calc.missingOperand = false;
        operator = 3;
    }
    else {
        if(operator != 3){
            operatorSwitch();
            document.getElementById('numbers').innerHTML = calc.result;
            calc.firstOperand = calc.result;
            operator = 3;

        }
        else{
        operator = 3;
        calc.secondOperand = Number(currentNumber);
        multiplication();
        document.getElementById('numbers').innerHTML = calc.result;
        calc.firstOperand = calc.result;
        calc.storage = calc.result;
    }}
    clearVars();
    }

function keyDiv(){
    
    if (calc.missingOperand == true) {
        calc.firstOperand = Number(currentNumber);
        document.getElementById('numbers').innerHTML = calc.firstOperand;
        calc.missingOperand = false;
        operator = 4;  
    }
    else{
        if(operator != 4){
            operatorSwitch();
            document.getElementById('numbers').innerHTML = calc.result;
            calc.firstOperand = calc.result;
            operator = 4;

        }
        else{
        calc.secondOperand = Number(currentNumber);
        division();
        document.getElementById('numbers').innerHTML = calc.result;
        calc.storage = calc.result;
        calc.firstOperand = calc.result;
        operator = 4;
    }}
    clearVars();
}

function keyEqual(){

    switch (operator){
    case 1:
    keyPlus();
    break;

    case 2:
    keyMinus();
    break;

    case 3:
    keyTimes();
    break;

    case 4:
    keyDiv();
    break;

}  
    document.getElementById('numbers').innerHTML = calc.result;  
    round = -1;
    currentNumber = '';
    a = 0;
    }


function operatorSwitch(){
    switch (operator){
        case 1:
        calc.result = calc.firstOperand + Number(currentNumber);
        break;
    
        case 2:
        calc.result = calc.firstOperand - Number(currentNumber);
        break;
    
        case 3:
        calc.result = calc.firstOperand * Number(currentNumber);
        break;
    
        case 4:
        calc.result = calc.firstOperand / Number(currentNumber);
        break;
}}

function keyClear(){
    Result = 0;
    round = -1;
    currentNumber = '';
    chain = [];
    calc.result = null;
    calc.firstOperand = null;
    calc.secondOperand = null;
    calc.missingOperand = true;
    document.getElementById('numbers').innerHTML = Result;
}
    
function clearVars(){
    round = -1;
    currentNumber = '';
    chain = [];

}



display = document.querySelector('.display');
result = document.createElement('div');
result.classList.add('result');
result.setAttribute('style','width: 20pcurrentNumber; height: 20pcurrentNumber; background: yellow; margin: 0pcurrentNumber;');
display.appendChild(result);