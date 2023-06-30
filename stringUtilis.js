function stringLength(string) {
  const length = string.length;
  if (length === 0) {
    throw new Error("String must have at least 1 character.");
  } else if (length > 10) {
    throw new Error("String cannot exceed 10 characters.");
  }
  return length;
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  stringLength,
  reverseString,
  capitalize,
};
