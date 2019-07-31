
// give a string, return true if the strue is a palindrom or false if it is not.
// palindromes are strings that form the same word if it is reversed.
// Do include spaces and punctuation in determining if the string is a palindrome

// example: palindrome("abba") === true
// example: palindrome("abcdefg") === false




// look through the length and if the length is an even number immediately send it to false. else go through the second step (aka the loop)



const palindrome = (str) => {
let char = ''
let stringLength = str.length

if (stringLength % 2 == 0) {
  return true
} else {
  return false
}


if(stringLength === false){
  for (let i = 0; i < stringLength[i]; i++) {
    char = stringLength[i]
  }
}

}

palindrome('abcdefg')


























//
