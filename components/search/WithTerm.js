import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Link } from '~/components/common';
import { MaterialCommunityIcons, Octicons, Ionicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';

const WithTerm = ({ term }) => {
  return (
    <View style={styles.wrapper}>
      <With
        term={term}
        prefix="Repositories with"
        Icon={() => (
          <MaterialCommunityIcons name="source-repository" size={18} color="black" style={{ alignSelf: 'center' }} />
        )}
      />

      <With
        term={term}
        prefix="Issues with"
        Icon={() => <Octicons name="issue-opened" size={18} color="black" style={{ alignSelf: 'center' }} />}
      />

      <With
        term={term}
        prefix="Pull Requests with"
        Icon={() => <Ionicons name="ios-git-pull-request" size={18} color="black" style={{ alignSelf: 'center' }} />}
      />

      <With
        term={term}
        prefix="People with"
        Icon={() => <Ionicons name="ios-person" size={18} color="black" style={{ alignSelf: 'center' }} />}
      />

      <With
        term={term}
        prefix="Organizations with"
        Icon={() => <SimpleLineIcons name="people" size={18} color="black" style={{ alignSelf: 'center' }} />}
      />

      <With
        term={term}
        prefix="Jump to"
        Icon={() => <Ionicons name="ios-return-right" size={18} color="black" style={{ alignSelf: 'center' }} />}
      />
    </View>
  );
};

const With = ({ term, prefix, Icon }) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#fff',
        paddingLeft: 20,
        flexDirection: 'row',
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon />
      </View>

      <View
        style={{
          flex: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 0.5,
          borderColor: '#C6c6c8',
          paddingVertical: 15,
          paddingRight: 20,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
          <Text style={styles.termStyle}>
            {prefix} "{term}"
          </Text>
          <AntDesign name="right" size={18} color="#C6c6c8" />
        </View>
      </View>
    </View>
  );
};

export default WithTerm;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#C6c6c8',
  },
  headerStyle: {
    fontWeight: '500',
    fontSize: 25,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  body: {
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: '#C6C6C8',
  },
  termStyle: {
    fontSize: 18,
    color: '#7f7f7f',
  },
});
