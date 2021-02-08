// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // this is the master index for coding and decoding
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const codex = alpha.map((el, idx) => { return [el, idx] } );

  function caesar(input, shift, encode = true) {
    // short circuit in unfavorable conditions
    if (shift == undefined || shift == 0 || shift > 25 || shift < -25) return false;

    // do the same thing backward, when decoding
    if (!encode) {shift *= -1;}

    // split the input into individual chars after standardizing
    input = input.toLowerCase().split("");

    let result = input.map( (char, idx) => {
      // is this a letter or a non-letter character?
      if (alpha.indexOf(char) >= 0) {
        // look up current letter index, then add the shift amount to it
        let letterIndex = alpha.indexOf(char) + shift;
        if (letterIndex > 25) {
          letterIndex = (letterIndex % 25)-1;
        }
        if (letterIndex < 0) {
          letterIndex += 26;
        }
        // return the letter matching the new shifted letter index
        return codex.find(pair => pair[1] == letterIndex)[0]
      }
      return char;
    })

    return result.join('')
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
