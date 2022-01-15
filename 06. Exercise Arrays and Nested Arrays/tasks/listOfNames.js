/**
 * 
 * @param {Array} listOfNames 
 */
function solve(listOfNames) {

    listOfNames.sort((a, b) => a.localeCompare(b))
    for (let i = 1; i <= listOfNames.length; i++) {
        console.log(`${i}.${listOfNames[i-1]}`)
    }
}
solve(["John", "Bob", "Christina", "Ema"])