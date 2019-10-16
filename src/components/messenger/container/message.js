import React from 'react';
import { View } from 'native-base';
import { SCREEN_WIDTH } from '../../../config';
import AstrologerMessage from './astrologerMessage';
import UserMessage from './userMessage';
import SystemMessage from './systemMessage';

const messageSelectorHelper = (msg, props) => {
  console.log('message in messageSelector', msg);
  switch(msg.type) {
    case 'question':
      return  <UserMessage message={msg} props={props} /> ;
    case 'answer':
      return <AstrologerMessage message={msg} props={props} />;
    case 'message':
      return <SystemMessage message={msg.message} props ={props} />;
    default:
      return null;
  }
}

export default (msg, idx, props) => {
  return (
    <View
      key={idx}
      style={{
        maxWidth: '100%',
      }}
    >
      {messageSelectorHelper(msg, props)}
      {/* { (msg.question && !msg.question.questionDetails.deleteStatus) ? <UserMessage message={msg.question} props={props} /> : null }
      { (msg.answer && !msg.answer.answerDetail.deleteStatus) ? <AstrologerMessage message={msg} props={props} /> : null } */}
    </View>
  );
};
