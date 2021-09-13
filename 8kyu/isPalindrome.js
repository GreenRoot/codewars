// Write function isPalindrom that checks if a given string (case insensitive) is a palindrom.
//

const isPalindrome = x => x.split('').reverse().join('').toLowerCase() === x.toLowerCase()

console.log(isPalindrome('adbba'))
