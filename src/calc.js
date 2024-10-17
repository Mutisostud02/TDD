function calc() {
    const add = (x, y) => x + y;
    const subtract = (x, y) => {
        if (x > y) {
            return x - y;
        }
        if (y > x) {
            return y - x;
        }
    }
    const multiply = (x, y) => x * y;
    const divide = (x, y) => x / y;
    return {add, subtract, multiply, divide};
}

module.exports = calc;