const input = Bun.file(`${import.meta.dir}/input-1.txt`)

const contents = await input.text()

const instructions = contents.split('\n');

// Dial goes 0 - 99
let dialPosition = 50;
let total = 0;

const wrapAround = (pos: number): number => (pos % 100 + 100) % 100;

instructions.forEach(i => {
  const direction = i.slice(0, 1)
  const turns = Number(i.slice(1))
  const isLeft = direction === 'L';

  dialPosition = wrapAround(isLeft ? dialPosition - turns : dialPosition + turns)

  if (dialPosition === 0) {
    total += 1;
  }
})

console.log('TOTAL', total)
