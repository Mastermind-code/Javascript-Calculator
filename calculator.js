

//  input prompt
const caculator = prompt('Enter operator ( either +, -, * or / ): ');

// operand value
const value1 = parseFloat(prompt('Enter first number: '));
const value2 = parseFloat(prompt('Enter second number: '));

let result;

// conditions
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}


console.log(`${number1} ${operator} ${number2} = ${result}`);