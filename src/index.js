import fs from 'fs';
import _ from 'lodash';
import yaml from 'js-yaml';
import path from 'path';

const genDiff = (path1, path2) => {
  const afterFile = fs.readFileSync(path2);
  const beforeFile = fs.readFileSync(path1);
  const extention = path.extname(path1);

  let after;
  let before;

  if (extention === '.json') {
    after = JSON.parse(afterFile);
    before = JSON.parse(beforeFile);
  } else if (extention === '.yml') {
    after = yaml.safeLoad(afterFile);
    before = yaml.safeLoad(beforeFile);
  }

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
