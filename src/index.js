import fs from 'fs';
import _ from 'lodash';
import yaml from 'js-yaml';
import path from 'path';
import ini from 'ini';
import render from './renderers';

const parser = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.ini': ini.parse,
};

const buildAST = (objBefore, objAfter) => {
  const keysBefore = Object.keys(objBefore);
  const keysAfter = Object.keys(objAfter);
  const keys = _.union(keysBefore, keysAfter);
  const arrayAST = keys.reduce((acc, key) => {
    if (objBefore[key] instanceof Object && objAfter[key] instanceof Object) {
      return [...acc, {
        key, type: 'nested', children: buildAST(objBefore[key], objAfter[key]),
      }];
    } else if (!(_.has(objAfter, key)) && _.has(objBefore, key)) {
      return [...acc, {
        key, type: 'deleted', oldValue: objBefore[key],
      }];
    } else if (! (_.has(objBefore, key)) && _.has(objAfter, key)) {
      return [...acc, {
        key, type: 'added', newValue: objAfter[key],
      }];
    } else if (objBefore[key] !== objAfter[key]) {
      return [...acc, {
        key, type: 'changed', oldValue: objBefore[key], newValue: objAfter[key],
      }];
    }
    return [...acc, {
      key, type: 'unchanged', oldValue: objBefore[key], newValue: objBefore[key],
    }];
  }, []);
  return arrayAST;
};

const genDiff = (path1, path2, format) => {
  const fileBefore = fs.readFileSync(path1, 'utf8');
  const fileAfter = fs.readFileSync(path2, 'utf8');
  const extention = path.extname(path1);
  const objBefore = parser[extention](fileBefore);
  const objAfter = parser[extention](fileAfter);
  const objAST = buildAST(objBefore, objAfter);
  const difference = render(format)(objAST);
  return difference;
};

export default genDiff;
