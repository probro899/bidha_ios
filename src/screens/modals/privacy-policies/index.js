import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import ModalContent from './Content';

class PrivacyPolicy extends Component {
  state = {};

  render() {
    const { modal, updateModalValue } = this.props;
    return (
      <Modal
        backdropColor="null"
        animationInTiming={500}
        onBackButtonPress={() => updateModalValue('PrivacyPolicy', false)}
        animationOutTiming={500}
        isVisible={modal['PrivacyPolicy']}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <ModalContent {...this.props} />
      </Modal>
    );
  }
}

PrivacyPolicy.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
export default PrivacyPolicy;
