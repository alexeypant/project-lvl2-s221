import fs from 'fs';
import _ from 'lodash';


const genDiff = (path1, path2) => {
  const before = JSON.parse(fs.readFileSync(path1));
  const after = JSON.parse(fs.readFileSync(path2));

  const keysOfBefore = Object.keys(before);
  const keysOfAfter = Object.keys(after);
  const keys = _.union(keysOfBefore, keysOfAfter);

  const difference = keys.map((key) => {
    if (!before[key]) {
      return `+ ${key}: ${after[key]}`;
    }
    if (!after[key]) {
      return `- ${key}: ${before[key]}`;
    }
    if (after[key] !== before[key]) {
      return `- ${key}: ${before[key]}\n\t+ ${key}: ${after[key]}`;
    }
    return `${key}: ${before[key]}`;
  });
  return `{\n\t${difference.join('\n\t')}\n}`;
};

export default genDiff;
