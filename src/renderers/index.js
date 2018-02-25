import plainRenderer from './plain';
import jsonRenderer from './diff';

export default (opt) => {
  switch (opt) {
    case 'plain':
      return plainRenderer;
    case 'json':
      return jsonRenderer;
    default:
      return null;
  }
};
