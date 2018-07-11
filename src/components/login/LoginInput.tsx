// @ts-ignore
import { Ionicons } from "@expo/vector-icons";
// @ts-ignore
import LoginButtonAnimated from "@src/components/login/LoginButtonAnimated";

import * as React from "react";
import {
    Dimensions,
    StyleSheet,
    TextInput,
    View,
} from "react-native";

// import {endpoint} from "../../http/HTTPService";

interface Props {
    navigation: any;
}

interface State {
    username: string;
    password: string;
    buttonActive: boolean;
}

export default class LoginInput extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            buttonActive: false,
            password: "",
            username: "",
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onUsernameChange(input: string): void {
        this.setState({ username: input });
    }

    onPasswordChange(input: string): void {
        this.setState({ password: input });
    }

    // Send credentials to the login button.
    onSubmit(): any {
        return {
            username: this.state.username,
        };
            // service.checkUser(this.state.username, this.state.password);
            // .then((user: any) => this.props.navigation.navigate("manage"));
    }

    render(): JSX.Element {
        return(
            <View style={styles.loginInputContainer}>
                <View style={styles.loginTextContainer}>
                    <Ionicons name="ios-person-outline" size={25} color="white" style={styles.loginUserIcon} />
                    <TextInput
                        style={styles.loginInput}
                        placeholder="username"
                        placeholderTextColor="rgba(255,255,255,0.8)"
                        autoCapitalize = "none"
                        onChangeText={(input) => this.onUsernameChange(input)}
                        />
                </View>
                <View style={styles.loginTextContainer}>
                    <Ionicons name="ios-lock-outline" size={20} color="white" style={styles.loginUserIcon} />
                    <TextInput
                        style={styles.loginInput}
                        placeholder="password"
                        placeholderTextColor="rgba(255,255,255,0.8)"
                        autoCapitalize = "none"
                        secureTextEntry
                        onChangeText={(input) => this.onPasswordChange(input)}
                        />
                </View>
                <LoginButtonAnimated
                    onPressFunction={() => this.onSubmit() }
                    extraStyle={{backgroundColor: "#FFFFFF", marginTop: 20}}
                    textColor={"#363636"}
                    buttonText  ="login"
                    animate={this.state.buttonActive}
                    navigation={this.props.navigation}
                    />
            </View>
        );
    }
}

/****************************** STYLING ******************************/
const DEVICE_WIDTH = Dimensions.get("window").width;
const LOGO_WIDTH = 50;
const MARGIN = 30;
const BUTTON_TEXTFIELD_DIFF = 20;

const styles = StyleSheet.create({
    loginInput: {
        color: "rgba(255,255,255,0.8)",
        fontFamily: "Avenir",
        fontSize: 12,
        fontWeight: "900",
        height: 40,
        width: DEVICE_WIDTH - 2 * MARGIN - LOGO_WIDTH - BUTTON_TEXTFIELD_DIFF,
        // borderColor: 'red', borderWidth: 1
    },
    loginInputContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-start",
        width: "100%",
        // borderColor: 'blue', borderWidth: 1
    },
    loginTextContainer: {
        alignItems: "center",
        borderBottomColor: "rgba(255,255,255,0.5)",
        borderBottomWidth: 1,
        flexDirection: "row",
        height: 50,
        justifyContent: "flex-start",
        marginBottom: 5,
        width: DEVICE_WIDTH - 2 * MARGIN - BUTTON_TEXTFIELD_DIFF,
        // borderColor: 'magenta', borderWidth: 1
    },
    loginUserIcon: {
        height: 30,
        paddingLeft: 10,
        paddingTop: 10,
        width: LOGO_WIDTH,
        // borderColor: 'green', borderWidth: 1
    },
});
