function Validate(x1, y1, x2, y2) {
    let x3 = 0;
    let y3 = 0;
    let calc = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2));
    if (Number.isInteger(calc)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    calc = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2));
    if (Number.isInteger(calc)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    calc = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    if (Number.isInteger(calc)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}


Validate(2, 1, 1, 1);