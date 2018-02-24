import plainRenderer from './plain';
import jsonRenderer from './json';

export default (opt) => {
  switch (opt) {
    case 'plain':
      return plainRenderer;
    case 'json':
      return jsonRenderer;
    default:
      throw new Error(`${opt} format isn\`t supported!`);
  }
};