import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type MockExtype = {
  val: string;
  onSelectedItem: () => void;
  bool: boolean;
};
const MockEx = (props: MockExtype) => {
  return (
    <View>
      <Text>{props.val}</Text>
      <Button onPress={props.onSelectedItem} title={props.val}></Button>
      <Text>{props.val ? 'true' : 'false'}</Text>
    </View>
  );
};

export default MockEx;

const styles = StyleSheet.create({});
