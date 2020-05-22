import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const MyWork = ({ position, title, Image, color }) => {
  const radiusObjectLeft = {
    borderTopStartRadius: position === 'top' ? 15 : 0,
    borderBottomStartRadius: position === 'bottom' ? 15 : 0,
  };

  const radiusObjectRight = {
    borderTopEndRadius: position === 'top' ? 15 : 0,
    borderBottomEndRadius: position === 'bottom' ? 15 : 0,
  };

  return (
    <TouchableOpacity activeOpacity={0.1} style={styles.wrapper}>
      <View style={[styles.leftStyle, radiusObjectLeft]}>
        <View
          style={{
            backgroundColor: color,
            flex: 1,
            marginRight: 5,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image />
        </View>
      </View>
      <View style={[styles.rightStyle, radiusObjectRight, { borderBottomWidth: position === 'bottom' ? 0 : '.5rem' }]}>
        <Text style={styles.rightTextStyle}>{title}</Text>
        <AntDesign name="right" size={15} color="#D6D6D6" />
      </View>
    </TouchableOpacity>
  );
};

export default MyWork;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
  },
  leftStyle: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 11,
    paddingLeft: 20,
  },
  rightStyle: {
    flex: 8,
    paddingVertical: 18,
    backgroundColor: '#fff',
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#C6C6C8',
    paddingLeft: 15,
  },
  rightTextStyle: {
    fontSize: 17,
    fontWeight: '400',
  },
});
