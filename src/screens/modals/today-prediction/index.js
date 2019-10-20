import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import ModalContent from './Content';

class WhyVedicAstrology extends Component {
  state = {};

  render() {
    const { modal, updateModalValue } = this.props;
    return (
      <Modal
        backdropColor="null"
        animationInTiming={500}
        onBackButtonPress={() => updateModalValue('TodayPrediction', false)}
        animationOutTiming={500}
        isVisible={modal['TodayPrediction']}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <ModalContent {...this.props} />
      </Modal>
    );
  }
}

WhyVedicAstrology.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
}
export default WhyVedicAstrology;
