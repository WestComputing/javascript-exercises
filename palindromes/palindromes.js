const palindromes = text => (t = [...text.matchAll(/\w/g)].join('').toLowerCase()) === t.split('').reverse().join('');

module.exports = palindromes
