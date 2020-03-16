const removeFromArray = (array, ...elements) => array.filter(e => !elements.includes(e));

module.exports = removeFromArray
