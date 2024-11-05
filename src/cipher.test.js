const cipher = require('./cipher');

it('Test for string return', () => {
    expect(cipher('abc', 0)).toBe('abc')
})
it('Test for non shift', () => {
    expect(cipher('abc', '')).toBe('abc')
})
it('Test for string with no letters', () => {
    expect(cipher('123', 2)).toBe('123');
})
it('Test for shift', () => {
    expect(cipher('aBc', 2)).toBe('cDe');
})
it('Test for mixed characters', () => {
    expect(cipher('me & you 100%', 2)).toBe('og & aqw 100%');
})