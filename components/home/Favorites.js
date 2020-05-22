import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Link } from '../common';

const Favorites = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerStyle}>Favorites</Text>
        <Link style={{ fontSize: 18 }}>Edit</Link>
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: 17, textAlign: 'center', paddingBottom: 15, fontWeight: '300' }}>
          Add favorite repositories here to have quick access at any time, without having to search
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: '#ffffff', paddingVertical: 13, borderRadius: 5, alignItems: 'center' }}
        >
          <Text style={{ fontSize: 17, fontWeight: '600' }}>Add Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Favorites;

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#D6D7DB',
    width: '100%',
    paddingVertical: 25,
    borderRadius: 10,
    paddingHorizontal: 25,
  },
});
