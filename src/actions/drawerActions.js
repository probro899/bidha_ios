import { TOGGLE_MENU } from './types';

export const toggleMenu = (title) => {
  return {
    type: TOGGLE_MENU,
    payload: title,
  };
};
