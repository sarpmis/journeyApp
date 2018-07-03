import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class LoginButton extends React.Component {
  render() {
    return (
        <View style={styles.loginButtonContainer}>
            <TouchableOpacity 
                style={[styles.loginButton, {backgroundColor: '#5E50E4'}]}
                activeOpacity={1}>
                <Text style={styles.loginText}>
                    visitor login
                </Text>
            </TouchableOpacity>
            <Text style={[styles.loginText, {opacity: 0.6, fontWeight: '500'}]}>
                already a member?
            </Text>
            <TouchableOpacity
                style={[styles.loginButton, {backgroundColor: '#FFFFFF'}]}
                activeOpacity={1}>
                <Text style={[styles.loginText, {color: '#363636'}]}>
                    login
                </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  loginButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    zIndex: 100,
    width: '84%',
    height: '18%',
    margin: 17,
  },
  loginText:{
    fontSize: 14,
  },
});