import React, { Component } from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { Header, Body, Title, Text, Right, Button, Icon, View, } from 'native-base';
import ModalContent from './Content';
import { SCREEN_HEIGHT, APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../config';

class CustomerSupport extends Component {
  state = {};

  render() {
    const { modal, updateModalValue, main } = this.props;
    console.log('astrologer list', this.props);
    return (
      <Modal
        // backdropColor="null"
        onBackButtonPress={() => updateModalValue('Astrologers', false)}
        animationInTiming={300}
        animationOutTiming={300}
        isVisible={modal.Astrologers}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <Header style={{ backgroundColor: APP_COLOR, height: 40, width: '100%' }}>
          <Body>
            <Title><Text style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 15 }}>Our Astrologers</Text></Title>
          </Body>
          <Right>
            <Button transparent onPress={() => updateModalValue('Astrologers', false)}>
              <Icon
                name="close"
                style={{ color: APP_TITLE_TEXT_COLOR }}
              />
            </Button>
          </Right>
        </Header>
        <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
          <ModalContent {...this.props} data={main.astrologerList} />
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
