const repeatString = function (string, repeat) {

  if (!repeat) return '';
  if (repeat < 0) return "ERROR";
  return Array(repeat).fill(string).join('');

}

module.exports = repeatString
