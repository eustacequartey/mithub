import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Link } from '~/components/common';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RecentSearches = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerStyle}>Recent searches</Text>
        <Link style={{ fontSize: 18 }}>Clear</Link>
      </View>
      <View style={styles.body}>
        <RecentSearch term="mut" />
        <RecentSearch term="urlaub" />
      </View>
    </View>
  );
};

const RecentSearch = ({ term }) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#C6C6C8',
        borderBottomWidth: 0.5,
      }}
    >
      <View>
        <Text style={styles.termStyle}>{term}</Text>
      </View>
      <View>
        <MaterialCommunityIcons name="arrow-top-left" size={18} color="#C6C6C8" />
      </View>
    </View>
  );
};

export default RecentSearches;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingTop: 40,
  },
  headerStyle: {
    fontWeight: '500',
    fontSize: 25,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  body: {
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: '#C6C6C8',
  },
  termStyle: {
    fontSize: 18,
    color: '#7f7f7f',
  },
});
