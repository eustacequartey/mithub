import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import Colors from '~/constants/Colors';

const Link = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.wrapper}
      onPress={() => {
        onPress ? onPress() : Alert.alert('pressed');
      }}
    >
      <Text style={[styles.Text, { ...style }]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  wrapper: {},
  Text: {
    ...Platform.select({
      ios: {
        color: '#007AFF',
      },
      android: {
        color: '#000000',
      },
    }),
  },
});
