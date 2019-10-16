import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'native-base';
import Astrologers from './astrologers';

class index extends Component {
  state = {};

  renderContent = (content, data, navigationOptions) => {
    switch (content.replace(/\s+/g, '')) {
      case 'Astrologers':
        return data ? <Astrologers data={data} key={data.title} /> : null;
      case 'Ideawhattoask':
        return <IdeaWhatToAsk navigationOptions={navigationOptions} />;
      default:
        return null;
    }
  }

  render() {
    const { content, navigationOptions, main } = this.props;
    return (
      <View>
        { this.renderContent(content, main.astrologerList, navigationOptions) }
      </View>
    );
  }
}

index.defaultProps = {
  navigationOptions: {},
};

index.propTypes = {
  content: PropTypes.string.isRequired,
  navigationOptions: PropTypes.objectOf(PropTypes.any),
  main: PropTypes.PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(index);
