const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ["Alice", "Bob"],
  },
  {
    weight: 8,
    curFood: 200,
    owners: ["Matilda"],
  },
  {
    weight: 13,
    curFood: 275,
    owners: ["Sarah", "John"],
  },
  {
    weight: 32,
    curFood: 340,
    owners: ["Michael"],
  },
];

dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log("Dogs array with recommendedFood:", dogs);

const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
if (sarahsDog) {
  if (sarahsDog.curFood > sarahsDog.recommendedFood * 1.1) {
    console.log("Sarah's dog is eating too much!");
  } else if (sarahsDog.curFood < sarahsDog.recommendedFood * 0.9) {
    console.log("Sarah's dog is eating too little!");
  } else {
    console.log("Sarah's dog is eating an okay amount!");
  }
} else {
  console.log("Sarah's dog not found.");
}

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap((dog) => dog.owners);

console.log("Owners of dogs eating too much:", ownersEatTooMuch);
console.log("Owners of dogs eating too little:", ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

const anyDogEatingExactly = dogs.some(
  (dog) => dog.curFood === dog.recommendedFood
);
console.log(
  "Any dog eating exactly the recommended amount:",
  anyDogEatingExactly
);

const anyDogEatingOkay = dogs.some(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log("Any dog eating an okay amount of food:", anyDogEatingOkay);

const dogsEatingOkay = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log("Dogs eating an okay amount:", dogsEatingOkay);

const dogsSortedByRecommendedFood = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(
  "Dogs sorted by recommended food portion:",
  dogsSortedByRecommendedFood
);
