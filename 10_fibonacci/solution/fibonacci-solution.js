const fibonacci = function(num) {
  if(num<0){
    return "OOPS"
  }
  if(num<2){
      return parseInt(num);
  }
  return parseInt(fibonacci(num-1))+parseInt(fibonacci(num-2))

};

// Do not edit below this line
module.exports = fibonacci;
