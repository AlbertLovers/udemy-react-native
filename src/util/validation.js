const validate = (val, rules, connectedValues) => {
	let isValid = true;

	for(let rule in rules) {
		switch (rule) {
			case 'minLength': isValid = isValid && minLengthValidator(val, rules.minLength); break;
			case 'equalTo': isValid = isValid && equalToValidator(val, connectedValues.equalTo); break;
			case 'isEmail': isValid = isValid && emailValidator(val); break;
			default: isValid = false;
		}
	}

	return isValid;
};

function emailValidator(val) {
	return /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]+$/.test(val);
}

function minLengthValidator(val, length) {
	return val && val.length >= length;
}

function equalToValidator(val1, val2) {
	return val1 === val2;
}

export default validate;