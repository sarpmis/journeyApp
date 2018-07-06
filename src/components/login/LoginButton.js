import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native';

import { withRouter } from 'react-router-native'

const LoginButton = withRouter(({ history }) => (
    <View style={styles.loginButtonContainer}>
        <TouchableOpacity 
            style={[styles.loginButton, {backgroundColor: '#5E50E4'}]}
            activeOpacity={1}
            onPress={() => history.push("/Login")}>
            <Text style={styles.loginText}>
                visitor login
            </Text>
        </TouchableOpacity>
        <Text style={[styles.loginText, {opacity: 0.6, fontWeight: '500'}]}>
            already a member?
        </Text>
        <TouchableOpacity
            style={[styles.loginButton, {backgroundColor: '#FFFFFF'}]}
            activeOpacity={1}
            onPress={() => history.push("/Login")}>
            <Text style={[styles.loginText, {color: '#363636'}]}>
                login
            </Text>
        </TouchableOpacity>
    </View>
    )
)

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
    height: '21%',
    margin: 17,
  },
  loginText:{
    fontSize: 14,
  },
});

export default LoginButton;