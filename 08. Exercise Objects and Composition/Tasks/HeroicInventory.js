function ex4(array) {
    let result = [];
    array.forEach(element => {

        let [name, level, items] = element.split(" / ");;
        result.push({
            name: name,
            level: Number(level),
            items: items ? items.split(", ") : []
        })

    });
    console.log(JSON.stringify(result));

}
ex4(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])