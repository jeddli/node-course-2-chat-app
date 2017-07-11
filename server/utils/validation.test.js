const expect = require('expect');

// import isRealString
var {isRealString} = require('./validation');

// isRealString
describe('IsRealString', () => {    
    it('should reject non-string value', () => {
        var param = 123;

        expect(isRealString(param)).toBe(false);
    });
        
    // should reject string with only spaces
    it('should reject string with only spaces', () => {
        var param = "   ";

        expect(isRealString(param)).toBe(false);
    });

    // should allow string with non-space character
    it('should allow string with non-space character', () => {
        var param = "XX";

        expect(isRealString(param)).toBe(true);
    });
});
    