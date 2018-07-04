import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

// import { Col, Row, Grid } from "react-native-easy-grid";
import {setCustomText} from 'react-native-global-props';

import LoginButton from './src/components/login/LoginButton';
import LoginLogo from './src/components/login/LoginLogo';

const globalTextProps = {
  style: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 12,	
    fontWeight: "900",
    lineHeight: 16,
    textAlign: 'center',
  }
}

setCustomText(globalTextProps);

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground 
        source={require('..\\assets\\login-background.png')} 
        style={styles.backgroundImage}>
        {/* <Grid >
          <Row> <LoginLogo/> </Row>
          <Row> 
            <View style={styles.loginInfoContainer}>
              <Text style={styles.loginInfoText}>
                THIS IS A DIFFERENT PAGE
              </Text> 
            </View>
          </Row>
          <Row> <LoginButton /> </Row>
        </Grid> */}
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
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
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
