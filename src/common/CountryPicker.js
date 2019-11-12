import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import CountryPicker from 'react-native-country-picker-modal';

class CustomCountryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPickerContent = () => {
    const { registerForm } = this.props;
    const renderComponent = registerForm.userProfile.country
      ? <Text style={{ color: 'green' }}>{registerForm.userProfile.country}</Text>
      : <Text style={{ color: '#BDBDBD' }}>Select country</Text>;
    return renderComponent;
  }

  render() {
    const { updateFormValue } = this.props;
    return (
      <View style={{
        flexDirection: 'row',
        marginTop: 10,
        margin: 5,
        backgroundColor: '#f5f5f5',
        borderWidth: 0.5,
        borderColor: '#757575',
        height: 40,
      }}
      >
        <View style={{ flex: 0.3, justifyContent: 'center', marginLeft: 10 }}>
          <Text style={{ fontSize: 15 }}>
            Country:
          </Text>
        </View>
        <View style={{ flex: 0.7, justifyContent: 'center' }}>
          <CountryPicker
            styles={{ flex: 1, justifyContent: 'center' }}
            cca2="US"
            onChange={value => updateFormValue('userProfile', { country: value.name })}
            filterPlaceholder="Enter country name...."
            translation="eng"
            filterable
            closeable
          >
            {this.renderPickerContent()}
          </CountryPicker>
        </View>
      </View>
    );
  }
}

CustomCountryPicker.propTypes = {
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
}
export default CustomCountryPicker;
