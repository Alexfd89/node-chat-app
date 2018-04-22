const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var str = isRealString('');
        expect(str).toBe(false);
    });

    it('should reject string wih only spaces', () => {
        var str = isRealString('   ');
        expect(str).toBe(false);
    });

    it('should allow a string with non-spaces characters', () => {
        var str = isRealString('    User    ');
        expect(str).toBe(true);
    });
});