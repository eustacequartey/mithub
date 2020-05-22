import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';

const Notification = ({ action }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.left}>
        {action === 'pull' ? (
          <Ionicons name="ios-git-pull-request" size={24} color="#429952" />
        ) : (
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="ios-git-commit" size={20} color="#0067DD" />
            <Octicons name="primitive-dot" size={20} color="#0067DD" />
          </View>
        )}
      </View>

      <View style={styles.right}>
        <View style={styles.rightInnerLeft}>
          <Text style={{ paddingVertical: 2, fontWeight: '400', fontSize: 16, color: '#7f7f7f' }}>
            eustacequartey / e-shenanigans-mdx
          </Text>
          <Text style={{ paddingVertical: 2, fontWeight: '700' }}>fix: progressbar line height</Text>
          <Image source={require('~/assets/images/notifications/zeit_logo.png')} style={{ height: 15, width: 15 }} />
        </View>
        <View style={styles.rightInnerRight}>
          <Text style={{ color: '#7f7f7f' }}>9d</Text>
          <View
            style={{
              paddingVertical: 4,
              paddingHorizontal: 8,
              borderRadius: 2.5,
              backgroundColor: '#EAF3FA',
              borderWidth: 0.5,
              borderColor: '#8FB1D7',
              marginTop: 5,
            }}
          >
            <Text style={{ color: '#5884A9' }}>1</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  right: {
    flex: 10,
    borderBottomWidth: 0.5,
    borderColor: '#C6C6C8',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  rightInnerLeft: {
    flex: 8,
  },
  rightInnerRight: {
    flex: 1,
    paddingRight: 20,
    alignItems: 'center',
  },
});
