const capitalize = require('./capitalize');


it('Capitalize first letter', () => {
    expect(capitalize('Chris')).toBe('Chris');
})
it('Capitalize first letter example 2', () => {
    expect(capitalize('C')).toBe('C');
})
