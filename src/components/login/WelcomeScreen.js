import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

import LoginButton from './LoginButton';
import LoginLogo from './LoginLogo';

const WelcomeScreen = ({ history }) => (
  <ImageBackground 
    source={require('..\\assets\\login-background.png')} 
    style={styles.backgroundImage}>
    <View style={{flex: 1}}>
      <View style={styles.loginScreenRowContainer}>
        <LoginLogo/>
      </View>
      <View style={styles.loginScreenRowContainer}>
        <View style={styles.loginInfoContainer}>
            <Text style={styles.loginInfoText}>
              This app is designed for you. Journey will be your guide.
            </Text> 
        </View>
      </View>
      <View style={styles.loginScreenRowContainer}>
        <LoginButton />
      </View>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  loginInfoText: {
    width:'75%',
    opacity: 0.8,
    textAlign: 'center',
  },
  loginInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginScreenRowContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default WelcomeScreen;