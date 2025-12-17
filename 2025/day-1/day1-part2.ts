const input = Bun.file(`${import.meta.dir}/input.txt`)

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

  let passes = 0;
  if (isLeft) {
    const fullPasses = Math.floor(turns / 100);
    const remainderTurns = turns % 100;
    let partialPass = 0;
    if (dialPosition > 0 && remainderTurns >= dialPosition) {
      partialPass = 1;
    }
    passes = fullPasses + partialPass;
  } else {
    passes = Math.floor((dialPosition + turns) / 100);
  }

  total += passes;

  dialPosition = wrapAround(isLeft ? dialPosition - turns : dialPosition + turns);
})

console.log('TOTAL', total)
