// A humble String
// const str = 'hello world';

// Strings have a lot in common with Arrays
// console.log(str[1]);
// console.log(str.length);
// console.log(str.slice(3));
// console.log(str.split(''));

// console.log('--- upperFirst ---');
// The function below needs to uppercase the
// first letter of the input string

// -----------------------------------------------------------------------------------------------------------------------------------

// Challenge 1

function upperFirst() {
	const replacement = str.charAt(0).toUpperCase();
	const strdone = replacement + str.substr(1);
	return strdone;
	//
}

String.prototype.cap = function () {
	const replacement = this.charAt(0).toUpperCase();
	const strdone = replacement + this.substr(1);
	return strdone;
	//
};

// console.log(upperFirst(foo))
// console.log('foo'.cap());

// -----------------------------------------------------------------------------------------------------------------------------------

// Challenge 2

function allCaps(str) {
	// var cappedWord = '';
	// for (i = 0; i < str; i++) {
	// 	var temp = str.toUpperCase(i);
	// 	cappedWord.concat(temp);
	// }
	// return cappedWord;

	const uppered = str.toUpperCase();
	return uppered;
}

// console.log(allCaps('foobar'));

// -----------------------------------------------------------------------------------------------------------------------------------

// Challenge 3

function capitalizeWords(str) {
	return str.replace(/\W+(.)/g, function (match, chr) {
		const final = ' ' + chr.cap();
		return final;
	});
}

// console.log(capitalizeWords('hello lol'));

// -----------------------------------------------------------------------------------------------------------------------------------

// Challenge 4

// function hasSpace(arr) {
// 	result = arr.includes('');
// 	return result;
// }

function removeExtraSpaces(str) {
	// var strTrimmed = str.trim();
	// var arrayStrTrimmed = strTrimmed.split(' ');
	// console.log(arrayStrTrimmed);
	// var finished = arrayStrTrimmed.filter(hasSpace);

	// const index = arrayStrTrimmed.indexOf('');
	// if (index > -1) {
	// 	arrayStrTrimmed.splice(index, 1);
	// }

	// for (i = 0; i < arrayStrTrimmed; i++) {
	// 	if (i.includes('')) {
	// 		i.pop();
	// 	}
	// }
	// return arrayStrTrimmed.join(' ');
	const arrayStrTrimmedDone = str.replace(/\s+/g, ' ').trim().trim();
	return arrayStrTrimmedDone;
}

console.log(removeExtraSpaces('   Hello    world!   '));

// -----------------------------------------------------------------------------------------------------------------------------------

// Challenge 5

function kebabCase(str, sep = '-') {
	return str.replace(/\W+()/g, (match, chr) => {
		return '-';
	});
}

// console.log(kebabCase('hello world foo bar'));

// -----------------------------------------------------------------------------------------------------------------------------------

// Challenge 6

function snakeCase(str, sep = '-') {
	return str.replace(/\W+()/g, (match, chr) => {
		return '_';
	});
}

// console.log(snakeCase('hello world foo bar'));

// -----------------------------------------------------------------------------------------------------------------------------------

// Challenge 7

function camelCase(str) {
	return str.replace(/\W+(.)/g, (match, chr) => {
		return chr.toUpperCase();
	});
}

// console.log(camelCase('hell foo bar world!'));

// -----------------------------------------------------------------------------------------------------------------------------------

// Challenge 8

function shift(str) {
	// newstr = '';
	// for (i = 0; i > str; i++) {
	// 	if (i == 0) {
	// 		console.log('is 0');
	// 	} else if (i != 0) {
	// 		newstr += i;
	// 	} else {
	// 		console.log('error');
	// 	}
	// }
	// return newstr;

	const temp = str[0];
	let newStr = str.slice(1);
	newStr += temp;
	return newStr;
}

// console.log(shift('hello world'));

// -----------------------------------------------------------------------------------------------------------------------------------

// Challenge 9

function makeHashTag(str) {
	const noSpc = str.replace(/\W+/g, '').trim();
	const cpNoSpc = '#' + noSpc.cap();
	return cpNoSpc;
}

// console.log(makeHashTag('hello world!'));

// -----------------------------------------------------------------------------------------------------------------------------------

// Challenge 10

function isEmpty(str) {
	const nothing = str.replace(/\W+/g, '').trim();
	if (nothing === '') {
		return true;
	} else {
		return false;
	}
}

// console.log(isEmpty('     '));

// -----------------------------------------------------------------------------------------------------------------------------------

module.exports.isEmpty = isEmpty;
module.exports.makeHashTag = makeHashTag;
module.exports.shift = shift;
module.exports.camelCase = camelCase;
module.exports.snakeCase = snakeCase;
module.exports.kebabCase = kebabCase;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.capitalizeWords = capitalizeWords;
module.exports.allCaps = allCaps;
module.exports.upperFirst = upperFirst;
