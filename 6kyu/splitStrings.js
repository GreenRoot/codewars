// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// 	Examples:
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']


const solution = str => {
	let temp = str.split('');
	let result = [];
	let counter = Math.floor(str.length/2);
	for (let i = 0; i < counter; i++) {
		result.push(`${temp.shift()}${temp.shift()}`)
	}
	if (str.length % 2 !== 0) {
		result.push(`${temp.shift()}_`)
	}
	return result
}

console.log(solution('abcdef'))
