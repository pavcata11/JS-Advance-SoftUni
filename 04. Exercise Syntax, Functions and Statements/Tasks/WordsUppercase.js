/**
 * 
 * @param {String} txt 
 */
function Text(text) {

    let result = text.toUpperCase()
        .split(/[\W]+/)
        .filter(w => w.length > 0)
        .join(", ");

    console.log(result);
}

Text('hello! !_ ===ffeeg ===!=@#32232354350238478s');