const fibonacci = n => {
  if (typeof n === 'string') n = parseInt(n);
  if (n < 1) return "OOPS";
  if (n < 3) return 1;
  let previousFibonacci = 1;
  let currentFibonacci = 1;
  for (let i = 3; i <= n; i++) {
    [currentFibonacci, previousFibonacci] = [previousFibonacci + currentFibonacci, currentFibonacci];
  }
  return currentFibonacci;
}

module.exports = fibonacci
