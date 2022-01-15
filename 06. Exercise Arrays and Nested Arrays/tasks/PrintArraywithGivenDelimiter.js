/**
 * 
 * @param {String Arrray} numbers 
 * @param {String} delimetar 
 */
function printArrayWithGivenDilimetar(numbers, delimetar) {
    let print = '';
    for (let i = 0; i < numbers.length; i++) {
        if (i == numbers.length - 1) {
            print += numbers[i];
        } else {
            print += numbers[i] + delimetar;
        }


    }
    console.log(print);
    // console.log(numbers.join(delimetar));
}
printArrayWithGivenDilimetar(['One',
        'Two',
        'Three',
        'Four',
        'Five'
    ],
    '-'
)
printArrayWithGivenDilimetar(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'
    ],
    '_'
)