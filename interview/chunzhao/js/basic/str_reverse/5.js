function reverseString(str) {
  let reversed = '';
  for(const char of str){
    reversed = char + reversed
  }
  return reversed
}