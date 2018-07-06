import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";


import WelcomeScreen from './src/components/login/WelcomeScreen';
import LoginScreen from './src/components/login/LoginScreen';

// SETTING GLOBAL TEXT STYLE
import {setCustomText} from 'react-native-global-props';

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

// ENTRY POINT OF APP
export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={WelcomeScreen} />
            <Route exact path="/Login" component={LoginScreen} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});