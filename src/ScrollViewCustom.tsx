import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type scrollProps = {
  children: React.ReactNode;
};
const ScrollViewCustom = (props: scrollProps) => {
  return <ScrollView>{props.children}</ScrollView>;
};

export default ScrollViewCustom;

const styles = StyleSheet.create({});
