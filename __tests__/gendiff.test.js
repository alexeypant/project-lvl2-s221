import genDiff from '../src';

// test('difference between', () => {
//     expect(genDiff(firstFile, secondFile)).toBe(resultFile);
// });

const jsonBefore = '{"host": "hexlet.io", "timeout": 50, "proxy": "123.234.53.22"}';
const jsonAfter = '{"timeout": 20, "verbose": true, "host": "hexlet.io" }';

test('genDiff', () => {
    expect(genDiff()).toBe('{"host": "hexlet.io", "timeout": 50, "proxy": "123.234.53.22"}');
});