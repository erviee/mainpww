        // Function to determine if a number is odd or even
        function checkOddEven(number) {
            if (number % 2 === 0) {
                return "Even";
            } else {
                return "Odd";
            }
        }

        // Function to calculate the sum of an array of numbers
        function calculateSum(numbers) {
            var sum = 0;
            for (var i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            return sum;
        }

        // Function to handle button click event
        function calculate() {
            var integers = [];
            for (var i = 1; i <= 25; i++) {
                var input = parseInt(document.getElementById('num' + i).value);
                integers.push(input);
            }

            var output = document.getElementById('output');
            var result = "";
            var sum = calculateSum(integers);

            for (var i = 0; i < integers.length; i++) {
                result += "Number " + integers[i] + " is " + checkOddEven(integers[i]) + "<br>";
            }

            result += "<b>" + "<br>Total Sum: </b>" + sum;
            output.innerHTML = result;
        }