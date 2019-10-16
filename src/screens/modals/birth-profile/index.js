import React, { Component } from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalHeader from './Header';
import ModalContent from './Content';
import ShowInternetConnectionInfo from '../../../common/ShowInternetConnectionInfo';

class BirthProfile extends Component {
  state = {};

  render() {
    const { modal, updateModalValue } = this.props;
    return (
      <Modal
        backdropColor="null"
        onBackButtonPress={() => updateModalValue('showProfileModal', false)}
        isVisible={modal.showProfileModal}
        animationInTiming={500}
        animationOutTiming={500}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <ModalHeader {...this.props} />
        <ShowInternetConnectionInfo {...this.props} />
        <KeyboardAwareScrollView>
          <ModalContent {...this.props} />
        </KeyboardAwareScrollView>
      </Modal>
    );
  }
}

export default BirthProfile;
BirthProfile.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
