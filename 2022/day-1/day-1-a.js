var fs = require('fs');
var input = fs.readFileSync('2022/day-1/day-1-input.txt').toString()

// Part 1
const elfsCaloriesGreatestToLeast = input.split('\n\n').map(elf => {
    return elf
      .split('\n')
      .reduce((acc, cur) => {
        return Number(acc) + Number(cur.trim())
      }, 0)
  }).sort((a, b) => b - a)

// Part 2
const topThreeElves = elfsCaloriesGreatestToLeast.slice(0, 3)
const totalCaloriesTopThree = topThreeElves.reduce((acc, cur) => acc + cur, 0)
console.log(totalCaloriesTopThree)