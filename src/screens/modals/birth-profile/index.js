import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as actions from '../../../actions';
import ModalHeader from './Header';
import ModalContent from './Content';
import ShowInternetConnectionInfo from '../../../common/ShowInternetConnectionInfo';
import { View } from 'native-base';

class BirthProfile extends Component {
  state = {};

  render() {
    const { modal, updateModalValue } = this.props;
    return (
      <View>
        <ModalHeader {...this.props} />
        <ShowInternetConnectionInfo {...this.props} />
        <KeyboardAwareScrollView>
          <ModalContent {...this.props} />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateProps = state => state;
export default connect(mapStateProps, {...actions})(BirthProfile);

BirthProfile.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
