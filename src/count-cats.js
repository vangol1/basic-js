const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let numberOfCats = 0
  backyard.forEach(subArray => {
    subArray.forEach(element => {
      if (element === '^^'){
        numberOfCats++
      }
    });
  });
  return numberOfCats
};
