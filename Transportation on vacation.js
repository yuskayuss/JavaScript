function rentalCarCost(d) {
  let diskon = 0;
  if (d >= 7) {
    diskon = 50;
  } else if (d >= 3) {
    diskon = 20;
  }
  return d * 40 - diskon;
}
console.log(rentalCarCost(3));
