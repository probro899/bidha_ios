import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Card } from 'native-base';
import Header from './Header';
import * as actions from '../../../actions';
import Form from '../../../common/Form';
import contactUsStructure from './contactUsStructure';
import InternetInfoShow from '../../../common/ShowInternetConnectionInfo';

class ContactUs extends Component {

  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    return (
      <Container>
        <Header {...this.props} />
        <InternetInfoShow {...this.props} />
        <Content>
          <Card style={{ padding: 10, marginLeft: 20, marginRight: 20, marginTop: 20, width: 'auto', height: 'auto', paddingBottom: 30 }}>
            <Form schema="contactUsMessage" contents={contactUsStructure()} {...this.props} />
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ registerForm }) => ({ registerForm });

export default connect(mapStateToProps, { ...actions })(ContactUs);
