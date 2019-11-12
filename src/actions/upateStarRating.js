import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../config';
import { updateMessage } from './messageActions';

const starRatingHelper = (messageList, star, id) => {
  return messageList.map((data) => {
    if (data.question.questionDetails.id === id) {
      return { ...data, question: { ...data.question, questionDetails: { ...data.question.questionDetails, starRating: star } } };
    }
    return data;
  });
};

export default (star, ansId, qid) => async (dispatch, getState) => {
  try {
    dispatch(updateMessage('starRatingStatus', ansId));
    const res = await axios.post(`${BASE_URL}/app/update-star-rate`, { qid, star });
    if (res.status === 200) {
      dispatch(updateMessage('starRatingStatus', false));
      dispatch(updateMessage('messageList', starRatingHelper(getState().message.messageList, star, qid)));
    }
  } catch (e) {
    dispatch(updateMessage('starRatingStatus', false));
    Alert.alert('Unable to update star rate');
    throw e;
  }
};
