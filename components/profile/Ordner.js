import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Item = ({ itemName, count }) => {
  return (
    <TouchableOpacity style={styles.itemWrapper}>
      <View>
        <Text style={{ fontSize: 17 }}>{itemName}</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Text style={{ color: '#7f7f7f', fontSize: 18 }}>{count}</Text>
        <AntDesign name="right" size={18} color="#7f7f7f" style={styles.iconStyle} />
      </View>
    </TouchableOpacity>
  );
};

const Ordner = () => {
  return (
    <View style={styles.wrapper}>
      <Item itemName="Repositories" count={47} />
      <Item itemName="Starred" count={8} />
      <Item itemName="Organizations" count={0} />
    </View>
  );
};

export default Ordner;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 20,
  },
  itemWrapper: {
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderColor: '#C6C6C8',
    paddingRight: 20,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    paddingLeft: 10,
  },
});
