function LastNumbersSequence(n, k) {
    let output = [1];
    while (n-- > 1) {
        let sum = 0;
        for (let index = output.length - 1; index > output.length - 1 - k; index--) {
            if (typeof(output[index]) == 'number') {
                sum += Number(output[index]);
            }
        }
        output.push(sum);
    }
    return output;
}

LastNumbersSequence(6, 3);
LastNumbersSequence(8, 2);