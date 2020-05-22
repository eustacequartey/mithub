import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage, Profile } from '~/screens/AppFront/';

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
          title: 'Profile',
          headerTitleAlign: 'center',
          headerBackTitle: ' ',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0.5,
            backgroundColor: '#fff',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            textAlign: 'center',
            color: '#000',
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Navigator>
  );
};

export default index;
