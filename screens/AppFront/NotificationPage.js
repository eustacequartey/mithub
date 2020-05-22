import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Header } from '~/components/common';
import { Notification } from '~/components/notifications/';

const NotificationPage = (props) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.contentStyle}>
        <View style={styles.headerStyle}>
          <Header routeName={props.route.name} />
        </View>
        <View style={[styles.bodyStyle, { borderTopWidth: '.5rem' }]}>
          <ScrollView style={{ flex: 1 }}>
            <Notification action="commit" />
            <Notification action="pull" />
            <Notification action="commit" />
            <Notification action="pull" />
            <Notification action="commit" />
            <Notification action="commit" />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#EFF0F5',
  },
  contentStyle: {
    flex: 1,
  },
  headerStyle: {
    flex: 1.2,
    paddingLeft: 20,
    paddingRight: 30,
  },
  bodyStyle: {
    flex: 8,
    backgroundColor: '#fff',
    borderColor: '#C6C6C8',
  },
});
