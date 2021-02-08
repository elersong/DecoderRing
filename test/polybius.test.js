let polybius = require('../src/polybius');
let expect = require('chai').expect;

const defaultInput = "thinkful thinkful";
const differentCase = "ThInKFuL thINKfUL";
const noSpaces = "thinkful"

describe("#polybius()", () => {
    
    it('should maintain positions of all spaces', () => {
        let actual = polybius(defaultInput);
        let expected = "4432423352125413 4432423352125413"
        expect(actual).to.eql(expected);
    });

    it('should output a string', () => {
        let actual = polybius(defaultInput);
        expect(actual).to.be.a("string");
    });
    
    it('should output an even number of characters', () => {
        let actual = polybius(noSpaces).length % 2;
        expect(actual).to.equal(0);
    });
    
    it('should output the same characters for letters "i" and "j"', () => {
        let actual = polybius("i j");
        let expected = "42 42";
        expect(actual).to.eql(expected);
    });

    it('should decode input string when "encode" is false', () => {
        let expected = "thijs ijs a test";
        let actual = polybius("44324234 4234 11 44513444", false);
        expect(actual).to.eql(expected);
    })
    
    it('should maintain positions of all spaces', () => {
        let actual = polybius("i  j  i j");
        let expected = "42  42  42 42"
        expect(actual).to.eql(expected);
    });
    
    it('should not be case-sensitive', () => {
        let actual = polybius(differentCase);
        let expected = "4432423352125413 4432423352125413"
        expect(actual).to.eql(expected);
    });

})