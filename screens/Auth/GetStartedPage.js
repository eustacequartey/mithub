import React from 'react';
import { View, Text, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const GetStartedPage = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.CenterViewStyle}>
        <View style={styles.ImageViewStyle}>
          <Image source={require('../../assets/images/github-plus-dark.png')} style={styles.ImageStyle} />
        </View>
        <TouchableOpacity activeOpacity={1} style={styles.SignInStyle}>
          <Text style={styles.SignInTextStyle}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TermsViewStyle}>
        <Text style={styles.TermsStyle}>By signing in you accept our </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            WebBrowser.openBrowserAsync('https://help.github.com/en/github/site-policy/github-terms-of-service')
          }
        >
          <Text style={styles.ButtonLinks}>Terms of use </Text>
        </TouchableOpacity>
        <Text>and </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            WebBrowser.openBrowserAsync('https://help.github.com/en/github/site-policy/github-privacy-statement')
          }
        >
          <Text style={styles.ButtonLinks}>Privacy Policy.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStartedPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingVertical: 50,
  },
  CenterViewStyle: {
    marginTop: 'auto',
  },
  ImageViewStyle: {
    marginVertical: 30,
  },
  ImageStyle: {
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  SignInStyle: {
    backgroundColor: 'black',
    width: '100%',
    paddingVertical: 20,
    borderRadius: 5,
  },
  SignInTextStyle: {
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '600',
  },
  TermsViewStyle: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  TermsStyle: {
    justifyContent: 'center',
  },
  ButtonLinks: {
    ...Platform.select({
      ios: {
        color: '#007AFF',
      },
      android: {
        color: '#000000',
      },
    }),
  },
});
