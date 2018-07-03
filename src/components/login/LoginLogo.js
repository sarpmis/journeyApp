import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export default class LoginLogo extends React.Component {
  render() {
    return (
        <View style={styles.loginScreenContainer}>
            <Image 
                source={require('../../../assets/logo-icon.png')}
                style={styles.loginScreenLogo} />        
            <Text> JOURNEY </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  loginScreenContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  loginScreenLogo: {
    marginBottom: 20,
  }
});