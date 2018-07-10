import React from "react";
import {
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import LoginHeader from "../components/login/LoginHeader";
import LoginInput from "../components/login/LoginInput";
import LoginLogo from "../components/login/LoginLogo";
import { NavigationScreenProps } from 'react-navigation';

const DEVICE_WIDTH = Dimensions.get("window").width;

class LoginScreen extends React.Component<NavigationScreenProps> {

  static navigationOptions = {
    tabBarVisible: false,
  };

  render() {
    return(
      <ImageBackground 
        source={require('..\\assets\\login-background.png')} 
        style={styles.backgroundImage}>

        <LoginHeader navigation={this.props.navigation} />

        {/* USE THIS TO DISMISS KEYBOARD WHEN USER CLICKS ON BACKGROUND */}
        <TouchableWithoutFeedback style={{flex: 1}} onPress={ () => { Keyboard.dismiss() } }>
          <View style={{flex:1}}>
            <KeyboardAvoidingView 
                  style={styles.loginRowContainer}
                  behavior="position" 
                  keyboardVerticalOffset={64} >
              <View style={{flex: 1} }>
                <View style={[styles.loginScreenRow, {justifyContent: 'flex-start', paddingTop: 30}]}>
                  <LoginLogo/>
                </View>
                <View style={[styles.loginScreenRow, {justifyContent: 'flex-end', paddingBottom: 30}]}>
                  <Text style={styles.loginInfoText}>
                      Your username and password are sent to you via email.
                  </Text>
                </View>
                <View style={[styles.loginScreenRow, {paddingBottom: 50}]}>
                  <LoginInput />
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    )
  }
}

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
  loginScreenRow: {
    flex: 1,
    alignItems: 'center',
    width:DEVICE_WIDTH,

    // borderColor: 'green', borderWidth: 1
  },
  loginRowContainer: {
    flex: 1,
    alignItems: 'center',
    width:'100%',

    // borderColor: 'yellow', borderWidth: 1
  }
});

export default LoginScreen;
