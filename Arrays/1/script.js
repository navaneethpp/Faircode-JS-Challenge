"use strict";

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);

  const allDogs = [...dogsJuliaCorrected, ...dogsKate];
  console.log("Combined Dog Ages:", allDogs);

  allDogs.forEach(function (age, i) {
    const dogNumber = i + 1;
    if (age >= 3) {
      console.log(
        `Dog number ${dogNumber} is an adult, and is ${age} years old`
      );
    } else {
      console.log(`Dog number ${dogNumber} is still a puppy 🐶`);
    }
  });
};

// --- Test Data 1 ---
console.log("--- TEST DATA 1 ---");
const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];
checkDogs(juliaData1, kateData1);

// --- Test Data 2 ---
console.log("\n--- TEST DATA 2 ---");
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];
checkDogs(juliaData2, kateData2);
