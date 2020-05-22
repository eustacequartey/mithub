import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Platform, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { AppContext } from '~/context/context';

const GetStartedPage = (props) => {
  const Context = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.CenterViewStyle}>
        <View style={styles.ImageViewStyle}>
          <Image source={require('../../assets/images/github-plus-dark.png')} style={styles.ImageStyle} />
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.SignInStyle}
          onPress={() => {
            pseudoLogin();
          }}
        >
          {loading ? (
            <View>
              <ActivityIndicator size="small" color="#fff" />
            </View>
          ) : (
            <Text style={styles.SignInTextStyle}>Sign in</Text>
          )}
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

  function pseudoLogin() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Context.toggleLogIn();
    }, 1000);
  }
};

export default GetStartedPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f4f6fa',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignInTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
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
