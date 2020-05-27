const testParameters = (m, n) => {
    if (typeof m !== "number" || typeof n !== "number") {
        console.error("Invalid parameters");
        throw new Error("Invalid Parameters");
    }
}

const calculate = (m, n, x) => {
    if(x == '+')
        return sum(m,n);
    else if(x == '-')
        return sub(m,n);
    else if(x == '*')
        return mul(m,n);
    else if(x == '/')
        return div(m,n);
    else {
        return "Invalid";
    }
}

const sum = (m,n) => {
    testParameters(m, n);
    return m+n;
}
const sub = (m,n) => {
    testParameters(m, n);
    return m-n;
}
const mul = (m,n) => {
    testParameters(m, n);
    return m*n;
}
const div = (m,n) => {
    testParameters(m, n);
    return m/n;
}

// console.log(calculate(1, 2, '*'));  // 2
// console.log(calculate(0.1, 0.2, '+'));  // 0.3
// console.log(calculate(1, 2, '-'));  // -1
// console.log(calculate(-1, -2, '/'));    // 0.5
// console.log(calculate(0, 0, 'x'));  // "Invalid"
// console.log(calculate(1, 0, '/'));  // Infinity

module.exports = {calculate,
    sum,
    sub,
    mul,
    div
};