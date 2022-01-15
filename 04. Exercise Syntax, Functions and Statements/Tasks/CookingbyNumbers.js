function Cooking(number, operation1, operation2, operation3, operation4, operation5, operation6) {
    let operations = new Array();
    operations.push(operation1, operation2, operation3, operation4, operation5, operation6);
    for (let i = 0; i < 5; i++) {
        switch (operations[i]) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number -= number * 0.2;
                break;
        }
        console.log(number);
    }

}
Cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')