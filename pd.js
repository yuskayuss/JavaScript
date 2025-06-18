function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === [...str].reverse().join("");
}

console.log(isPalindrome("kata"));
