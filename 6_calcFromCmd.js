if(process.argv.length == 2)
    console.log("No parameters passed!");
else {

    const sum = (num1, num2) => num1 + num2;
    const sub = (num1, num2) => num1 - num2;
    const mul = (num1, num2) => num1 * num2;
    const div = (num1, num2) => num1 / num2;

    const num1 = parseFloat(process.argv[2]);
    const operator = process.argv[3];
    const num2 = parseFloat(process.argv[4]);

    if (operator === '+') 
        console.log(sum(num1, num2));
    else if (operator === '-')
        console.log(sub(num1, num2));
    else if (operator === '*')
        console.log(mul(num1, num2));
    else if (operator === '/')
        console.log(div(num1, num2));
    else
        console.log(`Invalid Operator!`);
}