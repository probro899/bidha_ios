import React from 'react';
import PropTypes from 'prop-types';
import { Textarea } from 'native-base';

const CustomTextArea = ({ registerForm, content, updateFormValue, schema }) => {
  return (
    <Textarea
      style={{ margin: 10, marginTop: 30 }}
      rowSpan={5}
      bordered
      placeholder={content.label}
      value={registerForm[schema][content.value]}
      onChangeText={text => updateFormValue(schema, { [content.value]: text })}
    />
  );
};

CustomTextArea.propTypes = {
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
  schema: PropTypes.string.isRequired,
};

export default CustomTextArea;
