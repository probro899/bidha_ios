import axios from 'axios';
import { Alert } from 'react-native';
import { MESSAGE_CHANGE } from './types';
import { getAsyncData } from '../common/AsycstrorageHandler';
import { BASE_URL } from '../config';
import { updateModalValue } from './updateModalValue';
import { updateMainValue } from './updateMainValue';

export const updateMessage = (key, value) => {
  return {
    type: MESSAGE_CHANGE,
    payload: { key, value },
  };
};

const reloadStoreHandler = (messageList, showMessageMenuModal, paymentStatus) => {
  const result = messageList.map(data => ((data.question && data.question.questionDetails.id === showMessageMenuModal.qid) ? { ...data, question: { ...data.question, questionDetails: { ...data.question.questionDetails, paymentStatus } } } : data));
  return result;
};

export const sendMessageHandler = ({ paymentStatus, type, questionType, freeQuestionId }) => async (dispatch, getState) => {
  const { uid, firstName } = getState().registerForm.userProfile;
  const registrationToken = await getAsyncData('USER_REG_TOKEN');
  const fcmToken = await getAsyncData('fcmToken');
  const { message, messageList } = getState().message;
  const { showMessageMenuModal } = getState().modal;
  try {
    if (type === 'update') {
      dispatch(updateModalValue('showMessageMenuLoading', true));
      const updateQsnRes = await axios.post(`${BASE_URL}/app/addQuestion`,
        {
          id: showMessageMenuModal.qid,
          paymentStatus,
        });
      if (updateQsnRes.status === 200) {
        dispatch(updateMessage('messageStatus', null));
        dispatch(updateModalValue('showMessageMenuLoading', null));
        dispatch(updateModalValue('showMessageMenuSuccess', 'Resend Successfull.'));
        if (paymentStatus) {
          dispatch(updateMessage('messageList', reloadStoreHandler(messageList, showMessageMenuModal, '1')));
        } else {
          dispatch(updateMessage('messageList', reloadStoreHandler(messageList, showMessageMenuModal, '0')));
        }
      } else {
        dispatch(updateMessage('messageStatus', null));
        dispatch(updateModalValue('showMessageMenuLoading', null));
        dispatch(updateModalValue('showMessageMenuError', 'Faild to resend'));
      }
    } else {
      // console.log('message send handler called', paymentStatus, type, questionType);
      dispatch(updateModalValue('showMessageMenuLoading', true));
      dispatch(updateMessage('messageStatus', 'loading'));
      const addQsnRes = await axios.post(`${BASE_URL}/app/addQuestion`,
        {
          userId: uid,
          question: message,
          serveStatus: true,
          timeStamp: Date.now(),
          type: questionType,
          paymentStatus,
          registrationToken,
          fcmToken,
          firstName,
          freeQuestionId,
        });
        // console.log('addQsnRes', addQsnRes.data);
      if (addQsnRes.status === 200) {
        if (questionType === 'free') {
          // console.log('inside free question type', getState().main.freeQuestion);
          dispatch(updateMainValue('freeQuestion',getState().main.freeQuestion.map(obj => obj.id === freeQuestionId ? {...obj, status: 0} : obj)));
        }
        if (paymentStatus) {
          dispatch(updateMessage('messageStatus', 'sent'));
          dispatch(updateMessage('message', ''));
          dispatch(updateMessage('messageList', [
            ...messageList,
            {
              answer: null,
              question: {
                questionDetails: { id: addQsnRes.data, question: message, timeStamp: Date.now(), paymentStatus: '1' },
                userDetails: getState().registerForm.userProfile,
              },
            }]));
        } else {
          dispatch(updateMessage('messageList', [
            ...messageList,
            {
              answer: null,
              question: {
                questionDetails: { id: addQsnRes.data, question: message, timeStamp: Date.now(), paymentStatus: '0' },
                userDetails: getState().registerForm.userProfile,
              },
            }]));
          dispatch(updateMessage('messageStatus', null));
          dispatch(updateMessage('message', ''));
        }
      }
    }
  } catch (e) {
    dispatch(updateMessage('messageStatus', null));
    Alert.alert('Faild to send', 'Please check your internet settings and try again.');
    throw e;
  }
};
