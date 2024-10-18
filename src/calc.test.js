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
it('Test for subtraction', () => {
    expect(calc().subtract(4,5)).toEqual(1);
})
it('Test for multiplication', () => {
    expect(calc().multiply(4, 5)).toEqual(20);
})
it('Test for division', () => {
    expect(calc().divide(4, 5)).toEqual(0.8);
})