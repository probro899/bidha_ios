import React, { Component } from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalContent from './Content';

class CustomerSupport extends Component {
  state = {};

  render() {
    const { modal, updateModalValue } = this.props;
    return (
      <Modal
        backdropColor="null"
        onBackButtonPress={() => updateModalValue('CustomerSupport', false)}
        animationInTiming={500}
        animationOutTiming={500}
        isVisible={modal.CustomerSupport}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <KeyboardAwareScrollView>
          <ModalContent {...this.props} />
        </KeyboardAwareScrollView>
      </Modal>
    );
  }
}

CustomerSupport.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};

export default CustomerSupport;
