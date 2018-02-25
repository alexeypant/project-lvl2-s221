import fs from 'fs';
import genDiff from '../src';

// describe('genDiff flat', () => {
//   test('json', () => {
//     const before = './__tests__/__fixtures__/before.json';
//     const after = './__tests__/__fixtures__/after.json';
//     const expected = fs.readFileSync('./__tests__/__fixtures__/expected.txt', 'utf8');
//     const generated = genDiff(before, after);
//     expect(generated).toBe(expected);
//   });
// });

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




test('file reading test', () => {
  const expected = `readFileTest\nsecondLine`;
  const readed = fs.readFileSync('./__tests__/__fixtures__/readFile.txt', 'utf-8');
  expect(readed).toBe(expected);
});

test('genDiff JSON Recurs', () => {
  const before = './__tests__/__fixtures__/beforeR.json';
  const after = './__tests__/__fixtures__/afterR.json';
  const expected = fs.readFileSync('./__tests__/__fixtures__/expectedR.txt', 'utf-8');
  const generated = genDiff(before, after, 'json');
  expect(generated).toBe(expected);
});


test('recursive JSON plain', () => {
  const before = './__tests__/__fixtures__/beforeR.json';
  const after = './__tests__/__fixtures__/afterR.json';
  const expected = fs.readFileSync('./__tests__/__fixtures__/expected_nested_plain.txt', 'utf-8');
  const generated = genDiff(before, after, 'plain');
  expect(generated).toBe(expected);
});

