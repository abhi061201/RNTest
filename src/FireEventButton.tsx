import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FireEventButton = ({onSelectedItem}: {onSelectedItem: () => void}) => {
  return (
    <View>
      <Text>FireEventButton</Text>
      <Button
        testID={'myButton'}
        title="Fire Event"
        onPress={onSelectedItem}></Button>
    </View>
  );
};

export default FireEventButton;

const styles = StyleSheet.create({});
