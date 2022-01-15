function solve(numbers) {
    const arr = [];
    numbers.forEach(element => {
        arr.push(element);
    });
    console.log(arr.filter((v, i) => i % 2 == 1)
        .map((v, i) => v * 2)
        .reverse()
        .join(" "));


}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);