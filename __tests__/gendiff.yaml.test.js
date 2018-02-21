import genDiff from '../src';


test('genDiff', () => {
  const before = './__tests__/__fixtures__/before.yml';
  const after = './__tests__/__fixtures__/after.yml';
  const generated = genDiff(before, after);
  const expected = '{\n\thost: hexlet.io\n\t- timeout: 50\n\t+ timeout: 20\n\t- proxy: 123.234.53.22\n\t+ verbose: true\n}';
  expect(generated).toBe(expected);
});
