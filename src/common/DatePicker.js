import React from 'react';
import {
  View, Text, Input,
} from 'native-base';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';

const CustomDatePicker = ({ registerForm, updateFormValue, content, schema }) => (
  <View style={{
    flexDirection: 'row',
    marginTop: 10,
    margin: 5,
    backgroundColor: '#f5f5f5',
    borderWidth: 0.5,
    borderColor: '#757575',
  }}
  >
    <View style={{ flex: 0.2, justifyContent: 'center', marginLeft: 10 }}>
      <Text style={{ fontSize: 15 }}>{`${content.label} :`}</Text>
    </View>
    <DatePicker
      style={{ flex: 0.4 }}
      mode="date"
      placeholder="Select date"
      format="YYYY/MM/DD"
      minDate="1960-1-1"
      date={registerForm[schema].dob}
      maxDate="2060-1-1"
      customStyles={{
        dateInput: {
          justifyContent: 'center',
          alignItems: 'flex-start',
          borderWidth: 0,
        },
        dateText: { color: 'green', fontSize: 10 },
      }}
      confirmBtnText="Ok"
      cancelBtnText="cancel"
      onDateChange={date => updateFormValue(schema, { [content.value]: date })}
    />
    <View style={{ flex: 0.4, backgroundColor: 'white' }}>
      <Input
        placeholder="Time (23:35)"
        value={registerForm[schema].time}
        onChangeText={text => updateFormValue(schema, { time: text })}
      />
    </View>
  </View>
);
CustomDatePicker.propTypes = {
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  schema: PropTypes.string.isRequired,
};

export default CustomDatePicker;
