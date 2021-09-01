function ensureQuestion(s) {
	if (s [s.split('').length - 1] === "?")
	return s
	else return s + "?"
}


console.log(ensureQuestion('yes?'))
