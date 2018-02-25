import plainRenderer from './plain';
import diffRenderer from './diff';
import jsonRenderer from './json';

export default (opt) => {
  switch (opt) {
    case 'plain':
      return plainRenderer;
    case 'diff':
      return diffRenderer;
    case 'json':
      return jsonRenderer;
    default:
      return null;
  }
};
