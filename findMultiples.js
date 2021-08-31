
function findMultiples(integer, limit) {
	let count = [];
	for (let i = 2; i < limit ; i++) {
		if ((i % integer) === 0) {
			count.push(i)
		}
	}
	return count
}
console.log(findMultiples(5, 100))
