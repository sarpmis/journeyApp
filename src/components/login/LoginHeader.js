import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native';

import { withRouter } from 'react-router-native'

export default withRouter(({ history }) => (
    <View style={styles.loginHeaderContainer}>
        <TouchableOpacity style={styles.headerLeftContainer} onPress={() => history.push("/")}>
            <Text>Back</Text>
        </TouchableOpacity>
        <View style={styles.headerMidContainer}>
            <Text style={{fontSize: 20, lineHeight: 30}}>PAGE NAME</Text>
        </View>
        <View style={styles.headerRightContainer}>
            <Text>Ekstra buton?</Text>
        </View>    
    </View>
  )
)

const styles = StyleSheet.create({
    loginHeaderContainer: {
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        height: '13%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    headerLeftContainer: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    headerRightContainer: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    headerMidContainer: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    }
})