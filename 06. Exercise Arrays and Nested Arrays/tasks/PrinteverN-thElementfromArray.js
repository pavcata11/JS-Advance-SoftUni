/**
 * 
 * @param {Array} array 
 * @param {Number} interval 
 * @returns 
 */
function printEverNelement(array, interval) {
    const arr = [];
    for (let i = 0; i < array.length; i += interval) {
        arr.push(array[i]);
    }
    return arr;
}
console.log(printEverNelement(['dsa',
        'asd',
        'test',
        'tset'
    ],
    2


))