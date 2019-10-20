import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as actions from '../../../actions';
import ModalHeader from './Header';
import ModalContent from './Content';
import ShowInternetConnectionInfo from '../../../common/ShowInternetConnectionInfo';

import { SCREEN_HEIGHT } from '../../../config';

class BirthProfile extends Component {
  state = {};

  render() {
    const { modal, updateModalValue } = this.props;
    return (
      <Container style={{ height: SCREEN_HEIGHT }}>
        <ModalHeader {...this.props} />
        <Content>
          <ShowInternetConnectionInfo {...this.props} />
          <KeyboardAwareScrollView>
            <ModalContent {...this.props} />
          </KeyboardAwareScrollView>
        </Content>
      </Container>
    );
  }
}

const mapStateProps = state => state;
export default connect(mapStateProps, {...actions})(BirthProfile);

BirthProfile.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
