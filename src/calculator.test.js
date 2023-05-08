const calculator = require("./calculator");

test("add 2 + 2 = 4", () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test("subtract 6-3 = 3", () => {
    expect(calculator.subtract(6, 3)).toBe(3);
})

test("divide 10 / 5 = 2", () => {
    expect(calculator.divide(10, 5)).toBe(2);
})

test("multiply 5 * 3 = 15", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
})