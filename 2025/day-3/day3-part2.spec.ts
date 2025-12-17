import { test, expect } from 'bun:test'
import { findLargestSequence, solve } from './day3-part2.ts'

test('part 2: finds largest 12-digit joltage per bank', () => {
  expect(findLargestSequence('987654321111111')).toBe(987654321111n)
  expect(findLargestSequence('811111111111119')).toBe(811111111119n)
  expect(findLargestSequence('234234234234278')).toBe(434234234278n)
  expect(findLargestSequence('818181911112111')).toBe(888911112111n)
})

test('part 2: sums sample banks', () => {
  const sample = [
    '987654321111111',
    '811111111111119',
    '234234234234278',
    '818181911112111',
  ]

  expect(solve(sample)).toBe(3121910778619n)
})
