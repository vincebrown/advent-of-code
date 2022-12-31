// The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant Rock Paper Scissors tournament is already in progress.

// Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

// Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.

// The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

// The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

// Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

// For example, suppose you were given the following strategy guide:

// A Y
// B X
// C Z
// This strategy guide predicts and recommends the following:

// In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
// In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
// The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
// In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

// What would your total score be if everything goes exactly according to your strategy guide?

// A & X = rock = 1
// B & Y = paper = 2
// C & Z = scissors = 3
var fs = require('fs');
var input = fs.readFileSync('2022/day-2/day-2-input.txt').toString()

const playsArray = input.split("\n").map(game => game.split(' '));

function calculatePoints(moves) {
  let points = 0;

  const choicePointsLookup = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  const myChoice = moves[1];
  const opponentChoice = moves[0];

  const choicePoints = choicePointsLookup[myChoice];

  points += choicePoints;

  switch (myChoice) {
    case 'X':
      if (opponentChoice === 'A') points += 3;
      if (opponentChoice === 'B') points += 0;
      if (opponentChoice === 'C') points += 6;
      break;
    case 'Y':
      if (opponentChoice === 'B') points += 3;
      if (opponentChoice === 'A') points += 6;
      if (opponentChoice === 'C') points += 0;
      break;
    case 'Z':
      if (opponentChoice === 'C') points += 3;
      if (opponentChoice === 'A') points += 0;
      if (opponentChoice === 'B') points += 6;
      break;
  }

  return points;
}

const totalPoints = playsArray.reduce((acc, curr) => {
  return acc + calculatePoints(curr);
}, 0)

console.log(totalPoints);
