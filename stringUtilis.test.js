const stringUtils = require("./stringUtilis");

test("stringLength returns the correct character count", () => {
  expect(stringUtils.stringLength("Hello")).toBe(5);
});

test("stringLength throws an error if string is empty", () => {
  expect(() => stringUtils.stringLength("")).toThrow(
    "String must have at least 1 character."
  );
});

test("stringLength throws an error if string exceeds 10 characters", () => {
  expect(() => stringUtils.stringLength("This is too long")).toThrow(
    "String cannot exceed 10 characters."
  );
});

test("reverseString returns the reversed string", () => {
  expect(stringUtils.reverseString("Hello")).toBe("olleH");
});

test("capitalize capitalizes the first character of a string", () => {
  expect(stringUtils.capitalize("hello")).toBe("Hello");
});
