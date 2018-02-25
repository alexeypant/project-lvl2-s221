import fs from 'fs';
import genDiff from '../src';

test('file reading test', () => {
  const expected = 'readFileTest\nsecondLine';
  const readed = fs.readFileSync('./__tests__/__fixtures__/readFile.txt', 'utf-8');
  expect(readed).toBe(expected);
});

test('flat JSON diff output', () => {
  const before = './__tests__/__fixtures__/before.json';
  const after = './__tests__/__fixtures__/after.json';
  const expected = fs.readFileSync('./__tests__/__fixtures__/expected_flat_diff.txt', 'utf-8');
  const generated = genDiff(before, after, 'diff');
  expect(generated).toBe(expected);
});

test('flat YAML diff output', () => {
  const before = './__tests__/__fixtures__/before.yml';
  const after = './__tests__/__fixtures__/after.yml';
  const expected = fs.readFileSync('./__tests__/__fixtures__/expected_flat_diff.txt', 'utf-8');
  const generated = genDiff(before, after, 'diff');
  expect(generated).toBe(expected);
});

test('flat INI diff output', () => {
  const before = './__tests__/__fixtures__/before.ini';
  const after = './__tests__/__fixtures__/after.ini';
  const expected = fs.readFileSync('./__tests__/__fixtures__/expected_flat_diff.txt', 'utf-8');
  const generated = genDiff(before, after, 'diff');
  expect(generated).toBe(expected);
});

test('nested JSON diff output', () => {
  const before = './__tests__/__fixtures__/beforeR.json';
  const after = './__tests__/__fixtures__/afterR.json';
  const expected = fs.readFileSync('./__tests__/__fixtures__/expected_nested_diff.txt', 'utf-8');
  const generated = genDiff(before, after, 'diff');
  expect(generated).toBe(expected);
});

test('nested JSON plain output', () => {
  const before = './__tests__/__fixtures__/beforeR.json';
  const after = './__tests__/__fixtures__/afterR.json';
  const expected = fs.readFileSync('./__tests__/__fixtures__/expected_nested_plain.txt', 'utf-8');
  const generated = genDiff(before, after, 'plain');
  expect(generated).toBe(expected);
});

test('nested JSON json output', () => {
  const before = './__tests__/__fixtures__/before.json';
  const after = './__tests__/__fixtures__/after.json';
  const expected = fs.readFileSync('./__tests__/__fixtures__/expected_flat_json.txt', 'utf-8');
  const generated = genDiff(before, after, 'json');
  expect(generated).toBe(expected);
});
