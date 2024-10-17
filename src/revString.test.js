const revString = require('./revString')

it('Reject if not a string', () => {
    expect(revString(78)).toBe('Not a string');
})
it('Check if string is empty', () => {
    expect(revString("")).toBe('String is empty');
})
it('Check if a string returns its reverse', () => {
    expect(revString("abc")).toEqual('cba');
});
// it('Check if a string returns an array of characters', () => {
//     expect(revString("abc")).toEqual(['a', 'b', 'c']);
// })
// it('Check if string is reversed',)
