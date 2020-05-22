import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Keyboard } from 'react-native';
import { Header, Link } from '~/components/common';
import { RecentSearches, WithTerm } from '~/components/search';
import { Octicons } from '@expo/vector-icons';

const SearchPage = (props) => {
  const [term, setTerm] = useState('');
  const [editing, setEditing] = useState(false);
  return (
    <View style={styles.wrapper}>
      <View style={[styles.contentStyle, { paddingTop: editing ? 0 : 40 }]}>
        {editing === false && (
          <View style={styles.headerStyle}>
            <Header routeName={props.route.name} />
          </View>
        )}

        <View style={styles.bodyStyle}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderColor: '#C6C6C8',
              borderBottomWidth: editing ? 0.5 : 0,
              backgroundColor: editing ? '#fff' : 'transparent',
              paddingTop: editing ? 50 : 0,
              paddingBottom: editing ? 10 : 0,
            }}
          >
            <View style={styles.searchBar}>
              <Octicons name="search" size={15} color="#7f7f7f" style={{ paddingRight: 10 }} />
              <TextInput
                style={styles.textInputStyle}
                placeholder={'Search'}
                value={term}
                onChangeText={(e) => {
                  setEditing(true);
                  setTerm(e);
                }}
                onFocus={(e) => setEditing(true)}
                clearButtonMode="while-editing"
              />
            </View>
            {editing && (
              <View
                style={{
                  flex: 1.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingRight: 5,
                  paddingLeft: 0,
                  marginLeft: -20,
                }}
              >
                <Link
                  style={{ fontSize: 20 }}
                  onPress={() => {
                    setEditing(false);
                    Keyboard.dismiss();
                  }}
                >
                  Cancel
                </Link>
              </View>
            )}
          </View>
          <View>{term === '' ? <RecentSearches /> : <WithTerm term={term} />}</View>
        </View>
      </View>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentStyle: {
    flex: 1,
    backgroundColor: '#EFF0F5',
    paddingTop: 40,
  },
  headerStyle: {
    flex: 1.2,
    paddingHorizontal: 20,
  },
  bodyStyle: {
    flex: 8,
    borderColor: '#C6C6C8',
  },
  searchBar: {
    paddingHorizontal: 8,
    backgroundColor: '#E0E1E6',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 8,
    marginBottom: 5,
    flex: 7,
  },
  textInputStyle: {
    fontSize: 20,
    flexGrow: 1,
    borderRadius: 10,
    color: '#7f7f7f',
  },
});
