function calc() {
    const add = (x, y) => x + y;
    const subtract = (x, y) => {
        if (y > x) {
            return y - x;
        }
        return x - y;
    }
    const multiply = (x, y) => x * y;
    const divide = (x, y) => x / y;
    return {add, subtract, multiply, divide};
}

module.exports = calc;