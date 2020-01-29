/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Primary from './Primary';
import Secondary from './Secondary';
import * as actions from '../../actions';

class index extends Component {
  state={};

  render() {
    const { drawer, main } = this.props;
    return (
      <Primary headerTitle={drawer.title} {...this.props} />
    );
  }
}

const mapStateToProps = ({ drawer, main }) => ({ drawer, main });

export default connect(mapStateToProps, { ...actions })(index);
index.propTypes = {
  drawer: PropTypes.objectOf(PropTypes.any).isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
 