const palindrome = (str) => {
  const reversed = str.split('').reverse().join('')
  return str === reversed
}


// console.log(palindrome('racecar'));
// console.log(palindrome('bob'));
// console.log(palindrome('dancer'));
console.log(palindrome('abba'));
// console.log('abcdefg');
