import React, { Component } from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { Header, Body, Title, Text, Right, Button, Icon, View } from 'native-base';
import ModalContent from './Content';
import { SCREEN_HEIGHT, APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../config';

class CustomerSupport extends Component {
  state = {};

  render() {
    const { modal, updateModalValue } = this.props;
    return (
      <Modal
        // backdropColor="null"
        onBackButtonPress={() => updateModalValue('HowBidhaWorks', false)}
        animationInTiming={300}
        animationOutTiming={300}
        isVisible={modal.HowBidhaWorks}
      >
        <Header style={{ backgroundColor: APP_COLOR, height: 40, width: '100%' }}>
          <Body>
            <Title><Text style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 15 }}>How Bidha Works</Text></Title>
          </Body>
          <Right>
            <Button transparent onPress={() => updateModalValue('HowBidhaWorks', false)}>
              <Icon
                name="close"
                style={{ color: APP_TITLE_TEXT_COLOR }}
              />
            </Button>
          </Right>
        </Header>
        <View style={{ height: SCREEN_HEIGHT * 0.8, backgroundColor: '#fff' }}>
          <ModalContent {...this.props} />
        </View>
      </Modal>
    );
  }
}

export default CustomerSupport;
CustomerSupport.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
