import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';

import LoginButton from '../components/login/LoginButton';
import LoginLogo from '../components/login/LoginLogo';
import { NavigationScreenProps } from 'react-navigation';

class WelcomeScreen extends React.Component<NavigationScreenProps> {

  static navigationOptions = {
    tabBarVisible: false,
  }

  goToLoginPage = () => {
    this.props.navigation.navigate('login');
  }

  render() { 
    return (
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
            <View style={styles.loginButtonContainer}>
              <LoginButton 
                onPressFunction={this.goToLoginPage} 
                extraStyle={{backgroundColor: '#5E50E4', marginBottom: 15}}
                textColor={"#FFFFFF"}
                buttonText="visitor login" />
              <Text style={[styles.loginInfoText, {opacity: 0.6, fontWeight: '500'}]}>
                  already a member?
              </Text>
              <LoginButton 
                onPressFunction={this.goToLoginPage} 
                extraStyle={{backgroundColor: '#FFFFFF', marginTop: 15}}
                textColor={"#363636"}
                buttonText="login" />
            </View>
          </View>
        </View>
      </ImageBackground>
  )}
}

//STYLING
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
  },
  loginButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});

export default WelcomeScreen;