// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

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

// Task 1
console.log("--- Task 1: Player Arrays ---");
const [players1, players2] = game.players;
console.log("Team 1 Players:", players1);
console.log("Team 2 Players:", players2);
console.log("\n");

// Task 2
console.log("--- Task 2: Goalkeeper and Field Players ---");
const [gk, ...fieldPlayers] = players1;
console.log("Goalkeeper (Team 1):", gk);
console.log("Field Players (Team 1):", fieldPlayers);
console.log("\n");

// Task 3
console.log("--- Task 3: All Players ---");
const allPlayers = [...players1, ...players2];
console.log("All Players:", allPlayers);
console.log("\n");

// Task 4
console.log("--- Task 4: Final Team Roster (with subs) ---");
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log("Final Team 1 Players:", players1Final);
console.log("\n");

// Task 5
console.log("--- Task 5: Betting Odds ---");
const { team1, x: draw, team2 } = game.odds;
console.log("Team 1 Odd:", team1);
console.log("Draw Odd:", draw);
console.log("Team 2 Odd:", team2);
console.log("\n");

// Task 6
console.log("--- Task 6: Print Goals Function ---");
const printGoals = function (...playerNames) {
  console.log(`A total of ${playerNames.length} goals were scored.`);
  console.log(`Scorers: ${playerNames.join(", ")}.`);
};
console.log("Test Case 1:");
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
console.log("Test Case 2:");
printGoals(...game.scored);
console.log("\n");

// Task 7
console.log("--- Task 7: Likely Winner ---");
team1 < team2 &&
  console.log("Based on the odds, Team 1 is more likely to win.");
team2 < team1 &&
  console.log("Based on the odds, Team 2 is more likely to win.");
console.log("\n");

// Task 8
console.log("--- Task 8: Scorers with Goal Numbers ---");
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});
console.log("\n");

// Task 9
console.log("--- Task 9: Average Odd ---");
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(`Average odd: ${average.toFixed(2)}`);
console.log("\n");

// Task 10
console.log("--- Task 10: Formatted Odds ---");
for (const [key, value] of Object.entries(game.odds)) {
  const teamStr = key === "x" ? "draw" : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
}
console.log("\n");

// Bonus Task
console.log("--- Bonus Task: Scorers Object ---");
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
