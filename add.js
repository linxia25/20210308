const arguments = process.argv.slice(2);

const num1 = arguments[0];
const num2 = arguments[1];
const sum = parseInt(num1) + parseInt(num2);

console.log(num1+" plus "+ num2 +" is "+ sum);