import { test, expect } from "bun:test";
import { findLargestPair } from './day3-part1.ts';

const longBank = '6417428721465223591487332938321284254443151533425567683625237482423323523215265251829988331453263337'

test('should find largest pair in each row', () => {
  expect(findLargestPair('987654321111111')).toBe(98);
  expect(findLargestPair('811111111111119')).toBe(89);
  expect(findLargestPair('234234234234278')).toBe(78);
  expect(findLargestPair('818181911112111')).toBe(92);
  expect(findLargestPair(longBank)).toBe(99);
});
