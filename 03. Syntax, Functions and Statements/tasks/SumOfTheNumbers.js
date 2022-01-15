function SumBetweenTwoNumbers(firstNum, secondNum) {
    let furstNumInt = Number(firstNum);
    let secondNumInt = Number(secondNum);
    let sum = 0;
    for (let index = furstNumInt; index <= secondNumInt; index++) {
        sum += index;
    }
    return sum;

}

SumBetweenTwoNumbers("1", "5")