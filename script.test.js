const { capitalize, reverseString, calculator } = require('./script');

test('capitalize first letter', () => {
	expect(capitalize('string')).toBe('String');
});

test('reverse string', () => {
	expect(reverseString('hello')).toBe('olleh');
});

test('add', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test('subtract', () => {
    expect(calculator.subtract(8, 3)).toBe(5);
})

test('multiply', () => {
    expect(calculator.multiply(3, 7)).toBe(21);
})

test('divide', () => {
    expect(calculator.divide(12, 4)).toBe(3);
})

