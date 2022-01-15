/**
 * 
 * @param {Array} array 
 */
function solve(array) {
    array.sort(function(a, b) {
        let nameA = a.length;
        let nameB = b.length;
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        let namea = a.toLowerCase();
        let nameb = b.toLowerCase();
        if (namea < nameb) {
            return -1;
        }
        if (namea > nameb) {
            return 1;
        }
        return 0;
    })
    console.log(array.join("\n"));
}
solve(['alpha',
    'beta',
    'gamma'
])
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
])
solve(['test',
    'Deny',
    'omen',
    'Default'
])