import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'native-base';
import touchableElement from './touchableElement';
import staticElement from './staticElement';
import separatorElement from './separatorElement';
import * as actions from '../../../../actions';

const contentElement = (content, idx, props) => {
  switch (content.element) {
    case 'static':
      return staticElement(content, idx);
    case 'touchable':
      return touchableElement(content, idx, props);
    case 'separator':
      return separatorElement(content, idx);
    default:
      return null;
  }
};

const DrawerContent = (props) =>  {
  const { contents } = props;
  return (
    <View>
      {contents.map((content, idx) => contentElement(content, idx, props))}
    </View>
  );
};

DrawerContent.defaultProps = {
  contents: [],
};

DrawerContent.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.any),
};

const mapStateToProps = ({ drawer }) =>  {
  return drawer;
};

export default connect(mapStateToProps, { ...actions })(DrawerContent);
