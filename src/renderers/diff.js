import _ from 'lodash';

const render = (ast, level = 1) => {
  const shift = 4;
  const indent = ' '.repeat(level * shift);
  const processValue = (value, d = level + 1) => {
    if (value instanceof Object) {
      const innerIndent = ' '.repeat(d * shift);
      const innerElements = _.keys(value).map(key => `${innerIndent}${key}: ${processValue(value[key])}`);
      return `{\n${innerElements.join('\n')}\n${indent}}`;
    }
    return value;
  };
  const makeString = (element) => {
    const {
      key, type, oldValue, newValue, children,
    } = element;
    switch (type) {
      case 'nested':
        return `${indent}${key}: ${render(children, level + 1)}`;
      case 'unchanged':
        return `${indent}${key}: ${processValue(oldValue)}`;
      case 'deleted':
        return `${indent.slice(2)}- ${key}: ${processValue(oldValue)}`;
      case 'added':
        return `${indent.slice(2)}+ ${key}: ${processValue(newValue)}`;
      case 'changed':
        return [`${indent.slice(2)}- ${key}: ${processValue(oldValue)}`, `${indent.slice(2)}+ ${key}: ${processValue(newValue)}`];
      default:
        return null;
    }
  };

  const rendered = _.flatten(ast.reduce((acc, element) => ([...acc, makeString(element)]), []));
  return `{\n${rendered.join('\n')}\n${indent.slice(shift)}}`;
};

export default render;