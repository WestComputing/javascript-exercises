const sumAll = function(start, stop) {

  if ([...arguments].every(e => typeof e === 'number' && e >= 0)) {

    let sum = 0;
    for (let n = Math.min(...arguments); n <= Math.max(...arguments); n++) {
      sum += n;
    }
    return sum;

  } else {

    return "ERROR";

  }

}

module.exports = sumAll
