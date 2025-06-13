"use strict";

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const promptMessage = `${this.question}\n${this.options.join(
      "\n"
    )}\n(Write option number)`;
    const answer = Number(prompt(promptMessage));

    if (
      typeof answer === "number" &&
      answer >= 0 &&
      answer < this.options.length
    ) {
      this.answers[answer]++;
      this.displayResults();
      this.displayResults("string");
    } else {
      alert("Invalid input! Please enter a number between 0 and 3.");
    }
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  ?.addEventListener("click", poll.registerNewAnswer.bind(poll));

console.log("--- BONUS ---");
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

console.log("--- Data 1 ---");
poll.displayResults.call({ answers: data1 }, "string"); // 'string' type
poll.displayResults.call({ answers: data1 }); // 'array' type (default)

console.log("--- Data 2 ---");
poll.displayResults.call({ answers: data2 }, "string");
poll.displayResults.call({ answers: data2 });
