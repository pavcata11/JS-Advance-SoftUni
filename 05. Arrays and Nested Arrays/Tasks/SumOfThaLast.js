function sumOfTheLast(numbersAsString) {
    const arr = [];
    numbersAsString.forEach(element => {
        arr.push(Number(element));
    });
    return arr.pop() + arr.shift();

}
console.log(sumOfTheLast(['20', '30', '40']));