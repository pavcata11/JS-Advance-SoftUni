function ex3(obj) {
    const result = {};

    function getEngine(power) {

        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else if (power <= 200) {
            return { power: 200, volume: 3500 };
        }

    }
    result.model = obj.model;
    result.engine = getEngine(obj.power);
    result.carriage = { type: obj.carriage, color: obj.color }
    let wheelsize = obj.wheelsize;
    if (wheelsize % 2 == 0) {
        wheelsize -= 1;
    }
    result.wheels = new Array(4).fill(wheelsize, 0, 4);

    return result;

}


console.log(ex3({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))

ex3({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})