function ex7(array) {
    let result = [];
    for (let i = 1; i < array.length; i++) {
        array[i] = array[i].substring(2, array[i].length - 2);
        let [town, latitude, longitude] = array[i].split(" | ");
        result.push({

            Town: town,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2))
        })
    }

    console.log(JSON.stringify(result));
}
ex7(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])