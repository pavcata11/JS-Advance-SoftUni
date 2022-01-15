/**
 * 
 * @param {Array} cordinates 
 */
function solve(cordinates) {

    const matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = 'X';
    let flag = 0;
    for (let i = 0; i < cordinates.length; i++) {


        let x = Number(cordinates[i][0]);
        let y = Number(cordinates[i][2]);
        //console.log(x, y);
        if (matrix[x][y] == false) {

            matrix[x][y] = player;

            if (player == "X") {
                player = "O";
            } else {
                player = "X";
            }
        } else {
            let countfalse = 0;
            for (let j = 0; j < matrix.length; j++) {
                for (let h = 0; h < matrix[j].length; h++) {
                    if (matrix[j][h] == false) {
                        countfalse++;
                    }
                }
            }
            if (countfalse > 0) {
                console.log("This place is already taken. Please choose another!");
            } else {
                break;
            }

        }
        for (let j = 0; j < matrix.length; j++) {
            let row = "";
            let cow = "";
            let diagonalmain = "";
            let diagonalSecond = "";
            for (let index = 0; index < matrix[j].length; index++) {

                row += matrix[j][index];
                cow += matrix[index][j];
                diagonalmain += matrix[index][index];
                diagonalSecond += matrix[index][matrix.length - 1 - index]

            }

            if (row == "OOO" || row == "XXX") {
                console.log(`Player ${row.charAt(0)} wins!`)
                flag = 1;
                break;
            } else if (cow == "OOO" || cow == "XXX") {
                console.log(`Player ${cow.charAt(0)} wins!`)
                flag = 1;
                break;
            } else if (diagonalmain == "OOO" || diagonalmain == "XXX") {
                console.log(`Player ${diagonalmain.charAt(0)} wins!`)
                flag = 1;
                break;
            } else if (diagonalSecond == "OOO" || diagonalSecond == "XXX") {
                console.log(`Player ${diagonalSecond.charAt(0)} wins!`)
                flag = 1;
                break;
            }
        }
        if (flag == 1) {
            break;
        }
    }
    if (flag == 0) {
        console.log(`The game ended! Nobody wins :(`)
    }


    for (let i = 0; i < matrix.length; i++) {
        let row = '';
        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j] + "\t";
        }
        console.log(row);
    }

}
solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]);