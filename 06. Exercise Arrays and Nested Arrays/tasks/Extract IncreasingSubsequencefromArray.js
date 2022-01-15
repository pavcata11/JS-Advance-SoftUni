/**
 * 
 * @param {Array} array 
 */
function solve(array) {
    const arr = [array[0]];
    array.shift();
    array.reduce(function(previousValue, currentValue) {
        if (previousValue <= currentValue && arr[0] <= currentValue) {

            arr.push(currentValue);
            previousValue = currentValue;

        }
        return previousValue;
    }, 0)
    return arr;
}

solve([1,
    2,
    3,
    4
])
console.log(solve([20,
    3,
    2,
    15,
    6,
    1
]))