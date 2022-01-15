/**
 * 
 * @param {Number} number 
 */

function SameNumber(number) {
    let arr = number.toString().split("");

    let flag = 1;
    let sum = 0;
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] === arr[Number.parseInt(x) + 1]) {
            flag++;
        }
        sum += Number.parseInt(arr[x]);
    }

    if (flag == arr.length) {
        console.log("true");
    } else {
        console.log("false");
    }
    console.log(sum);


}
SameNumber(2232222);