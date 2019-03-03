
let a;
let round = -1;
let chain = [];
let display;
let currentNumber = '';
let operator;

let calc = {
    firstOperand: null,
    secondOperand: null,
    missingOperand: true,
    storage: null,
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

round = round + 1;
chain[round] = a;

currentNumber = currentNumber + chain[round];

console.log(currentNumber);
   
document.getElementById('numbers').innerHTML = currentNumber;

}

function addition(){calc.result = calc.firstOperand + calc.secondOperand;}
function subtraction(){calc.result = calc.firstOperand - calc.secondOperand;}
function multiplication(){calc.result = calc.firstOperand * calc.secondOperand;}
function division(){
    if (calc.secondOperand == null) {
        calc.secondOperand = 1;
    }
    calc.result = calc.firstOperand / calc.secondOperand;}

function keyPlus() {
    
    operator = 1;

    if (calc.missingOperand == true) {
        calc.secondOperand = Number(currentNumber);
        console.log(calc.secondOperand);
        addition();
        document.getElementById('numbers').innerHTML = calc.result;
        calc.missingOperand = false;
    }
    else {
        //calc.firstOperand = calc.secondOperand;
        calc.firstOperand = Number(currentNumber);
        console.log(calc.secondOperand);
        console.log(calc.firstOperand);
        addition();
        document.getElementById('numbers').innerHTML = calc.result;
        calc.secondOperand = calc.result;
        calc.storage = calc.result;
    }
    currentNumber = '';
    clearVars();
    }
   
function keyMinus(){
    
    operator = 2;
   
    

    if (calc.missingOperand == true) {
        calc.firstOperand = Number(currentNumber);
        console.log(calc.secondOperand);
        document.getElementById('numbers').innerHTML = calc.firstOperand;
        calc.missingOperand = false;  
    }
    else{
        calc.secondOperand = Number(currentNumber);
        console.log(calc.secondOperand);
        subtraction();
        document.getElementById('numbers').innerHTML = calc.result;
        calc.storage = calc.result;
        calc.firstOperand = calc.result;
    }    
    currentNumber = '';
    clearVars();
    }

function keyTimes() {
    
    operator = 3;

    if (calc.missingOperand == true) {
        calc.secondOperand = Number(currentNumber);
        console.log(calc.secondOperand);
        multiplication();
        document.getElementById('numbers').innerHTML = calc.secondOperand;
        calc.missingOperand = false;
    }
    else {
        //calc.firstOperand = calc.secondOperand;
        calc.firstOperand = Number(currentNumber);
        console.log(calc.secondOperand);
        console.log(calc.firstOperand);
        multiplication();
        document.getElementById('numbers').innerHTML = calc.result;
        calc.secondOperand = calc.result;
        calc.storage = calc.result;
    }
    currentNumber = '';
    clearVars();
    }

function keyDiv(){
    
    operator = 4;

    if (calc.missingOperand == true) {
        calc.firstOperand = Number(currentNumber);
        console.log(calc.secondOperand);
        document.getElementById('numbers').innerHTML = calc.firstOperand;
        calc.missingOperand = false;  
    }
    else{
        calc.secondOperand = Number(currentNumber);
        console.log(calc.secondOperand);
        division();
        document.getElementById('numbers').innerHTML = calc.result;
        calc.storage = calc.result;
        calc.firstOperand = calc.result;
    }    
    currentNumber = '';
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
    document.getElementById('numbers').innerHTML = calc.storage;  
    round = -1;
    currentNumber = '';
    a = 0;
    }


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