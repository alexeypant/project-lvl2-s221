import genDiff from '../src';

const result = '{\n\thost: hexlet.io\n\t- timeout: 50\n\t+ timeout: 20\n\t- proxy: 123.234.53.22\n\t+ verbose: true\n}';

test('genDiff', () => {
    expect(genDiff('./__tests__/__fixtures__/before.json', './__tests__/__fixtures__/after.json' )).toBe(result);
});