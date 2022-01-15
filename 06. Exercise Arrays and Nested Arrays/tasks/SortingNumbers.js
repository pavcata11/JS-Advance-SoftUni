/**
 * 
 * @param {Array} arrNums 
 */
function sortingNumbers(arrNums) {
    const sortedArr = [];
    while (arrNums.length != 0) {
        if (arrNums.length > 1) {
            let MinEl = Math.min(...arrNums);
            sortedArr.push(MinEl);
            const indexMin = arrNums.indexOf(MinEl);
            arrNums.splice(indexMin, 1);

            let MaxEl = Math.max(...arrNums);
            sortedArr.push(MaxEl);
            const indexMax = arrNums.indexOf(MaxEl);
            arrNums.splice(indexMax, 1);
        } else {
            sortedArr.push(arrNums.pop());
        }
    }
    return sortedArr;

}
sortingNumbers([16566]);