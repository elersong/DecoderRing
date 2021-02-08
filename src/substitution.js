// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  // global reference alphabet
  const alpha = "abcdefghijklmnopqrstuvwxyz".split('');
  
  // test if string contains any duplicate chars
  function isUniq(str) {
    let letters = {};
    str.split('').forEach(char => {
      if (letters[char]) {
        letters[char] = false;
      } else {
        letters[char] = true;
      }
    });

    // If the letters object has any false values, there's one or more duplicates
    return !Object.values(letters).includes(false);
  }

  function substitution(input, alphabet, encode = true) {
    // short circuit 
    if (!alphabet || !isUniq(alphabet) || alphabet.length != 26) return false;

    // create cypherKey codex
    const codex = alphabet.split('');

    // standardize the input and break it apart
    let inputSplit = input.toLowerCase().split('');

    let returnString = '';

    if (encode) {
      // hide the message

      inputSplit.forEach(el => {
        if (alpha.includes(el)) {
          // lookup the cypher char and add it
          returnString += codex[alpha.indexOf(el)];
        } else {
          // retain any non alphabet characters
          returnString += el;
        }
      });

      return returnString;

    } else {
      // begin decode
      
      inputSplit.forEach(el => {
        if (codex.includes(el)) {
          // lookup the cypher char and add it
          returnString += alpha[codex.indexOf(el)];
        } else {
          // retain any non alphabet characters
          returnString += el;
        }
      });

      return returnString;
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
