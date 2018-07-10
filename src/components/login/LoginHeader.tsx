import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';

interface LoginHeaderProps {
    navigation :any,
}

const LoginHeader :React.SFC<LoginHeaderProps> = ({ navigation }) => (
    <View style={styles.loginHeaderContainer}>
        <TouchableOpacity 
            style={styles.headerLeftContainer}
            onPress={() => navigation.goBack()} >
            <Image source={require('../../../assets/back_icon.png')} style={styles.loginPageBackIcon} />
        </TouchableOpacity>
        <View style={styles.headerMidContainer}>
            <Text style={{fontSize: 18, lineHeight: 25, opacity: 0.8}}>Login</Text>
        </View>
        <View style={styles.headerRightContainer}>
            {/* <Text>Ekstra buton?</Text> */}
        </View>    
    </View>
)

const styles = StyleSheet.create({
    loginHeaderContainer: {
        paddingTop: 25,
        paddingBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        // borderColor: 'red',
        // borderWidth: 1
    },
    headerLeftContainer: {
        width: '25%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 10,
        // borderColor: 'red',
        // borderWidth: 1
    },
    headerRightContainer: {
        width: '25%',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10,
        // borderColor: 'red',
        // borderWidth: 1
    },
    headerMidContainer: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: 'red',
        // borderWidth: 1
    },
    loginPageBackIcon: {
        maxWidth: 40,
        maxHeight: 40,
    }
});

export default LoginHeader;