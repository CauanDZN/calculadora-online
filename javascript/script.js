function insert(num) {
    if (!isNaN(num) || num === '.') {
        display.value = display.value + num;
    } else {
        display.value = display.value + ' ' + num + ' ';
    }
}

function equal() {
    let exp = display.value;

    if (exp) {
        if (exp.startsWith('-')) {
            exp = '0' + exp;
        }

        const split = exp.split(/(\+|-|\*|\/)/g);

        let result = parseFloat(split[0]);

        for (let i = 1; i < split.length; i += 2) {
            const operator = split[i];
            const operand = parseFloat(split[i + 1]);

            if (isNaN(operand)) {
                alert("Por favor, digite uma expressão válida!");
                return;
            }

            if (operator === '+') {
                result += operand;
            } else if (operator === '-') {
                result -= operand;
            } else if (operator === '*' || operator === 'x' || operator === 'X') {
                result *= operand;
            } else if (operator === '/' || operator === ':' || operator === '÷') {
                if (operand === 0) {
                    alert("Não é possível dividir por zero!");
                    return;
                }
                result /= operand;
            }
        }

        display.value = result;
    }
}


function c() {
    display.value = '';
}

function back() {
    var exp = display.value;
    display.value = exp.substring(0, exp.length-1);
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        equal();
        event.preventDefault();
    }
}
