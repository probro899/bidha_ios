import React, { Component } from 'react';
import { View, Accordion } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
import { renderHeaderHelper, renderContentHelper } from './AcordionComponents';
import { dataArray } from './question';

class index extends Component {
  state = {};

  render() {
    const { updateMessage, updateModalValue } = this.props;
    return (
      <View>
        <Accordion
          headerStyle={{ backgroundColor: '#fff' }}
          renderHeader={renderHeaderHelper}
          renderContent={content => renderContentHelper(content, updateMessage, updateModalValue)}
          dataArray={dataArray}
          expended={0}
        />
      </View>
    );
  }
}
index.propTypes = {
  updateMessage: PropTypes.func.isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
export default connect(null, { ...actions })(index);
