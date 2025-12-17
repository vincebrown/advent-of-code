const input = Bun.file(`${import.meta.dir}/input.txt`)
const fileContents = await input.text()
const banks = fileContents.trim().split('\n')

const TARGET_LENGTH = 12

function findLargestSequence(bank: string, targetLength = TARGET_LENGTH): bigint {
  const digits = bank.trim()

  let digitsToPick = targetLength
  let skipsRemaining = digits.length - targetLength
  let startIndex = 0

  const result: string[] = []

  while (digitsToPick > 0) {
    const latestPickIndex = digits.length - digitsToPick
    const windowEndIndex = Math.min(startIndex + skipsRemaining, latestPickIndex)

    let bestDigit = digits[startIndex]!
    let bestIndex = startIndex

    for (let i = startIndex; i <= windowEndIndex; i++) {
      const currentDigit = digits[i]!
      if (currentDigit > bestDigit) {
        bestDigit = currentDigit
        bestIndex = i
        if (bestDigit === '9') {
          break
        }
      }
    }

    result.push(bestDigit)

    skipsRemaining -= bestIndex - startIndex
    startIndex = bestIndex + 1
    digitsToPick--
  }

  return BigInt(result.join(''))
}

function solve(inputBanks: string[]): bigint {
  let sum = 0n

  for (const bank of inputBanks) {
    sum += findLargestSequence(bank)
  }

  return sum
}

const answer = solve(banks)
console.log(answer.toString())

export { findLargestSequence, solve }
