// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes:
// 	All numbers are valid Int32, no need to validate them.
// 	There will always be at least one number in the input string.
// 	Output string must be two numbers separated by a single space, and highest number is first.

const highAndLow = numbers => {
	let sort = numbers.split(' ').sort((a,b) => a - b)
	let result = sort[sort.length-1].split(' ')
	result.push(sort[0])
	return result.join(' ')
}

let numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
console.log(highAndLow(numbers))
