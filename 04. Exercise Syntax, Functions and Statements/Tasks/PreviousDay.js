function PreviousDay(year, month, day) {

    let dataString = year + "-" + month + "-" + day;
    let event = new Date(dataString);
    event.setDate(day - 1);


    console.log(event.getFullYear() + "-" + (Number(event.getMonth() + 1)) + "-" + event.getDate());

}
PreviousDay(2016, 10, 1);