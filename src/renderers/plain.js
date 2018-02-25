export default (ast) => {
  const inner = astObj =>
    astObj.reduce((acc, obj) => {
      if (obj.type === 'nested') {
        const children = inner(obj.children).split('\n')
          .reduce((accum, value) => (value ? `${accum}${obj.key}.${value}\n` : accum), '');
        return `${acc}${children}`;
      }
      if (obj.type === 'changed') {
        const oldValue = obj.oldValue instanceof Object ? 'complex value' : `'${obj.oldValue}'`;
        const newValue = obj.newValue instanceof Object ? 'complex value' : `'${obj.newValue}'`;
        return `${acc}${obj.key}' was updated. From ${oldValue} to ${newValue}\n`;
      }
      if (obj.type === 'added') {
        const value = obj.newValue instanceof Object ? 'complex value' : `value: '${obj.newValue}'`;
        return `${acc}${obj.key}' was added with ${value}\n`;
      }
      if (obj.type === 'deleted') {
        return `${acc}${obj.key}' was removed\n`;
      }
      return acc;
    }, '');

  const msgs = inner(ast).split('\n')
    .reduce((accum, value) => (value ? `${accum}Property '${value}\n` : accum), '')
    .slice(0, -1);
  return msgs;
};
