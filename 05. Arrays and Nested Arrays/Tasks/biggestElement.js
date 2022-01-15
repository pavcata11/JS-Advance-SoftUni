/**
 * 
 * @param {Array} numberArr 
 */
function biggestNumber(numberArr) {
    let maxElement = numberArr[0][0];
    for (let row = 0; row < numberArr.length; row++) {
        for (let cow = 0; cow < numberArr[row].length; cow++) {
            if (maxElement < numberArr[row][cow]) {
                maxElement = numberArr[row][cow];
            }
        }
    }
    console.log(maxElement);
}
biggestNumber([
    [20, 50, 10],
    [8, 33, 145]
])
biggestNumber([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
])