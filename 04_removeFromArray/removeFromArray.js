const removeFromArray = function(array,...args) {
    const checkArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            checkArray.push(item);
          });
    return checkArray;

}

// Do not edit below this line
module.exports = removeFromArray;
