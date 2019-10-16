import { UPDATE_MAIN_VALUE } from './types';

export const updateMainValue = (key, value) => {
  return {
    type: UPDATE_MAIN_VALUE,
    payload: {key, value}
  }
}
