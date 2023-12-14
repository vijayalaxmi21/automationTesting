const { add } = require('../src/main');

test('adds 2 + 3 + 2 to equal 7', () => {
    expect(add(2, 3 , 2)).toBe(7);
});