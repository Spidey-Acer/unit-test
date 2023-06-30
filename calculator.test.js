const Calculator = require("./calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    test("adds two numbers correctly", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test("returns a negative result when subtracting a negative number", () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test("returns zero when adding zero", () => {
      expect(calculator.add(5, 0)).toBe(5);
    });
  });

  describe("subtract", () => {
    test("subtracts two numbers correctly", () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test("returns a negative result when subtracting a positive number", () => {
      expect(calculator.subtract(2, 5)).toBe(-3);
    });

    test("returns zero when subtracting zero", () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });
  });

  describe("divide", () => {
    test("divides two numbers correctly", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test("throws an error when dividing by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero.");
    });

    test("returns zero when dividing zero", () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });
  });

  describe("multiply", () => {
    test("multiplies two numbers correctly", () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test("returns zero when multiplying by zero", () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test("returns a negative result when multiplying two negative numbers", () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });
});
