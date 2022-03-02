const operators = ["+", "-", "*", "/"];

// parses full expression (e.g. 12 + 30 / 5 - 1)
function parseExpression(expression) {

}

// evaluates individual expressions (e.g. 12 + 30)
function operate(expression) {
    let operator = "";
    let first = 0;
    let second = 0;

    for (let i = 0; i < expression.length; i++) {
        let element = expression[i];

        if(operators.includes(element)) {
            first = Number(expression.slice(0, i))
            second = Number(expression.slice(i+1));

            operator = element;
            break;
        }
    }

    let result = 0;
    switch(operator) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            break;
        case "/":
            if(second != 0) {
                result = first / second;
            }
            break;
    }

    console.log(result);
}

operate("12+30");
operate("1/0");
operate("12.5*10.5");