import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'native-base';
import AstrologerListView from './AstrologyListView';

class index extends Component {
  state = {};

  render() {
    const { data } = this.props;
    return (
      <List>
        {(data && data.length > 0) ? data.map(astrologer => <AstrologerListView key={astrologer.id} astrologer={astrologer} />) : null}
      </List>
    );
  }
}

export default index;
index.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
