const capitalize = require('./capitalize');


it('Capitalize first letter', () => {
    expect(capitalize('Chris')).toBe('Chris');
})
it('Capitalize first letter example 2', () => {
    expect(capitalize('c')).toBe('C');
})
it('Dont capitalize if not a letter', () => {
    expect(capitalize('45')).toBe(undefined)
})
it('Dont capitalize if null', () => {
    expect(capitalize('')).toBe(undefined)
})