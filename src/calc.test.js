const calc = require('./calc')

it('Test for object return', () => {
    const expected = { x: undefined, y: undefined };
    const received = { x: undefined, y: undefined };
    console.log('Expected:', expected);
    console.log('Received:', received);
    expect(received).toEqual(expected);
})
it('Test for add functionality', () => {
    expect(calc().add(4, 5)).toEqual(9);
})