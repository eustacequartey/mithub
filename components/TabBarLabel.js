import React from 'react';
import { View, Text } from 'react-native';

const TabBarLabel = ({ name, focused }) => {
  return (
    <Text
      style={{
        fontSize: 11,
      }}
    >
      {name}
    </Text>
  );
};

export default TabBarLabel;
