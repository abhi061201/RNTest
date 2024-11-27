import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';

interface inputCustomProps extends TextInputProps {}
const InputCustom = (props: inputCustomProps) => {
  return (
    <View>
      <TextInput  {...props}></TextInput>
    </View>
  );
};

export default InputCustom;

const styles = StyleSheet.create({});
