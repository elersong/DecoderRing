let substitution = require('../src/substitution');
let expect = require('chai').expect;

const defaultInput = "thinkful thinkful";
const differentCase = "ThInKFuL thINKfUL";
const cypherKey = "xoyqmcgrukswaflnthdjpzibev"

describe("#substitution()", () => {
    
    it('should maintain positions of all spaces', () => {
        let actual = substitution(defaultInput, cypherKey);
        let expected = "jrufscpw jrufscpw";
        expect(actual).to.eql(expected);
    });

    it('should output a string', () => {
        let actual = substitution(defaultInput, cypherKey);
        expect(actual).to.be.a("string");
    });
    
    it('should not be case-sensitive', () => {
        let actual = substitution(differentCase, cypherKey);
        let expected = "jrufscpw jrufscpw";
        expect(actual).to.eql(expected);
    });

    it('should return false if alphabet is not exactly 26 chars long', () => {
        let actual = substitution(defaultInput, "abcde");
        expect(actual).to.be.false;
    });

    it('should return false if each alphabet char isn\'t unique', () => {
        let actual = substitution(defaultInput, "abcdefghijklmnoooostuvwxyz");
        expect(actual).to.be.false;
    });

    it('should decode an input string when "encode" is false', () => {
        let expected = "this is only a test";
        let actual = substitution("jrud ud lfwe x jmdj", cypherKey, false);
        expect(actual).to.eql(expected);
    })

})