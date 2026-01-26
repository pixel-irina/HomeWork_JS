'use strict'
/*
Напишите калькулятор, который позволяет
 ввести 2 числа в 2 input, и нажать на 
 кнопку операции (сложение, деление, вычитание, умножение)

Выведите результат в отдельное поле.
*/

function getNumber() {

    const a = Number(document.getElementById('num1').value);
    const b = Number(document.getElementById('num2').value);
    return { a, b };
}

function add() {
    const { a, b } = getNumber();
    document.getElementById('result').value = a + b;
}

function subtract() {
    const { a, b } = getNumber();
    document.getElementById('result').value = a - b;
}
function multiply() {
    const { a, b } = getNumber();
    document.getElementById('result').value = a * b;
}

function divide() {
    const { a, b } = getNumber();

    if (b === 0) {
        document.getElementById('result').value = 'Ошибка: деление на 0';
    } else {
document.getElementById('result').value = a / b;
    }
    
}
 function clearFields() {
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("result").value = "";
}
       
