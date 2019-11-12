import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import {
  Thumbnail, Icon, Switch, Button, Spinner,
} from 'native-base';
import PropsTypes from 'prop-types';
import Form from '../../../common/Form';
import ImagePicker from '../../../common/ImagePicker';
import Input from '../../../common/Input';
import CountryPicker from '../../../common/CountryPicker';
import { APP_TITLE_TEXT_COLOR } from '../../../config';

const formContent = [
  {
    element: 'radio-group',
    label: 'Gender',
    groupContent: [
      {
        element: 'radio', label: 'Male', key: 'gender', value: 'male',
      },
      {
        element: 'radio', label: 'Female', value: 'female', key: 'gender',
      },
    ],
  },
  { element: 'date-picker', label: 'DOB', value: 'dob' },
];

class Content extends Component {

  renderUserImage = (registerForm) => {
    const renderComponent = registerForm.userProfile.image
      ? <Thumbnail source={{ uri: `data:image/gif;base64,${registerForm.userProfile.image.data}` }} />
      : <Icon name="contact" style={{ fontSize: 60 }} />;
    return renderComponent;
  }

  saveProfileHelper = (saveBirthdayProfile, checkBirthProfile, navigation) => {
    if (checkBirthProfile(navigation)) {
      saveBirthdayProfile();
    }
  }

  render() {
    const {navigation, updateFormValue, registerForm, updateModalValue, saveBirthdayProfile, checkBirthProfile } = this.props;

    return (
      <View style={{ flex: 1, marginTop: 10, position: 'relative' }}>
        <Text style={{ color: '#757575', marginBottom: 30, alignSelf: 'center' }}>Please fill and save your real birth details...</Text>
        <TouchableOpacity onPress={() => updateModalValue('showImagePickerModal', true)}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10, marginRight: 10 }}>
              {this.renderUserImage(registerForm)}
            </View>
            <View style={{ flex: 1 }}>
              <Input {...this.props} schema="userProfile" content={{ label: 'First Name', value: 'firstName' }} />
            </View>
          </View>
        </TouchableOpacity>
        <Form schema="userProfile" contents={formContent} {...this.props} />
        <ImagePicker {...this.props} />
        <CountryPicker {...this.props} />
        <View style={{ margin: 5 }}>
          <Input {...this.props} schema="userProfile" content={{ label: 'State...', value: 'state' }} />
        </View>
        <View style={{ margin: 5 }}>
          <Input {...this.props} schema="userProfile" content={{ label: 'City...', value: 'city' }} />
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 5,
          margin: 5,
          backgroundColor: '#f5f5f5',
          borderWidth: 0.5,
          borderColor: '#757575',
          height: 40,
        }}
        >
          <View style={{ justifyContent: 'center', marginLeft: 10 }}>
            <Text style={{ fontSize: 15 }}>Accurate Time</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Switch value={registerForm.userProfile.accurateTime === 'true' ? true : registerForm.accurateTime} onValueChange={value => updateFormValue('userProfile', { accurateTime: `${value}` })} />
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 50, padding: 10 }}>
          { registerForm.userProfile.error !== '' ? <Text style={{ color: 'red', position: 'absolute' }}>{registerForm.userProfile.error}</Text> : null }
          {registerForm.userProfile.loading ? <Spinner size="large" /> : null}
          {registerForm.userProfile.success !== '' ? <Text style={{ color: 'green', position: 'absolute' }}>{registerForm.userProfile.success}</Text> : null }
        </View>
        <Button
          full
          onPress={() => this.saveProfileHelper(saveBirthdayProfile, checkBirthProfile, navigation)}
          disabled={!registerForm.userProfile.internetStatus}
          style={{ margin: 5, marginTop: -12, backgroundColor: APP_TITLE_TEXT_COLOR }}
        >
          <Text style={{ color: 'white' }}>Save</Text>
        </Button>
      </View>
    );
  }
}
Content.propTypes = {
  updateFormValue: PropsTypes.func.isRequired,
  registerForm: PropsTypes.objectOf(PropsTypes.any).isRequired,
  updateModalValue: PropsTypes.func.isRequired,
  saveBirthdayProfile: PropsTypes.func.isRequired,
  checkBirthProfile: PropsTypes.func.isRequired,
};
export default Content;
