const removeFromArray = function(array, ...args) {
    const newA = [];
  
  array.forEach((i) => {
    
    if (!args.includes(i)) {
      newA.push(i);
    }
  });
  
  return newA;

};

module.exports = removeFromArray;
