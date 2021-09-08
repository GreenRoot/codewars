// Input:
// 	a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
// a boolean true if all rotations of strng are included in arr (C returns 1)
// false otherwise (C returns 0)
// Examples:
// 	contain_all_rots(
// 		"bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
// contain_all_rots(
// 	"Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// 	Though not correct in a mathematical sense
// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true

const containAllRots = (str, arr) => {
	let result = true
	if (str !== '') {
		let rot = [];
		for (let i = 0; i < str.length; i++) {
			str = str.split('')
			str[str.length] = str[0]
			str.shift()
			str = str.join('')
			rot.push(str)
		}
		for (let i = 0; i < str.length; i++) {
			if (arr.indexOf(rot[i]) === -1) result = false
		}
	}
	return result
}
console.log(containAllRots('', ['abcd','bcda','cdab','dabc']))
