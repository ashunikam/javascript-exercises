const add = function(num1,num2) {
  return num1+num2;
	
};

const subtract = function(num1,num2) {
	return num1-num2;
	
};

const sum = function(a) {
  return a.reduce((total, current) => total + current, 0);
};
	


const multiply = function(a) {
  return a.length
    ? a.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;

};

const power = function(num1,num2) {
  return Math.pow(num1, num2);
	
};

const factorial = function(n) {
  if (n === 0) return 1;
  
  return factorial(n*(n-1));
	
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
