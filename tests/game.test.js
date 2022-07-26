const {compare, getNumber, randomPrice} = require('../src/prix')


describe('COMPARE FUNCTION:', () => {
    test('returns higher only when needed', () => {
        expect(compare(5,1)).toEqual("+")
        expect(compare(5,10)).not.toEqual("+")
        expect(compare(5,5)).not.toEqual("+")
    })
    test('returns lower only when needed', () => {
        expect(compare(5,1)).not.toEqual("-")
        expect(compare(5,10)).toEqual("-")
        expect(compare(5,5)).not.toEqual("-")
    })
    test('returns equal only when needed', () => {
        expect(compare(5,1)).not.toEqual("=")
        expect(compare(5,10)).not.toEqual("=")
        expect(compare(5,5)).toEqual("=")
    })

})

describe('RANDOM PRICE:', () => {
    test('random number within range', () => {
        expect(randomPrice(50)).toBeGreaterThan(0)
        expect(randomPrice(50)).not.toBeGreaterThan(50)

    })
})