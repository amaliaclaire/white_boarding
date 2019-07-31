const reversed = (str) => {
  let reversed = ''

  for(character of str) {
    reversed = character + reversed
  }
  return reversed
}

console.log(reversed('hello world'));
