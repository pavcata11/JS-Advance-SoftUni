function bigHalf(numbers) {
    const arr = [];
    numbers.forEach(element => {
        arr.push(element);
    });
    arr.sort((a, b) => a - b);
    const lenght = Math.floor(arr.length / 2);
    return arr.slice(lenght);

}
bigHalf([3, 19, 14, 7, 2, 19, 6]);
bigHalf([4, 7, 2, 5]);