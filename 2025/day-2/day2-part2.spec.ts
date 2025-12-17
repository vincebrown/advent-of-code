import { test, expect } from "bun:test";
import { solve } from './problem-2.ts';

test('should solve test input part 2', () => {
  const result = solve();
  console.log('Result:', result);
  expect(result).toBe(4174379265);
});
