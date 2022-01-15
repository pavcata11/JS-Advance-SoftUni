function DrawingSquare(numberOfStars = 5) {
    for (let i = 0; i < numberOfStars; i++) {
        let line = "";
        for (let j = 0; j < numberOfStars; j++) {

            line += "* ";
        }
        console.log(line);


    }
}
DrawingSquare(3);