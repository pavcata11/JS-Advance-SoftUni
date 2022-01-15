/**
 * 
 * @param {number} x 
 * @param {number} y 
 */
function MaxDevision(a, b) {
    if (a > b) { //swap the two number so b is always the greater
        let c = a;
        a = b;
        b = c;
    }
    while (a != 0) { // while a is > 0 then keep b % a
        let c = b % a;
        b = a;
        a = c;
    }
    console.log(b);
}
MaxDevision(2, 4);