const operators = ["+", "-", "*", "/"];

// parses full expression (e.g. 12 + 30 / 5 - 1)
function pullExpression(expression) {
    let singleExpression = "";

    // Check for multiply and divide operators first
    if(expression.includes("*") || expression.includes("/")) {
        let precedenceRegex = /[\*\/]/;
        let operatorIndex = expression.search(precedenceRegex);

        // start at operator's index, go down until meet another 
        // operator. Thats out start index
        let startIndex = operatorIndex-1;
        while(!operators.includes(expression[startIndex])) {
            startIndex -= 1;

            // If in the start of expression
            if(startIndex < 0) {
                startIndex = -1;
                break;
            }
        }

        // same thing but going up
        let endIndex = operatorIndex+1;
        while(!operators.includes(expression[endIndex])) {
            endIndex += 1;

            // same check
            if(endIndex > expression.length) {
                endIndex = expression.length;
                break;
            }
        }

        singleExpression = expression.substring(startIndex+1, endIndex);
        console.log(singleExpression);

        return singleExpression;
    }

    let isSecondOperator = false;

    // No multiplies or divides - search in continuous order
    for (let i = 0; i < expression.length; i++) {
        let element = expression[i];

        // Check if its the second operator then pull out the expression before that
        if(operators.includes(element)) {
            if(isSecondOperator) {
                singleExpression = expression.slice(0, i);
                break;
            }
            isSecondOperator = true;
        }

        // It its the end, theres no second operator
        else if(i == expression.length-1) {
            singleExpression = expression;
        }
    }

    return singleExpression;
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

function parseExpression(expression) {
    console.log(expression);

    while(true) {
        let containsOperator = expression.split("").some((value) =>
            operators.includes(value)
        );
        if(!containsOperator) {
            break;
        }

        let singleExpression = pullExpression(expression);
        let result = operate(singleExpression);
        expression = expression.replace(singleExpression, result.toString());

        console.log(expression);
    }
}

parseExpression("30-15/3*5");