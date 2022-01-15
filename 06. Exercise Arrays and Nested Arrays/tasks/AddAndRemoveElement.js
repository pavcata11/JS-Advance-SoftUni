/**
 * 
 * @param {Array} array 
 */
function addOrRemoveArray(array) {
    let number = 0;
    let resultArr = [];
    array.forEach(element => {
        if (element == "add") {
            number++;
            resultArr.push(number);
        } else if (element == "remove") {
            if (resultArr.length > 0) {
                resultArr.pop();

            }
            number++;
        }

    });
    if (resultArr.length == 0) {
        console.log("Empty");
    } else {
        resultArr.forEach(element => {
            console.log(element);
        });
    }
}

addOrRemoveArray(['add',
    'add',
    'add',
    'add'
])
addOrRemoveArray(['add',
    'add',
    'remove',
    'add',
    'add'
])
addOrRemoveArray(['remove',
    'remove',
    'remove'
])