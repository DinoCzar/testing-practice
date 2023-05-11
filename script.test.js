const { capitalize, reverseString } = require('./script');

test('capitalize first letter', () => {
	expect(capitalize('string')).toBe('String');
});

test('reverse string', () => {
	expect(reverseString('hello')).toBe('olleh');
});
