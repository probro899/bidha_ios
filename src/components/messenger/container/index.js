import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView, View, Keyboard } from 'react-native';
import { Text } from 'native-base';
import messageListHandler from './message';
import * as actions from '../../../actions';
import SystemMessage from './systemMessage';
import backGround from '../../../../assets/background.jpg';

class MessageContainer extends Component {

  state = { keyboardSpace: 20 };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = (data) => {
    this.setState({ keyboardSpace: data.height });
  }

  keyboardDidHide = () => {
    this.setState({ keyboardSpace: 20 });
  }

  containerFormater = () => {
    const { messageList, main } = this.props;
    const allQuestion = messageList.map(obj => obj.question).map(qsn => ({...qsn, type: 'question', timeStamp: qsn.questionDetails.timeStamp }));
    // console.log('allQuestion', allQuestion);
    const allAnswer = messageList.map(obj => obj.answer).map((obj,idx) => obj ? {answer: obj, question: allQuestion[idx] } : null).filter(a => a).map(ans => ({...ans, type: 'answer', timeStamp: ans.answer.answerDetail.modAnsTimeStamp}));
    // console.log('allAnswer', allAnswer);
    const allSystemMessage = main.systemMessage.map(msg => ({...msg, type: 'message'}));
    // console.log('allSystem message',allSystemMessage);
    return [...allQuestion, ...allAnswer, ...allSystemMessage].sort((a, b) => {
      if (a.timeStamp > b.timeStamp) {
        return 1;
      }
      if (a.timeStamp < b.timeStamp) {
        return -1;
      }
      return 0;
    });
  }

  render() {
    const { messageList, main } = this.props;
    const { keyboardSpace } = this.state;
    console.log('props in main container', this.props)
   console.log('all Cotainer messsages', this.containerFormater());
    return (
      <ImageBackground source={backGround} style={{ flex: 1 }}>
      <ScrollView
        nestedScrollEnabled
        ref={ref => this.scrollView = ref}
        contentContainerStyle={{ backgroundColor: '#ffffff55', flexGrow: 1 }}
        onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
      >
        {(main.configuration && main.configuration.initialMessage) ? <SystemMessage message={main.configuration.initialMessage} /> : null }
        {this.containerFormater().map((msg, idx) => messageListHandler(msg, idx, this.props))}
        <View style={{ height: keyboardSpace }} />
      </ScrollView>
    </ImageBackground>
    );
  }
}

const mapStateToProps = ({ message, registerForm, main }) => ({ ...message, registerForm, main });

MessageContainer.propTypes = {
  messageList: PropTypes.arrayOf(PropTypes.any).isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, { ...actions })(MessageContainer);
