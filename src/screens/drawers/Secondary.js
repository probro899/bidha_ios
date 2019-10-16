import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import { DrawerHeader } from '../../components/drawer_menu';
import { header } from './SecondaryStructure';
import SecondaryContent from '../../components/drawer_menu/drawer_content/secondary';

const titleMessage =  `Please join hands today with the team of our pro astrologer with
the history of years of research who are capable of guiding you
towards the right direction, decision and steps in life. They are available
for you 24/7.`;

class Secondary extends Component {

  state = {};

  render() {
    const { title, navigation } = this.props;
    return (
      <Container>
        <DrawerHeader header={header(title, titleMessage)} {...this.props} />
        <Content>
          <SecondaryContent content={title} navigationOptions={navigation} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ drawer }) => drawer;

export default connect(mapStateToProps)(Secondary);

Secondary.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
