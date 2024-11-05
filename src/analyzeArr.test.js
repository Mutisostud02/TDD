const analyzeArr = require("./analyzeArr");

it('Returns an same input if array is empty', () => {
    expect(analyzeArr([])).toEqual({})
})

it('Returns an object', () => {
    expect(analyzeArr([1,2,3,4])).toEqual({sum: 10, average: 2.5, min: 1, max: 4, length: 4});

})