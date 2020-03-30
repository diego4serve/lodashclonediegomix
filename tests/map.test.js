const map = require('../lib/map')

test('Double elements of array of numbers', () => {
    expect(map([0,1,2], (n) => {return n * n})).toStrictEqual([0,1,4])
})

test('Test not array returns empty array', () => {
    expect(map('hello', (n) => {return n * n})).toStrictEqual([])
})