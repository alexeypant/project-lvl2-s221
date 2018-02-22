import genDiff from '../src';
import expected from './__fixtures__/expected';

test('genDiff JSON', () => {
  const before = './__tests__/__fixtures__/before.json';
  const after = './__tests__/__fixtures__/after.json';
  const generated = genDiff(before, after);
  expect(generated).toBe(expected);
});


test('genDiff YAML', () => {
  const before = './__tests__/__fixtures__/before.yml';
  const after = './__tests__/__fixtures__/after.yml';
  const generated = genDiff(before, after);
  expect(generated).toBe(expected);
});

test('genDiff INI', () => {
  const before = './__tests__/__fixtures__/before.ini';
  const after = './__tests__/__fixtures__/after.ini';
  const generated = genDiff(before, after);
  expect(generated).toBe(expected);
});
