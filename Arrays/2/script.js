const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map((dogAge) => {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });

  const adultHumanAges = humanAges.filter((age) => age >= 18);

  if (adultHumanAges.length === 0) {
    return 0;
  }

  const totalAdultAge = adultHumanAges.reduce((acc, age) => acc + age, 0);
  const averageAdultAge = totalAdultAge / adultHumanAges.length;

  return averageAdultAge;
};

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const average1 = calcAverageHumanAge(data1);
const average2 = calcAverageHumanAge(data2);

console.log(average1);
console.log(average2);
