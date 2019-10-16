import React from 'react';
import PropTypes from 'prop-types';
import { Radio, View, Text } from 'native-base';

const RadioGroup = ({ content, registerForm, updateFormValue, schema }) => {
  const renderRadioButtonHelper = contentGroup => contentGroup.map((radio) => {
    const gender = registerForm[schema][radio.key] === radio.value;
    return (
      <View style={{ flexDirection: 'row' }} key={radio.label}>
        <Radio
          style={{ marginRight: 5 }}
          color={gender ? 'green' : '#000'}
          selected={gender}
          selectedColor={gender ? 'green' : '#000'}
          onPress={() => updateFormValue('userProfile', { gender: radio.value })}
        />
        <Text
          style={{
            color: gender ? 'green' : '#000',
            fontSize: 10,
            alignSelf: 'center',
            marginRight: 10,
          }}
        >
          {radio.label}
        </Text>
      </View>
    );
  });

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
      <View style={{
        justifyContent: 'center',
        flex: 0.3,
        marginLeft: 10,
      }}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {`${content.label} :`}
        </Text>
      </View>
      <View style={{
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        flex: 0.7,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
      >
        {renderRadioButtonHelper(content.groupContent)}
      </View>
    </View>
  );
};

RadioGroup.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
  schema: PropTypes.string.isRequired,
};

export default RadioGroup;
