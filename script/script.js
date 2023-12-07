const inp = document.getElementById("inpText");
let currentInput = ""; 
let operator = ""; 
let number1, number2;

function num(value) {
    currentInput += value;
    inp.value = currentInput;
}

function setOperator(op) {
    if (currentInput !== "") {
        operator = op;
        number1 = parseFloat(currentInput);
        currentInput = ""; 
    }
}

function calculate() {
    if (currentInput !== "") {
        number2 = parseFloat(currentInput);
        switch (operator) {
            case "+":
                inp.value = number1 + operator + number2 + "=" + (number1 + number2);
                break;
            case "-":
                inp.value = number1 + operator + number2 + "=" + (number1 - number2);
                break;
            case "*":
                inp.value = number1 + operator + number2 + "=" + (number1 * number2);
                break;
            case "/":
                if (number2 !== 0) {
                    inp.value = number1 + operator + number2 + "=" + (number1 / number2);
                } else {
                    inp.value = "Error";
                }
                break;
        }
        currentInput = "";
    }
}

function clearinput() {
    console.log("hii");
    inp.value = ""; 
    currentInput = "";
    operator = "";
    number1 = "";
    number2 = "";
}
