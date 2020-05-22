import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Link } from '../common';

const Recent = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerStyle}>Recent</Text>
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: 17, textAlign: 'center' }}>
          Issues and Pull Requests that you've interacted with recently will appear here.
        </Text>
      </View>
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingVertical: 15,
  },
  headerStyle: {
    fontWeight: '600',
    fontSize: 25,
    paddingVertical: 10,
  },
  header: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  body: {
    backgroundColor: '#D6D7DB',
    width: '100%',
    paddingVertical: 25,
    borderRadius: 10,
    paddingHorizontal: 25,
  },
});
