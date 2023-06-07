const add = function(num1,num2) {
  return num1+num2;
	
};

const subtract = function(num1,num2) {
	return num1-num2;
	
};

const sum = function(a) {
  let sum=0;
  for(let i=0;i<a.length;i++){
    sum=sum+a[i];
  }
  return sum;
};
	


const multiply = function(a) {
  let mul=1;
  for(let i=0;i<a.length;i++){
    mul=mul*a[i];
  }
  return mul;

};

const power = function(num1,num2) {
  return Math.pow(num1, num2);
	
};

const factorial = function(n) {
  if (n === 0) 
  return 1;
  
  return n*factorial(n-1);
	
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
