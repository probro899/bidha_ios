import axios from 'axios';
import { BASE_URL } from '../config';
import { updateMessage, updateMainValue } from './index';

export const fetchFreeQuestion = () => {
  return async (dispatch, getState) => {
    try {
      const resToken = getState().registerForm.userProfile.registrationToken;
      // const fcmToken = await AsyncStorage.getItem('fcmToken');
      const responseFetch = await axios.get(`${BASE_URL}/app/fetch-free-question?registrationToken=${resToken}`);
      console.log('fetch freeQuestion data', responseFetch.data);
      if (responseFetch.status === 200) {
        dispatch(updateMainValue('freeQuestion', responseFetch.data));
      }
    } catch (err) {
      // console.log('fetch initial data error', err);
      throw err;
    }
  };
};
// export const test = {};
