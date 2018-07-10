import * as React from "react";
import { Dimensions, StyleSheet, View, TextInput} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoginButton from "./LoginButton";
import {endpoint} from "../../http/HTTPService";

interface Props {

}

interface State {
    username: string;
    password: string;
}

export default class LoginInput extends React.Component<Props, State> {

    // constructor() {
    //     super();
    //     this.state = {

    //     }
    // }
    
    // fetchTest() {
    //     endpoint.request('http://', 'POST', {
    //         success: (data)=>console.log(data),
    //         error: (error) => console.log(error)
    //     })
    // }

    onUsernameChange(input: string): void {
        
    };

    render(): JSX.Element {
        return(
            <View style={styles.loginInputContainer}>
                <View style={styles.loginTextContainer}>
                    <Ionicons name="ios-person-outline" size={25} color="white" style={styles.loginUserIcon} />
                    <TextInput 
                        style={styles.LoginInput} 
                        placeholder='username' 
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        autoCapitalize = 'none'
                        />
                </View>
                <View style={styles.loginTextContainer}>
                    <Ionicons name="ios-lock-outline" size={20} color="white" style={styles.loginUserIcon} />
                    <TextInput
                        style={styles.LoginInput} 
                        placeholder='password' 
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        autoCapitalize = 'none'
                        secureTextEntry
                        />
                </View> 
                <LoginButton 
                    onPressFunction={() => console.log("hi") } 
                    extraStyle={{backgroundColor: '#FFFFFF', marginTop: 20, width: DEVICE_WIDTH - 2*MARGIN}}
                    textColor={"#363636"}
                    buttonText="login"
                    />
            </View>
    )}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const LOGO_WIDTH = 50;
const MARGIN = 30;
const BUTTON_TEXTFIELD_DIFF = 20;

const styles = StyleSheet.create({
    loginInputContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'    ,
        // borderColor: 'blue', borderWidth: 1
    },
    LoginInput: {
        height: 40,
        color: 'rgba(255,255,255,0.8)',
        width: DEVICE_WIDTH - 2*MARGIN - LOGO_WIDTH - BUTTON_TEXTFIELD_DIFF,
        fontFamily: 'Avenir',
        fontSize: 12,
        fontWeight: '900',
        // borderColor: 'red', borderWidth: 1
    },
    loginTextContainer: {
        width: DEVICE_WIDTH - 2*MARGIN - BUTTON_TEXTFIELD_DIFF,
        height: 50,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: 'rgba(255,255,255,0.5)',
        borderBottomWidth: 1,
        // borderColor: 'magenta', borderWidth: 1
    },
    loginUserIcon: {
        height: 30,
        width: LOGO_WIDTH,
        paddingTop: 10,
        paddingLeft: 10,
        // borderColor: 'green', borderWidth: 1
    }
});