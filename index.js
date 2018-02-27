const sumInt = (a, b) => {
    return a + b;
};
const substructionInt = (a, b) => {
    return a - b;
};
const divisionInt = (a, b) => {
    return a / b;
};
const multiplicationInt = (a, b) => {
    return a * b;
};
const power = (base, exp) => {
    return base ** exp;
};
const root = (base, exp) => {
    return base ** (1 / exp);
};
const absolute = (a) => {
    if(a < 0) {
        return a * (-1);
    }
    return a;
};
const mod = (a, b) => {
    return a % b;
};
const log = (base, value) => {
    if (value < base) {
        return 0;
    }
    return 1 + log(base, value/base);
};
const flipSign = (a) => {
    return a * (-1);
};
const factorial = (num) => {
    if(num <=1) {
        return 1;
    }

    return factorial(num - 1) * num;
};
const sin = (y) => {
    const x = y % (2 * Math.PI);
    const n = 100;
    let sum = 0;

    for(let i = 0; i < n; i++) {
        // -1 ^ n * x ^ (2 * n + 1)
        let ham = ((-1) ** i) * (x ** ((2 * i) + 1));
        // let ham = Math.pow(-1, i) * Math.pow(x, (2 * i) + 1);
        let fact = factorial((2 * i) + 1);
        sum += ham / fact;
    }
    console.log('m', Math.sin(x));
    console.log('s', sum);
    return sum;
    // return Math.sin(a);
};
const cos = (a) => {
    return Math.cos(a);
};
const percent = (a, b) => {
    return a * b / 100;
};

const integral = (func, a, b, precision) => {

    // func = x^2 + 2x + 1
    // a = 1
    // b = 8
    // precision = 2


};

console.log(sin(Math.PI));
console.log(sin(Math.PI));
