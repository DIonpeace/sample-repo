function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
console.log(add(30,10))
console.log(multiply(5,2))
console.log(subtract(5,10))
console.log(divide(5,10))
module.exports = { add, subtract, multiply, divide };
