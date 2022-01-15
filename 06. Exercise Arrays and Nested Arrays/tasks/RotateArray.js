/**
 * 
 * @param {Array} array 
 * @param {Number} number 
 */
function arrayRotation(array, number) {
    for (let i = 0; i < number; i++) {
        array.unshift(array.pop());
    }
    console.log(array.join(" "));
}
arrayRotation(['1',
        '2',
        '3',
        '4'
    ],
    2
)
arrayRotation(['Banana',
        'Orange',
        'Coconut',
        'Apple'
    ],
    15
)