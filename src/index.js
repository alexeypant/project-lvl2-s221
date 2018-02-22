import fs from 'fs';
import _ from 'lodash';
import yaml from 'js-yaml';
import path from 'path';
import ini from 'ini';

const genDiff = (path1, path2) => {
  const beforeFile = fs.readFileSync(path1, 'utf-8');
  const afterFile = fs.readFileSync(path2, 'utf-8');
  const extention = path.extname(path1);

  const parser = {
    '.json': JSON.parse,
    '.yml': yaml.safeLoad,
    '.ini': ini.parse,
  };

  const before = parser[extention](beforeFile);
  const after = parser[extention](afterFile);

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
      return [`- ${key}: ${before[key]}`, `+ ${key}: ${after[key]}`];
    }
    return `${key}: ${before[key]}`;
  });
  return `{\n\t${_.flatten(difference).join('\n\t')}\n}`;
};

export default genDiff;
