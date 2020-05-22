import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '~/constants/Colors';

const Header = ({ routeName = 'Oben', navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.upperStyle}>
        <View style={styles.homeUpperStyle}>
          <View>
            {routeName.toLowerCase() === 'home' && (
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                  source={require('../../assets/images/avatar.png')}
                  style={{ width: 20, height: 20, borderRadius: 10 }}
                />
              </TouchableOpacity>
            )}
          </View>
          <View>
            {routeName.toLowerCase() === 'home' && (
              <AntDesign name={'pluscircleo'} size={20} color={Colors.tintColor} />
            )}
            {routeName.toLowerCase() === 'inbox' && (
              <MaterialCommunityIcons name={'filter-variant'} size={25} color={Colors.tintColor} />
            )}
          </View>
        </View>
      </View>
      <View style={styles.lowerStyle}>
        <Text style={styles.routeStyle}>{routeName}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 10,
  },
  upperStyle: {
    flex: 1,
  },
  lowerStyle: {
    flex: 1,
  },
  routeStyle: {
    fontSize: 40,
    fontWeight: '700',
  },
  homeUpperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
