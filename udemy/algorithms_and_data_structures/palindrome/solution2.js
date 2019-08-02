//
// const palindrome = (str) => {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1]
//   })
// }



const palindrome = (str) => {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  });
}




// console.log(palindrome('racecar'));
console.log(palindrome('bob'));
// console.log(palindrome('dancer'));








// .every array helper - every function is used to do a boolean check on every element within an array
// palindrome - compare first and last value and move in
// turn our string into array through the .split() method
//advance array helper.
