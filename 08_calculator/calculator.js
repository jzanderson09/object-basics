const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((total, currentNum) => total + currentNum, 0);
};

const multiply = function(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 * num2;
  }
  else {
    let total = 1;
    if (typeof num1 === 'object') {
      num1.forEach(number => total *= number);
    }
    else if (typeof num2 === 'object') {
      num2.forEach(number => total *= number);
    }
    return total;
  }
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  let total = 1;
  for (let i = num; i >= 1; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
