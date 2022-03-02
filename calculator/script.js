const operators = ["+", "-", "*", "/"];

// parses full expression (e.g. 12 + 30 / 5 - 1)

// RIGHT NOW evaluates in consequence, no precedence

function parseExpression(expression) {
    while(true) {
        let containsOperator = expression.split("").some((value) =>
            operators.includes(value)
        );
        if(!containsOperator) {
            break;
        }

        let isSecondOperator = false;
        for (let i = 0; i < expression.length; i++) {
            let element = expression[i];

            // Check if its the second operator then pull out the expression before that
            if(operators.includes(element)) {
                if(isSecondOperator) {
                    let singleExpression = expression.slice(0, i);
                    let result = operate(singleExpression);
                    expression = expression.replace(singleExpression, result);
                    break;
                }
                isSecondOperator = true;
            }

            // It its the end, theres no second operator
            else if(i == expression.length-1) {
                let result = operate(expression);
                expression = result.toString();
            }
        }

        console.log(expression);
    }
}

// evaluates individual expressions (e.g. 12 + 30)
function operate(expression) {
    let operator = "";
    let first = 0;
    let second = 0;

    // Split elements at operator
    for (let i = 0; i < expression.length; i++) {
        let element = expression[i];

        if(operators.includes(element)) {
            first = Number(expression.slice(0, i))
            second = Number(expression.slice(i+1));

            operator = element;
            break;
        }
    }

    // Evaluate the expression
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

    return result;
}

parseExpression("12/2+3*2/2/3");