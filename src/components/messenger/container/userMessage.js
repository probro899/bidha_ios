import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { View, Text, Icon } from 'native-base';
import { format } from 'date-fns';
import { SCREEN_WIDTH, APP_TITLE_TEXT_COLOR, APP_COLOR } from '../../../config';

const styles = StyleSheet.create({
  textViewStyle: {
    backgroundColor: '#D6F4FEe5',
    flexGrow: 1,
    elevation: 1,
    padding: 10,
    maxWidth: SCREEN_WIDTH * 0.8,
    shadowColor: '#fff',
    borderRadius: 15,
    borderBottomRightRadius: 0,
  },
});

const statusView = (status) => {
  switch (status) {
    case 'error':
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontStyle: 'italic', color: 'red', fontSize: 10 }}>
            Sending Faild
          </Text>
          <Icon name="close" style={{ fontSize: 15, color: 'red', marginLeft: 5 }} />
        </View>
      );
    case '0':
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontStyle: 'italic', color: 'red', fontSize: 10 }}>
            Not paid
          </Text>
          <Icon name="close" style={{ fontSize: 15, color: 'red', marginLeft: 5 }} />
        </View>
      );
    case '1':
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontStyle: 'italic', color: APP_TITLE_TEXT_COLOR, fontSize: 10 }}>
          Sent
          </Text>
          <Icon name="done-all" style={{ fontSize: 15, color: APP_TITLE_TEXT_COLOR}} />
        </View>
      );
    default:
      return null;
  }
};
const messageTool = (message) => {
  return (
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', maxWidth: SCREEN_WIDTH * 0.8 }}>
      <View style={{ flexGrow: 1 }}>
        <Text style={{ fontSize: 10, color: APP_TITLE_TEXT_COLOR, marginLeft: 10, maxWidth: SCREEN_WIDTH * 0.5 }}>
          {` Asked by ${message.userDetails.firstName} on `}
          {format(message.questionDetails.timeStamp, 'MMM d yyyy')}
        </Text>
      </View>
      <View style={{ marginRight: 30, flexDirection: 'row' }}>
        {statusView(message.questionDetails.paymentStatus)}
      </View>
    </View>
  );
};

class UserMessage extends Component {

  state = {}

  openMenuHandler = (qid, paymentStatus, question) => {
    const { props } = this.props;
    props.updateModalValue('showMessageMenuError', null);
    props.updateModalValue('showMessageMenuSuccess', null);
    props.updateModalValue('showMessageMenuLoading', null);
    props.updateModalValue('showMessageMenuModal', { type: 'question', qid, paymentStatus, question });
  }

  render() {
    const { message } = this.props;
    return (
      <View style={{ alignItems: 'flex-end', margin: 5 }}>
        <TouchableOpacity
          onLongPress={() => this.openMenuHandler(message.questionDetails.id, message.questionDetails.paymentStatus, message.questionDetails.question)}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexGrow: 1,
            maxWidth: '90%',
          }}>
          <Text style={styles.textViewStyle}>
            { message.questionDetails.question }
          </Text>
        </TouchableOpacity>
        {messageTool(message)}
      </View>
    );
  }
}

export default UserMessage;
UserMessage.propTypes = {
  message: PropTypes.objectOf(PropTypes.any).isRequired,
  props: PropTypes.objectOf(PropTypes.any).isRequired,
};

