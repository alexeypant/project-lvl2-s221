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
        return `${indent.slice(2)}"${key}": {\n${indent}"type": "unchanged",\n${indent}"value": "${processValue(oldValue)}"\n${indent.slice(2)}}`;
      case 'deleted':
        return `${indent.slice(2)}"${key}": {\n${indent}"type": "deleted",\n${indent}"value": "${processValue(oldValue)}"\n${indent.slice(2)}}`;
      case 'added':
        return `${indent.slice(2)}"${key}": {\n${indent}"type": "added",\n${indent}"value": "${processValue(newValue)}"\n${indent.slice(2)}}`;
      case 'changed':
        return `${indent.slice(2)}"${key}": {\n${indent}"type": "changed",\n${indent}"oldValue": "${processValue(oldValue)}",\n${indent}"newValue": "${processValue(newValue)}"\n${indent.slice(2)}}`;
      default:
        return null;
    }
  };

  const rendered = _.flatten(ast.reduce((acc, element) => ([...acc, makeString(element)]), []));
  return `{\n${rendered.join(',\n')}\n${indent.slice(shift)}}`;
};

export default render;
