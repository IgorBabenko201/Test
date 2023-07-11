const mapArrToString = require('./mapArrToString')

describe('mapArrToString', ()=>{
    test('Correct value', ()=>{
        expect(mapArrToString([1,2,3])).toEqual(['1','2','3'])
    })
    test('Garbage', ()=> {
        expect(mapArrToString([1,2, null, undefined, '12', 7.2, 3])).toEqual(['1','2','3'])
    })
    test('Empty', ()=> {
        expect(mapArrToString([])).toEqual([])
    })
    test('Negation', ()=>{
        expect(mapArrToString([1,2,3])).not.toEqual([1,2,3])
    })
})