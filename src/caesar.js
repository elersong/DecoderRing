// I'm aware that creating my own codex is less efficient than using the unicode
// value for the characters, but I thought it would be easier to read over by
// having a closed reference object in the module. 
// 
// That works until line 31, where the readability breaks down, but by then,
// I'm returning a final value, so it doesn't seem as necessary.

const caesarModule = (function () {
  // this is the master index for coding and decoding
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const codex = alpha.map((char, idx) => { return [char, idx] } );

  function caesar(input, shift, encode = true) {
    // short circuit in unfavorable conditions
    if (shift == undefined || shift == 0 || shift > 25 || shift < -25) return false;

    // do the same thing backward, when decoding
    if (!encode) {shift *= -1;}

    // split the input into individual chars after standardizing
    input = input.toLowerCase().split("");

    let result = input.map( char => {
      // is this a letter or a non-letter character?
      // A negative index means it's not in the codex array.
      if (alpha.indexOf(char) >= 0) {
        // look up current letter index, then add the shift amount to it
        let letterIndex = alpha.indexOf(char) + shift;

        if (letterIndex > 25) letterIndex = letterIndex % 26;
        if (letterIndex < 0 ) letterIndex += 26;

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
