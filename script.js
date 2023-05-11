function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
	return str.split('').reverse().join('');
}

const calculator = {
	add: function (a, b) {
		return a + b;
	},
	subtract: function (a, b) {
		return a - b;
	},
	divide: function (a, b) {
		return a / b;
	},
	multiply: function (a, b) {
		return a * b;
	},
};

function caesarCipher(str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		// Check if the character is a letter
		if (char.match(/[a-z]/i)) {
			let code = str.charCodeAt(i);

			// Shift the character to the next letter of the alphabet
			if (char.match(/[a-y]/i)) {
				code += 1;
			} else if (char.match(/[z]/i)) {
				code -= 25;
			} else if (char.match(/[A-Y]/i)) {
				code += 1;
			} else if (char.match(/[Z]/i)) {
				code -= 25;
			}

			char = String.fromCharCode(code);
		}

		result += char;
	}

	return result;
}

module.exports = {
	capitalize: capitalize,
	reverseString: reverseString,
	calculator: calculator,
	caesarCipher: caesarCipher,
};
