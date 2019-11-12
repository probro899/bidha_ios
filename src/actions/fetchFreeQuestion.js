import axios from 'axios';
import { BASE_URL } from '../config';
import { updateMainValue } from './index';

export const fetchFreeQuestion = () => {
  return async (dispatch, getState) => {
    try {
      const resToken = getState().registerForm.userProfile.registrationToken;
      const responseFetch = await axios.get(`${BASE_URL}/app/fetch-free-question?registrationToken=${resToken}`);
      console.log('fetch freeQuestion data', responseFetch.data);
      if (responseFetch.status === 200) {
        dispatch(updateMainValue('freeQuestion', responseFetch.data));
      }
    } catch (err) {
      throw err;
    }
  };
};
