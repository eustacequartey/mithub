import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Link } from '~/components/common/';

const Summary = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.profileWrapper}>
        <View style={{ flex: 1, paddingRight: 10 }}>
          <Image source={require('../../assets/images/avatar.png')} style={styles.imageStyle} />
        </View>
        <View style={{ flex: 5 }}>
          <View>
            <Text style={styles.nameStyle}>Eseku</Text>
          </View>
          <View>
            <Text style={styles.userNameStyle}>eustacequartey</Text>
          </View>
        </View>
      </View>
      <View style={styles.bioWrapper}>
        <Text style={styles.bioStyle}>code enthusiast</Text>
      </View>
      <View style={styles.infoWrapper}>
        <View style={styles.linkWrapper}>
          <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'flex-start' }}>
            <Ionicons name="ios-link" size={15} color="#7f7f7f" style={styles.iconStyle} />
          </View>
          <View style={{ flex: 10 }}>
            <Link style={{ color: '#000', fontWeight: '500', fontSize: 16 }}>https://eus.now.sh</Link>
          </View>
        </View>
        <View style={styles.metaWrapper}>
          <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'flex-start' }}>
            <AntDesign name="user" size={15} color="#7f7f7f" style={styles.iconStyle} />
          </View>
          <View style={{ flex: 10 }}>
            <Text>
              21 {<Text style={styles.meta}>followers</Text>} . 21 {<Text style={styles.meta}>following</Text>}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingVertical: 20,
  },
  bioWrapper: {
    paddingVertical: 10,
  },
  bioStyle: {
    fontSize: 17,
  },
  linkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  metaWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    height: 55,
    width: 55,
    // borderRadius: 15,
  },
  nameStyle: {
    fontSize: 25,
    fontWeight: '700',
  },
  userNameStyle: {
    color: '#7f7f7f',
    fontSize: 18,
  },
  infoWrapper: {
    paddingTop: 10,
  },
  meta: {
    color: '#7f7f7f',
  },
});
