import React from 'react';
import PropTypes from 'prop-types';
import { Item, Label, Input } from 'native-base';

const CustomInput = ({ content, registerForm, updateFormValue, schema }) => {

  return (
    <Item floatingLabel last={content.last === 'last'}>
      <Label>{content.label}</Label>
      <Input
        secureTextEntry={(content.value === 'password') || (content.value === 'cpassword')}
        value={registerForm[schema][content.value]}
        onChangeText={text => updateFormValue(schema, { [content.value]: text })}
      />
    </Item>
  );
};

CustomInput.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
  schema: PropTypes.string.isRequired,
};

export default CustomInput;
