// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // master index for encoding
  const codex = [[],
    [0,'a','b','c','d','e'],
    [0,'f', 'g', 'h','ij','k'],
    [0,'l','m','n','o','p'],
    [0,'q','r','s','t','u'],
    [0,'v','w','x','y','z']
  ];

  function lookupLetters(char) {
    if (char == ' ') return char;
    if (['i','j'].includes(char)) return '42';
    // format [col, row]
    let newVal = [];
    codex.forEach((row, idx) => {
      if (row.includes(char)) {
        newVal.push(row.findIndex(el => el == char)); // search row for column index
        newVal.push(idx); // row index is already given
      }
    })
    return newVal.map(el => String(el)).join('');
  }

  function lookupNumbers(pair) {
    if (pair == ' ') return ' ';

    let [col, row] = pair.map(el => Number(el))
    return codex[row][col];
  }


  function polybius(input, encode = true) {
    // standardize and break into chars
    inputSplit = input.toLowerCase().split('');
    let returnString = "";

    if (encode) {
      // translate into mathspeak

      inputSplit.forEach(char => {
        // get the numbers
        returnString += lookupLetters(char);
      })
      return returnString

    } else {
      // short circuit if odd number of numbers
      if (input.split(" ").join("").length % 2 != 0) return false;

      // now begin to translate back into readable english
      let letterGroups = [];

      // create array that groups letter pairs and preserves spaces
      do {
        let el = inputSplit[0];
        if (el != ' ') {
          letterGroups.push(inputSplit.splice(0,2));
        } else {
          letterGroups.push(' ');
          inputSplit.shift();
        }
      } while (inputSplit.length > 0)

      // lookup corresponding letters and add to the string
      letterGroups.forEach(el => {
        returnString += lookupNumbers(el);
      })

      return returnString;
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
