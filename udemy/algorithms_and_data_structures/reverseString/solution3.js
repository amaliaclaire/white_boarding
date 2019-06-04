









const reverse = (str) => {
  let reversed = ''

  for (let character of str) {
    reversed = character + reversed
  }
  return reversed

}

console.log(reverse('sam sparks'))
//
