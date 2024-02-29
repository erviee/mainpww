function calculate() {
    let nums = [];
    let sum = 0;
    let resultText = "";
    for (let i = 1; i <= 10; i++) {
        let num = parseInt(document.getElementById("num" + i).value);
        nums.push(num);
        if (num % 2 === 0) {
            resultText += "<div class='result-line'>" + num + " is even. </div>";
        } else {
            resultText += "<div class='result-line'>" + num + " is odd. </div>";
        }
        sum += num;
    }

    resultText += "<div class='result-line'>The sum of all numbers is: " + sum + "</div>";
    document.getElementById("result").innerHTML = resultText;
}