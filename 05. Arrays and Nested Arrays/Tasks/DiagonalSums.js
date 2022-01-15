/**
 * 
 * @param {Array} numberArr 
 */
function DiagonalsSums(numberArr) {
    let sumOfMainDiagonal = 0;
    let sumOfSecondDiagonal = 0;
    for (let row = 0; row < numberArr.length; row++) {
        sumOfMainDiagonal += Number(numberArr[row][row]);
        sumOfSecondDiagonal += Number(numberArr[row][numberArr[row].length - row - 1])
    }
    console.log(sumOfMainDiagonal, sumOfSecondDiagonal);

}
DiagonalsSums([
    [20, 40],
    [10, 60]
])