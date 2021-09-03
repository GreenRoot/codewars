// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
	let result;
	result = Math.floor(dadYearsOld - sonYearsOld * 2)
	if (result <= 0) {
		result = Math.floor(sonYearsOld * 2 - dadYearsOld)
	}
	return result
}

console.log(twiceAsOld(55, 30))
