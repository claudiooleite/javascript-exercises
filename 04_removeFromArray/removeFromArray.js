const removeFromArray = function(a,...b) {
    const checkArray = [];
    a.forEach((item) => {
        if (!b.includes(item)) {
            checkArray.push(item);
          });
    return checkArray;

}

// Do not edit below this line
module.exports = removeFromArray;
