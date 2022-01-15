function ex6(array) {
    let catalogue = {};
    array.forEach(element => {
        let [name, price] = element.split(" : ");
        price = Number(price);
        index = name[0];

        if (!catalogue[index]) {
            catalogue[index] = {};
        }
        catalogue[index][name] = price;

    });
    let result = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    //console.log(result);
    for (const key of result) {
        let sortedItems = Object.entries(catalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);
        sortedItems.forEach(element => {
            console.log(`  ${element[0]}: ${element[1]}`)
        });
    }
}
ex6(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])