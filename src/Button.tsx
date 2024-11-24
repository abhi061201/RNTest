import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({label, onPress}: {label: string; onPress: () => void}) => (
  <TouchableOpacity onPress={onPress}>
    <Text>Hello</Text>
  </TouchableOpacity>
);

export default Button;
