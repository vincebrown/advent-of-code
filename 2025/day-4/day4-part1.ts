const input = Bun.file(`${import.meta.dir}/test-input.txt`)
const fileContents = await input.text()
const matrix = fileContents.trim().split('\n').map(row => row.split(''))
console.log('grid', matrix)
