function bigTwoNumbers(numbers) {

    const sortedNumbers = [];
    numbers.forEach(element => {
        sortedNumbers.push(element);
    });
    sortedNumbers.sort((a, b) => a - b);
    console.log(sortedNumbers[0]);
    console.log(sortedNumbers[1]);
}
bigTwoNumbers([43, 4, 12, 4])