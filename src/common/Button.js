import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Text, View, Spinner,
} from 'native-base';
import { APP_TITLE_TEXT_COLOR } from '../config';

const CustomButtom = ({
  content, registerForm, contactUsMessageHandler, schema,
}) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ justifyContent: 'center', alignItems: 'center', height: 50, padding: 10 }}>
      { registerForm[schema].error !== '' ? <Text style={{ color: 'red', position: 'absolute' }}>{registerForm[schema].error}</Text> : null }
      {registerForm[schema].loading ? <Spinner size="large" /> : null}
      {registerForm[schema].success !== '' ? <Text style={{ color: 'green', position: 'absolute' }}>{registerForm[schema].success}</Text> : null }
    </View>
    <Button
      style={{ backgroundColor: APP_TITLE_TEXT_COLOR}}
      full
      onPress={() => contactUsMessageHandler(schema)}
      disabled={!registerForm.userProfile.internetStatus}
    >
      <Text uppercase={false}>{content.label}</Text>
    </Button>
  </View>
);

CustomButtom.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  contactUsMessageHandler: PropTypes.func.isRequired,
  schema: PropTypes.string.isRequired,
};
export default CustomButtom;
