let randValues = ["Банан", 3, "Апельсин", 2, "Вишня"];

randValues = randValues.sort();
console.log(randValues);
// ----------------------------
randValues = randValues.sort(function(a, b) {
  return a - b;
});
console.log(randValues);
