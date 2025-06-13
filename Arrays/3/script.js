const calcAverageHumanAge = (dogAges) =>
  dogAges
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const average1 = calcAverageHumanAge(data1);
const average2 = calcAverageHumanAge(data2);

console.log(average1);
console.log(average2);
