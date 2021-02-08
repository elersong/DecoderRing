let caesar = require('../src/caesar');
let expect = require('chai').expect;

const defaultInput = "Voila! In view-- a humble vaudvillian villain...";
const differentCase = "voila! in view-- a HUMBLE vaudvillian viLLain...";
const shiftText = "xyz";

describe("#caesar()", () => {

    it('should return false when `shift` is undefined', () => {
        let actual = caesar(defaultInput,undefined,true);
        expect(actual).to.be.false;
    });

    it('should return false when `shift` is 0', () => {
        let actual = caesar(defaultInput,0,true);
        expect(actual).to.be.false;
    });
    
    it('should return false when `shift` is less than -25', () => {
        let actual = caesar(defaultInput,-30,true);
        expect(actual).to.be.false;
    });
    
    it('should return false when `shift` is greater than 25', () => {
        let actual = caesar(defaultInput,30,true);
        expect(actual).to.be.false;
    });
    
    it('should maintain positions of all spaces', () => {
        let actual = caesar(defaultInput,1,true);
        let expected = "wpjmb! jo wjfx-- b ivncmf wbvewjmmjbo wjmmbjo..."
        expect(actual).to.eql(expected);
    });
    
    it('should maintain positions of all non-word characters', () => {
        let actual = caesar(defaultInput,1,true);
        let expected = "wpjmb! jo wjfx-- b ivncmf wbvewjmmjbo wjmmbjo..."
        expect(actual).to.eql(expected);
    });
    
    it('should not be case-sensitive', () => {
        let actual = caesar(differentCase,1,true);
        let expected = "wpjmb! jo wjfx-- b ivncmf wbvewjmmjbo wjmmbjo..."
        expect(actual).to.eql(expected);
    });
    
    it('should cycle positions from the end to beginning of the alphabet', () => {
        let actual = caesar(shiftText,3,true);
        let expected = "abc";
        expect(actual).to.eql(expected);
    });

    it('should decode text when `encode` parameter is false', () => {
        let actual = caesar(shiftText,3,false);
        let expected = "uvw";
        expect(actual).to.eql(expected);
    });

    it('should decode text when `encode` parameter is false', () => {
        let actual = caesar("abc",3,false);
        let expected = "xyz";
        expect(actual).to.eql(expected);
    });

})