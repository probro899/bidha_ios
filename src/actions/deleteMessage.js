import axios from 'axios';
import { updateModalValue } from './updateModalValue';
import { BASE_URL } from '../config';
import { updateMessage } from './messageActions';

const deleteMessage = (messageList, data) => {
  if (data.type === 'question') {
    return messageList.map(msg => ((msg.question && msg.question.questionDetails.id === data.qid) ? { ...msg, question: null } : msg));
  }
  if (data.type === 'answer') {
    return messageList.map(msg => ((msg.answer && msg.answer.answerDetail.questionId === data.qid) ? { ...msg, answer: null } : msg));
  }
  return messageList;
};

export default data => async (dispatch, getState) => {
  dispatch(updateModalValue('showMessageMenuLoading', true));
  try {
    const delRes = await axios.post(`${BASE_URL}/app/delete-message`, { ...data });
    if (delRes.status === 200) {
      dispatch(updateMessage('messageList', deleteMessage(getState().message.messageList, data)));
      dispatch(updateModalValue('showMessageMenuLoading', null));
      dispatch(updateModalValue('showMessageMenuError', null));
      dispatch(updateModalValue('showMessageMenuSuccess', 'Successfully deleted'));
    }
  } catch (e) {
    dispatch(updateModalValue('showMessageMenuLoading', null));
    dispatch(updateModalValue('showMessageMenuError', 'Faild to delete message'));
  }
};
