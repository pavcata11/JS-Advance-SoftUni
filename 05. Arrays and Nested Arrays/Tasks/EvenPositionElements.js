function evenPosition(arr) {


    const findArray = arr.filter(function(v, i) {
        return i % 2 == 0;

    });
    console.log(findArray.join(" "))


}
evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10']);