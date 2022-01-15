function ex1(array) {
    const product = {};
    for (let i = 0; i < array.length; i += 2) {
        product[array[i]] = Number(array[i + 1])

    }

    console.log(product);
}
ex1(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
console.log("---------------");
ex1(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);