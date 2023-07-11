const validateValue = require('./validateValue');

describe('validateValue', ()=>{
    test('True value', ()=>{
        expect(validateValue(50)).toBe(true);
    })
    test("Less then correct value", ()=>{
        expect(validateValue(-12)).toBe(false);
    })
    test('More then correct value', ()=>{
        expect(validateValue(112)).toBe(false);
    })
    test('Lower bound', ()=>{
        expect(validateValue(0)).toBe(true);
    })
    test('Higher bound', ()=>{
        expect(validateValue(100)).toBe(true);
    })
})