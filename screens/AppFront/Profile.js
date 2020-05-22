import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { Summary, Popular, Ordner } from '~/components/profile/';

const Profile = () => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <View style={styles.wrapper}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />}>
        <View style={styles.summaryWrapper}>
          <Summary />
        </View>
        <View style={styles.bodyWrapper}>
          <Popular />
          <Ordner />
        </View>
      </ScrollView>
    </View>
  );

  function _onRefresh() {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }
};

export default Profile;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#EFF0F5',
  },
  summaryWrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderBottomColor: '#C6C6C8',
    borderBottomWidth: 0.3,
  },
  bodyWrapper: {
    backgroundColor: '#fff',
    marginVertical: 20,
    borderTopWidth: 0.3,
    borderColor: '#C6C6C8',
  },
});
