import { UPDATE_PROFILE } from './types';

export const updateModalValue = (key, value) => {
  return {
    type: UPDATE_PROFILE,
    payload: {key, value}
  }
};
