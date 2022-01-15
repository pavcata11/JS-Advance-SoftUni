function SpeedLimit(speed, type) {
    let status = "";
    if (type == "city") {
        if (speed <= 50) {
            console.log(`Driving ${speed} km/h in a ${50} zone`);
        } else {
            if (speed - 50 <= 20) {
                status = "speeding";
            } else if (speed - 50 > 20 && speed - 50 <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving";
            }
            console.log(`The speed is ${speed-50} km/h faster than the allowed speed of ${50} - ${status}`)
        }
    } else if (type == "motorway") {
        if (speed <= 130) {
            console.log(`Driving ${speed} km/h in a ${130} zone`);
        } else {
            if (speed - 130 <= 20) {
                status = "speeding";
            } else if (speed - 130 > 20 && speed - 130 <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving";
            }
            console.log(`The speed is ${speed-130} km/h faster than the allowed speed of ${130} - ${status}`)
        }
    } else if (type == "interstate") {
        if (speed <= 90) {
            console.log(`Driving ${speed} km/h in a ${90} zone`);
        } else {
            if (speed - 90 <= 20) {
                status = "speeding";
            } else if (speed - 90 > 20 && speed - 90 <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving";
            }
            console.log(`The speed is ${speed-90} km/h faster than the allowed speed of ${90} - ${status}`)
        }
    } else if (type == "residential") {
        if (speed <= 20) {
            console.log(`Driving ${speed} km/h in a ${20} zone`);
        } else {
            if (speed - 20 <= 20) {
                status = "speeding";
            } else if (speed - 20 > 20 && speed - 20 <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving";
            }
            console.log(`The speed is ${speed-20} km/h faster than the allowed speed of ${20} - ${status}`)
        }
    }
}
SpeedLimit(120, 'interstate')