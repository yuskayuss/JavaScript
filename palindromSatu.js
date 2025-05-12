function isPalindromeNumber(num) {
  const str = num.toString();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindromeNumber(121));
console.log(isPalindromeNumber(123));
