import axios from 'axios';
import { getCSRFToken } from '../utils/Utils';

export const analize = (sourceUrl) => {
  const repository = {
    url: sourceUrl,
  };

  return axios.post('/analize', {
    repository,
  }, {
    headers: {
      'X-CSRF-Token': getCSRFToken(),
    },
  });
};

export default analize;
