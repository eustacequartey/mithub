import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '~/components/TabBarIcon';
import TabBarLabel from '~/components/TabBarLabel';
import { HomePage, SearchPage, NotificationPage } from '~/screens/AppFront/';
import Home from '../Home/';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        style: {
          backgroundColor: '#FCFCFE',
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          title: 'Home',
          tabBarLabel: (props) => <TabBarLabel {...props} name={route.name} />,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        })}
      />

      <BottomTab.Screen
        name="Inbox"
        component={NotificationPage}
        options={{
          title: 'Notifications',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-notifications" />,
        }}
      />

      <BottomTab.Screen
        name="Search"
        component={SearchPage}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
