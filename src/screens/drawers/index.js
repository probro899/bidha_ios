import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Spinner } from 'native-base';
import Primary from './Primary';
import Secondary from './Secondary';
import * as actions from '../../actions';

class index extends Component {
  state={ renderMenu: true };

  async componentWillMount() {
    this.setState({ renderMenu: false });
  }

  render() {
    // console.log('settings props', this.props);
    const { renderMenu } = this.state;
    const { drawer, main } = this.props;

    if (drawer.title === 'Menu') {
      return (
        main.drawer ? <Primary headerTitle={drawer.title} {...this.props} /> : null
      );
    }
    return (
      <Secondary headerTitle={drawer.title} {...this.props} />
    );
  }
}

const mapStateToProps = ({ drawer, main }) => ({ drawer, main });

export default connect(mapStateToProps, { ...actions })(index);
index.propTypes = {
  drawer: PropTypes.objectOf(PropTypes.any).isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
