/**
 * 
 * @param {Number} firstNumber 
 * @param {Number} secondNumber 
 * @param {string} operator 
 */
function Calculate(firstNumber, secondNumber, operator) {
    let result;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "**":
            result = firstNumber ** secondNumber;
            break;
        case "%":
            result = firstNumber % secondNumber;
            break;
    }
    console.log(result)
}
Calculate(5, 5, "+")