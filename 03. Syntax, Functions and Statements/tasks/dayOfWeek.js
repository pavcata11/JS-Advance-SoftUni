/**
 * 
 * @param {string} nameDay 
 */
function DayOFWeek(nameDay) {
    let result;
    switch (nameDay.toUpperCase()) {
        case "MONDAY":
            result = 1;
            break;
        case "TUESDAY":
            result = 2;
            break;
        case "WEDNESDAY":
            result = 3;
            break;
        case "THURSDAY":
            result = 4;
            break;
        case "FRIDAY":
            result = 5;
            break;
        case "SATURDAY":
            result = 6;
            break;
        case "SUNDAY":
            result = 7;
            break;
        default:
            result = "error";


    }
    console.log(result);
}
DayOFWeek('SUNDAY');