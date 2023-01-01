var fs = require('fs');
var input = fs.readFileSync('2022/day-2/day-2-input.txt').toString()

const playsArray = input.split("\n").map(game => game.split(' '));

function calculatePoints(game) {
  const choicePointsLookup = {
    A: 1,
    B: 2,
    C: 3,
  };

  const outcomePointsLookup = {
    X: 0,
    Y: 3,
    Z: 6,
  }

  const gameLookup = {
    A: {
      X: {
        move: 'C',
      },
      Y: {
        move: 'A',
      },
      Z: {
        move: 'B'
      },
    },
    B: {
      X: {
        move: 'A',
      },
      Y: {
        move: 'B',
      },
      Z: {
        move: 'C'
      },
    },
    C: {
      X: {
        move: 'B',
      },
      Y: {
        move: 'C',
      },
      Z: {
        move: 'A'
      },
    }
  };

  const opponentChoice = game[0];
  const outcome = game[1];

  const choicePoints = choicePointsLookup[gameLookup[opponentChoice][outcome].move];
  const outcomePoints = outcomePointsLookup[outcome];

  return choicePoints + outcomePoints;
}

const totalPoints = playsArray.reduce((acc, curr) => {
  return acc + calculatePoints(curr);
}, 0)

console.log('Total', totalPoints);
