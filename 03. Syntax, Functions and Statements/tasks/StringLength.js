/**
 * 
 * @param {string} firstString 
 * @param {string} secondString 
 * @param {string} thirdString 
 */
function StringLenght(firstString, secondString, thirdString) {

    let sumOfString = firstString + secondString + thirdString;
    console.log(sumOfString.length)
    console.log(Math.floor(sumOfString.length / 3))
}
StringLenght('pasta', '5', '22.3')