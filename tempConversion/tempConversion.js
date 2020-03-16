const ftoc = f => parseFloat(((f-32)*(5/9)).toFixed(1));

const ctof = c => parseFloat(((9/5)*c+32).toFixed(1));

module.exports = {
  ftoc,
  ctof
}
