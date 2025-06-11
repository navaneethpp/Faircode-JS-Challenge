// We're building a football betting app (soccer for my American friends �)!

// Suppose we get data from a web service about a certain game ('game' variable on

// next page). In this challenge we're gonna work with that data.

// Your tasks:

// 1. Create one player array for each team (variables 'players1' and

// 'players2')

// 2. The first player in any player array is the goalkeeper and the others are field

// players. For Bayern Munich (team 1) create one variable ('gk') with the

// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10

// field players

// 3. Create an array 'allPlayers' containing all players of both teams (22

// players)

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a

// new array ('players1Final') containing all the original team1 players plus

// 'Thiago', 'Coutinho' and 'Perisic'

// 5. Based on the game.odds object, create one variable for each odd (called

// 'team1', 'draw' and 'team2')

// 6. Write a function ('printGoals') that receives an arbitrary number of player

// names (not an array) and prints each of them to the console, along with the

// number of goals that were scored in total (number of player names passed in)

// 7. The team with the lower odd is more likely to win. Print to the console which

// team is more likely to win, without using an if/else statement or the ternary

// operator.

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.

// Then, call the function again with players from game.scored

"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// --- Task 1 ---
console.log("--- Task 1: Player Arrays ---");
const [players1, players2] = game.players;
console.log("Team 1 Players:", players1);
console.log("Team 2 Players:", players2);
console.log("\n");

// --- Task 2 ---
console.log("--- Task 2: Goalkeeper and Field Players ---");
const [gk, ...fieldPlayers] = players1;
console.log("Goalkeeper (Team 1):", gk);
console.log("Field Players (Team 1):", fieldPlayers);
console.log("\n");

// --- Task 3 ---
console.log("--- Task 3: All Players ---");
const allPlayers = [...players1, ...players2];
console.log("All Players:", allPlayers);
console.log("\n");

// --- Task 4 ---
console.log("--- Task 4: Final Team Roster (with subs) ---");
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log("Final Team 1 Players:", players1Final);
console.log("\n");

// --- Task 5 ---
console.log("--- Task 5: Betting Odds ---");
const { team1, x: draw, team2 } = game.odds;
console.log("Team 1 Odd:", team1);
console.log("Draw Odd:", draw);
console.log("Team 2 Odd:", team2);
console.log("\n");

// --- Task 6 ---
console.log("--- Task 6: Print Goals Function ---");
const printGoals = function (...playerNames) {
  console.log(`A total of ${playerNames.length} goals were scored.`);
  console.log(`Scorers: ${playerNames.join(", ")}.`);
};

// Test Case 1 for printGoals
console.log("Test Case 1:");
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
console.log("---");

// Test Case 2 for printGoals: Using the spread syntax to pass elements from an array as individual arguments.
console.log("Test Case 2 (from game.scored):");
printGoals(...game.scored);
console.log("\n");

// --- Task 7: Determine the more likely winner without if/else or ternary ---
console.log("--- Task 7: Likely Winner ---");
team1 < team2 &&
  console.log("Based on the odds, Team 1 is more likely to win.");
team2 < team1 &&
  console.log("Based on the odds, Team 2 is more likely to win.");
