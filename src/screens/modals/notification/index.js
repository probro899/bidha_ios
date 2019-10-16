import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Title, Text, Right, Button, Icon, Body } from 'native-base';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import Content from './Content';
import { APP_COLOR, APP_TITLE_TEXT_COLOR, SCREEN_HEIGHT } from '../../../config';

class CustomModal extends Component {

  state={ };

  render() {
    const { modal, updateModalValue, main } = this.props;
    return (
      <Modal
        isVisible={modal.Notifications}
        onBackButtonPress={() => updateModalValue('Notifications', false)}
      >
        <Header style={{ backgroundColor: APP_COLOR, height: 40, width: '100%' }}>
          <Body>
            <Title><Text style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 15 }}>Notifications</Text></Title>
          </Body>
          <Right>
            <Button transparent onPress={() => updateModalValue('Notifications', false)}>
              <Icon
                name="close"
                style={{ color: APP_TITLE_TEXT_COLOR }}
              />
            </Button>
          </Right>
        </Header>
        <View style={{ maxHeight: SCREEN_HEIGHT * 0.8, height: 'auto', backgroundColor: '#E0E0E0'  }}>
          {main.notification ? <Content {...this.props} /> : <View />}
        </View>
      </Modal>
    );
  }
}
export default CustomModal;
CustomModal.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
  updateMainValue: PropTypes.func.isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
