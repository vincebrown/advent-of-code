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
