// Since the young Elf was just doing silly patterns, you can find the invalid
// IDs by looking for any ID which is made only of some sequence of digits repeated twice.
// So, 55 (5 twice), 6464 (64 twice), and 123123 (123 twice) would all be invalid IDs.
// None of the numbers have leading zeroes; 0101 isn't an ID at all. (101 is a valid ID that you would ignore.)

const input = Bun.file(`${import.meta.dir}/test-input.txt`)
const contents = await input.text()

const rangeStrings = contents.split(',')
const ranges = rangeStrings.map(rangeString => {
  const bounds = rangeString.split('-');
  return bounds.map(num => Number(num))
})

const isInvalidId = (num: number): boolean => {
  const length = Math.floor(String(num).length)
  const half = length / 2

  if (length % 2 !== 0) return false

  const firstHalf = String(num).slice(0, half)
  const secondHalf = String(num).slice(half)

  return firstHalf === secondHalf
}


function solve(): number | undefined {
  const badIds: number[] = []

  for (const range of ranges) {
    if (!range[0] || !range[1]) {
      return
    }

    for (let i = range[0]; i <= range[1]; i++) {
      if (isInvalidId(i)) {
        badIds.push(i)
      }
    }
  }


  return badIds.reduce((prev, curr) => prev + curr, 0);
}

const answer = solve()
console.log(answer)

export { solve }
