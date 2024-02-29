function calculateGrade() {
    var a = parseFloat(document.getElementById("1st").value);
    var b = parseFloat(document.getElementById("2nd").value);
    var c = parseFloat(document.getElementById("3rd").value);
    var d = parseFloat(document.getElementById("4th").value);

    var ave = (a + b + c + d) / 4;

    var g;
    if (ave >= 95) {
        g = "A";
    } else if (ave >= 90) {
        g = "A";
    } else if (ave >= 85) {
        g = "B+";
    } else if (ave >= 80) {
        g = "B";
    } else if (ave >= 75) {
        g = "B-";
    } else {
        g = "C";
    }

    var m;
    switch (g) {
        case "A":
            m = "OUTSTANDING";
            break;
        case "A+":
            m = "EXCELLENT";
            break;
        case "A-":
            m = "VERY GOOD";
            break;
        case "B+":
            m = "GOOD";
            break;
        case "B":
            m = "SATISFACTORY";
            break;
        case "C":
            m = "FAIL";
            break;
        default:
            m = "FAIL";
    }

    var resultC = document.getElementById("result");
    resultC.innerHTML = "<h2>Whole school year grades result</h2>" +
        "<p>Your first quarter grade is: " + a + "</p>" +
        "<p>Your second quarter grade is: " + b + "</p>" +
        "<p>Your third quarter grade is: " + c + "</p>" +
        "<p>Your fourth quarter grade is: " + d + "</p>" +
        "<p>Your <b>average</b> is: " + ave.toFixed(5) + "</p>" +
        "<p>Your <b>final grade</b> is: " + g + " (" + m + ")</p>";
        document.getElementById('result').style.textAlign = "center";
}
