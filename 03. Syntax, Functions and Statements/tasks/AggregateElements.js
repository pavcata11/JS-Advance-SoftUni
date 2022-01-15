function ArrayCalculator(array) {
    let sum = 0;
    let inverseelement = 0;
    let concatElement = "";
    array.forEach(element => {
        sum += Number(element);
        inverseelement += 1 / Number(element);
        concatElement += element;

    });
    console.log(sum);
    console.log(inverseelement);
    console.log(concatElement);
}
ArrayCalculator([1, 2, 3])