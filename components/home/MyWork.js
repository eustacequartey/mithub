import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import MyWorkTab from './MyWorkTab';

const MyWork = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerStyle}>My Work</Text>
      <View>
        <MyWorkTab
          Image={() => <Image source={require('~/assets/images/issues.png')} style={{ width: 20, height: 20 }} />}
          title="Issues"
          position="top"
          color="#33D058"
        />
        <MyWorkTab
          Image={() => <Image source={require('~/assets/images/pull.png')} style={{ width: 20, height: 20 }} />}
          title="Pull Requests"
          color="#2188FF"
        />
        <MyWorkTab
          Image={() => <Image source={require('~/assets/images/repo.png')} style={{ width: 20, height: 20 }} />}
          title="Repositories"
          color="#8A62D2"
        />

        <MyWorkTab
          Image={() => <Image source={require('~/assets/images/people.png')} style={{ width: 20, height: 20 }} />}
          title="Organizations"
          position="bottom"
          color="#FA8531"
        />
      </View>
    </View>
  );
};

export default MyWork;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 20,
  },
  headerStyle: {
    fontWeight: '600',
    fontSize: 25,
    paddingVertical: 10,
  },
});
