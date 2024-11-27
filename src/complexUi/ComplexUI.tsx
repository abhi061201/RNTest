import {View, Text, Image, Button, ImageSourcePropType} from 'react-native';
import React from 'react';

type ComplexUIProps = {
  press1: () => void;
  press2?: () => void;
  press1Title: string;
  press2Title?: string;
  title: string;
  image: ImageSourcePropType;
};
const ComplexUI = (props: ComplexUIProps) => {
  return (
    <View>
      <Text>{props.title}</Text>

      <Button onPress={props.press1} title={props.press1Title}></Button>
      {props.press2Title && (
        <Button onPress={props.press2} title={props.press2Title}></Button>
      )}

      <Image source={props.image}></Image>
    </View>
  );
};

export default ComplexUI;
