// The clerk quickly discovers that there are still invalid IDs in the ranges in your list.
// Maybe the young Elf was doing other silly patterns as well?
// Now, an ID is invalid if it is made only of some sequence of digits
// repeated at least twice. So, 12341234 (1234 two times),
// 123123123 (123 three times), 1212121212 (12 five times),
// and 1111111 (1 seven times) are all invalid IDs.
// From the same example as before:
//     11-22 still has two invalid IDs, 11 and 22.
//     95-115 now has two invalid IDs, 99 and 111.
//     998-1012 now has two invalid IDs, 999 and 1010.
//     1188511880-1188511890 still has one invalid ID, 1188511885.
//     222220-222224 still has one invalid ID, 222222.
//     1698522-1698528 still contains no invalid IDs.
//     446443-446449 still has one invalid ID, 446446.
//     38593856-38593862 still has one invalid ID, 38593859.
//     565653-565659 now has one invalid ID, 565656.
//     824824821-824824827 now has one invalid ID, 824824824.
//     2121212118-2121212124 now has one invalid ID, 2121212121.
// Adding up all the invalid IDs in this example produces 4174379265.



// THOUGHTS
//
// To determine if a number's digit string consists of a repeated sequence (at least twice),
// think in terms of substring repetition rather than search algorithms like KMP.
// The "pattern" is the base substring that repeats to form the entire string—start
// by identifying possible pattern lengths that divide the total length evenly
// (e.g., for length 8, check divisors 1,2,4). For each divisor d, extract the first d characters
// as the candidate pattern and verify if repeating it (total_length / d) times matches the full string.
// The "beginning" is always position 0, and the "end" is the pattern's boundary;
// if any repetition holds, it's invalid. This is efficient and avoids complex searches
const input = Bun.file(`${import.meta.dir}/input.txt`)
const contents = await input.text()

const rangeStrings = contents.split(',')
const ranges = rangeStrings.map(rangeString => {
  const [start, end] = rangeString.split('-');
  return [Number(start), Number(end)]
})

const isInvalidId = (num: number): boolean => {
  const numStr = String(num)
  const length = numStr.length
  const half = length / 2

  const divisors = []

  for (let i = Math.floor(half); i >= 1; i--) {
    if (length % i === 0) {
      divisors.push(i)
    }
  }

  for (const patternLength of divisors) {
    const pattern = numStr.slice(0, patternLength);
    const expanded = pattern.repeat(length / patternLength)
    if (expanded === numStr) return true
  }

  return false
}


function solve(): number | undefined {
  const invalidIds: number[] = []

  for (const [start, end] of ranges) {
    if (!start || !end) {
      return
    }

    for (let id = start; id <= end; id++) {
      if (isInvalidId(id)) {
        invalidIds.push(id)
      }
    }
  }

  console.log('INVALID IDS: ', invalidIds)

  return invalidIds.reduce((prev, curr) => prev + curr, 0);
}

const answer = solve()
console.log(answer)

export { solve }
