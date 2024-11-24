import {Button, Switch, Text, View} from 'react-native';
import React from 'react';

export const Toggle = ({
  text,
  value,
  handleValueChange,
}: {
  text: string;
  value: boolean;
  handleValueChange: () => void;
}) => {
  return (
    <View>
      <Text>Hello world {text}</Text>
      <Button onPress={handleValueChange} title={text}></Button>
      {value}
    </View>
  );
};
