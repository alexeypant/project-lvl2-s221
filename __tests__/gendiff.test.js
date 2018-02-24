import fs from 'fs';
import genDiff from '../src';
import expected from './__fixtures__/expected';

describe('genDiff flat', () => {
  test('json', () => {
    const before = './__tests__/__fixtures__/before.json';
    const after = './__tests__/__fixtures__/after.json';
    const expected = fs.readFileSync('./__tests__/__fixtures__/expected.txt', 'utf8');
    const generated = genDiff(before, after);
    expect(generated).toBe(expected);
  });
});

// test('genDiff YAML', () => {
//   const before = './__tests__/__fixtures__/before.yml';
//   const after = './__tests__/__fixtures__/after.yml';
//   const expected = fs.readFileSync('./__tests__/__fixtures__/expected.txt', 'utf8');
//   const generated = genDiffR(before, after);
//   expect(generated).toBe(expected);
// });

// test('genDiff INI', () => {
//   const before = './__tests__/__fixtures__/before.ini';
//   const after = './__tests__/__fixtures__/after.ini';
//   const expected = fs.readFileSync('./__tests__/__fixtures__/expected.txt', 'utf8');
//   const generated = genDiffR(before, after);
//   expect(generated).toBe(expected);
// });

test('genDiff JSON Recurs', () => {
  const before = './__tests__/__fixtures__/beforeR.json';
  const after = './__tests__/__fixtures__/afterR.json';
  const expected = fs.readFileSync('./__tests__/__fixtures__/expectedR.txt', 'utf8');
  const generated = genDiff(before, after);
  expect(generated).toBe(expected);
});
