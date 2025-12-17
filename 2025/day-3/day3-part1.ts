const input = Bun.file(`${import.meta.dir}/input.txt`)
const fileContents = await input.text()
const banks = fileContents.trim().split('\n')

function findLargestPair(bank: string): number {
  const digits = bank.trim()
  let maxFirstDigit = -1
  let maxPair = 0

  for (let i = 0; i < digits.length; i++) {
    const currentDigit = Number(digits[i])

    if (maxFirstDigit >= 0) {
      const pair = maxFirstDigit * 10 + currentDigit

      if (pair > maxPair) {
        maxPair = pair
      }
    }

    if (currentDigit > maxFirstDigit) {
      maxFirstDigit = currentDigit
    }
  }

  return maxPair
}

function solve(inputBanks: string[]): number {
  const largestPairs = []

  for (const bank of inputBanks) {
    const largestPair = findLargestPair(bank)
    largestPairs.push(largestPair)
  }

  return largestPairs.reduce((prev, curr) => prev + curr, 0)
}

const answer = solve(banks)

console.log(answer)

export { findLargestPair }
