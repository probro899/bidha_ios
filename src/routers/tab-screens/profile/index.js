import React from 'react';
import { View, Text } from 'native-base';
import OldProfile from '../../../screens/modals/birth-profile';

class Profile extends React.Component {
  state={};

  render() {
    return (
      <OldProfile {...this.props} />
    );
  }
}
export default Profile;
