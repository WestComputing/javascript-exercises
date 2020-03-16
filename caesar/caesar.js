const caesar = (text, rotate) => text.split('').map(char => {

      const alphaSize = 26;
      let code = char.charCodeAt(0);
      let cipher = code + (rotate % alphaSize);

      if (code > 64 && code < 91) {
        if (cipher > 90) cipher -= alphaSize;
        if (cipher < 65) cipher += alphaSize;
        char = String.fromCharCode(cipher);
      } else if (code > 96 && code < 123) {
        if (cipher > 122) cipher -= alphaSize;
        if (cipher < 97) cipher += alphaSize;
        char = String.fromCharCode(cipher);
      }

      return char;

    }).join('');

module.exports = caesar
