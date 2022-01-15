function piece(piesArr, parametar1, parametar2) {
    const arr = [];

    piesArr.forEach(element => {
        arr.push(element);
    });
    const firstUndex = arr.indexOf(parametar1);
    const secondIndex = arr.indexOf(parametar2);
    return arr.slice(firstUndex, secondIndex + 1);
}
console.log(piece(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
))