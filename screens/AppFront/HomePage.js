import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import { Header } from '~/components/common';
import { MyWork, Favorites, Recent } from '~/components/home/';

const HomePage = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.contentStyle}>
        <View style={styles.headerStyle}>
          <Header routeName={props.route.name} navigation={props.navigation} />
        </View>
        <View style={styles.bodyStyle}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />}
          >
            <MyWork />
            <Favorites />
            <Recent />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
  function _onRefresh() {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }
};

export default HomePage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#EFF0F5',
  },
  contentStyle: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerStyle: {
    flex: 1.2,
  },
  bodyStyle: {
    flex: 8,
    // borderWidth: 1,
  },
});
