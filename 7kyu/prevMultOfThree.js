// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
// //
// // Return n if the input is already a multiple of three, and return null/nil/None/-1 if no such number exists.
// //
// // 	Examples
// // 1      => null
// // 25     => null
// // 36     => 36
// // 1244   => 12
// // 952406 => 9


const prevMultOfThree = n => {
	let arr = n.toString().split('').map(Number);
	const iteration = arr.length
	let sum = 0;
	console.log(arr.length);
	for (let i = 0; i < iteration; i++) {
		sum = 0;
		for (let j = 0; j < arr.length; j++){
			sum += arr[j]
		}
		if (sum % 3 === 0) return arr.join('')*1
		else if (sum % 3 !== 0) arr.pop()
	}
	return null
}
console.log(prevMultOfThree(1244))

