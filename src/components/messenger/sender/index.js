import React, { Component } from 'react';
import { TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Icon, Spinner, Text, Thumbnail, Button } from 'native-base';
import { APP_COLOR, SCREEN_HEIGHT, APP_TITLE_TEXT_COLOR } from '../../../config';
import * as actions from '../../../actions';
import payment from '../../../payment';
import AppIcon from '../../../../assets/app_logo1.png';

class MessageSender extends Component {
  state = { showIdeaToask: true, showTotalAmount: false };

  componentDidMount() {
    const { updateMessage } = this.props;
    updateMessage('messageStatus', null);
    updateMessage('message', '');
  }

  messageSendHandler = async (sendMessageHandler, updateMessage, updateMainValue, main) => {
    updateMessage('messageStatus', 'loading');
    updateMainValue('drawer', false);
    // sendMessageHandler({ paymentStatus: false, questionType: 'paid' });
    if (main.freeQuestion.filter(obj => obj.status === 1).length > 0) {
      updateMainValue('drawer', true);
      const freeQuestionId = main.freeQuestion.find(obj => obj.status === 1);
      console.log('free Quesiton id', freeQuestionId);
      sendMessageHandler({ paymentStatus: true, questionType: 'free', freeQuestionId: freeQuestionId.id });
    } else {
      this.setState({ showTotalAmount: true });
    }
  }

  continueWithGpayhandler = async (sendMessageHandler, updateMessage, updateMainValue, main) => {
    this.setState({ showTotalAmount: false });
    const paymentRes = await payment(this.props);
    if (paymentRes) {
      updateMainValue('drawer', true);
      sendMessageHandler({ paymentStatus: true, questionType: 'paid' });
    } else {
      updateMainValue('drawer', true);
      sendMessageHandler({ paymentStatus: false, questionType: 'paid' });
    }
  }

  handleShowIdeaToAsk = () => {
    const { showIdeaToask } = this.state;
    this.setState({ showIdeaToask: !showIdeaToask });
  }

  render() {
    const { showIdeaToask, showTotalAmount } = this.state;
    const { navigation, message, updateMessage, sendMessageHandler, checkBirthProfile, updateModalValue, messageStatus, registerForm, updateMainValue, main } = this.props;
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: APP_COLOR,
        borderTopColor: APP_TITLE_TEXT_COLOR,
        borderTopWidth: 0.3,
        padding: 5,
      }}
      >
        {/* {showIdeaToask && (
          <TouchableOpacity style={{ margin: 5 }} onPress={() => updateModalValue('showIdeaToAsk', true)}>
            <Icon name="chatboxes" style={{ color: APP_TITLE_TEXT_COLOR }} />
          </TouchableOpacity>
        )
        } */}
        <View style={{
          backgroundColor: '#fff',
          maxWidth: '90%',
          maxHeight: 300,
          flexGrow: 1,
          borderRadius: 25,
          padding: 3,
        }}
        >
          <TextInput
            placeholder="Type your question here..."
            multiline
            value={message}
            maxLength={200}
            numberOfLines={2}
            onChangeText={text => updateMessage('message', text)}
            spellCheck
            style={styles.textInputStyle}
            onBlur={this.handleShowIdeaToAsk}
            onFocus={() => {
              this.handleShowIdeaToAsk();
              // checkBirthProfile();
            }}
          />
        </View>
        <View style={{ maxWidth: 50 }}>
          { messageStatus === 'loading'
            ? <Spinner size="small" color={APP_TITLE_TEXT_COLOR} style={{ width: 40, height: 40 }} />
            : (
              <TouchableOpacity
                style={{ margin: 5 }}
                disabled={!registerForm.userProfile.internetStatus}
                onPress={() => {
                  if (checkBirthProfile(navigation) && message.length > 0) {
                    this.messageSendHandler(sendMessageHandler, updateMessage, updateMainValue, main);
                  }
                }}
              >
                <Icon name="send" style={{ color: !registerForm.userProfile.internetStatus ? '#757575' : APP_TITLE_TEXT_COLOR }} />
              </TouchableOpacity>
            )
        }
        </View>
        <Modal
          isVisible={showTotalAmount}
          onBackButtonPress={() => {
            this.setState({ showTotalAmount: false });
            updateMainValue('drawer', true);
            sendMessageHandler({ paymentStatus: false, questionType: 'paid' });
          }}

          style={{ justifyContent: 'flex-end', alignItems: 'flex-end', margin: 0 }}>
          <View style={{ backgroundColor: 'white', width: '100%', height: SCREEN_HEIGHT * 0.3 }}>
            {/* <Text style={{ fontSize: 20, color: '#757575', margin: 5 }}>Google Play</Text> */}
            <View style={{ width: '100%', height: SCREEN_HEIGHT * 0.3, marginTop: 10, flexDirection: 'column', justifyContent: 'space-between' }}>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Thumbnail source={AppIcon} small square />
                  <Text style={{ marginTop: 10, marginLeft: 5 }}>
                    Bidha - The Astrology App
                  </Text>
                </View>
                <View style={{ height: 0.5, backgroundColor: '#757575', width: '100%' }} />
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 20 }}>
                  <Text style={{ marginTop: 10 }}>Total Question Price -</Text>
                  <Text style={{ marginTop: 10, fontWeight: 'bold' }}>{` $${main.configuration.questionRate}`}</Text>
                </View>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Button full style={{ backgroundColor: APP_TITLE_TEXT_COLOR}} onPress={() => this.continueWithGpayhandler(sendMessageHandler, updateMessage, updateMainValue, main)}>
                  <Text style={{ fontWeight: 'bold' }}>Pay with Apple Pay</Text>
                  {/* <Thumbnail small square source={GpayIcon} style={{ width: 100, height: 30 }} /> */}
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    maxHeight: 100,
    borderColor: '#757575',
    flexGrow: 1,
    padding: 2,
    maxWidth: '90%',
  },
});

MessageSender.propTypes = {
  message: PropTypes.string.isRequired,
  updateMessage: PropTypes.func.isRequired,
  sendMessageHandler: PropTypes.func.isRequired,
  checkBirthProfile: PropTypes.func.isRequired,
  updateModalValue: PropTypes.func.isRequired,
  messageStatus: PropTypes.string,
  updateMainValue: PropTypes.func.isRequired,
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ message }) => message;
export default connect(mapStateToProps, { ...actions })(MessageSender);
