import { test, expect } from "bun:test";
import { solve } from './problem-1.ts';

test('should solve test input part 2', () => {
  const result = solve();
  console.log('Result:', result);
  expect(result).toBe(1227775554);
});
