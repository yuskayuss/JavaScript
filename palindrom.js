function isPalindrome(text) {
  //bersihkan string hilangkan spasi, ubah ke lower case
  const cleanText = text.replace(/\s+/g, "").toLowerCase();

  //balik string
  const reversed = cleanText.split("").reverse().join("");

  return cleanText === reversed;
}

console.log(isPalindrome("katak"));
console.log(isPalindrome("mobil"));
