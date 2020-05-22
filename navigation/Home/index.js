import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage, Profile } from '~/screens/AppFront/';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { AntDesign, Feather, EvilIcons } from '@expo/vector-icons';

const { Navigator, Screen } = createStackNavigator();

const index = () => {
  return (
    <Navigator
      screenOptions={{
        // headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName="Home"
    >
      <Screen options={{ headerShown: false }} name="Home" component={HomePage} />
      <Screen
        options={{
          title: '',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0.5,
            backgroundColor: '#fff',
          },
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
              <EvilIcons name="gear" style={styles.iconStyle} />
              <TouchableOpacity onPress={onShare}>
                <EvilIcons name="share-apple" style={styles.iconStyle} />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
              <AntDesign name="left" color="#216EDA" size={20} />
              <Text style={styles.headerTextStyle}>Home</Text>
            </View>
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Navigator>
  );

  async function onShare() {
    try {
      const result = await Share.share({
        message: 'Guten morgen | Sent from my github clone 😘',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }
};

export default index;

const styles = StyleSheet.create({
  headerLeftStyle: {},
  iconStyle: {
    color: '#216EDA',
    fontSize: 30,
  },
  headerTextStyle: {
    color: '#216EDA',
    fontSize: 20,
  },
});
