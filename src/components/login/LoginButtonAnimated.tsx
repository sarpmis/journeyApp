// @ts-ignore
import service from "@src/http/HTTPService";
import React from "react";
import {
    Animated,
    Dimensions,
    Easing,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

interface Props {
  onPressFunction: any;
  textColor: string;
  buttonText: string;
  extraStyle: any;
  navigation: any;
}

interface State {
    isLoading: boolean;
    errorLoading: boolean;
}

export default class LoginButton  extends React.Component<Props, State> {
    buttonAnimated: Animated.Value;
    constructor(props: any) {
        super(props);
        this.state = {
            errorLoading: false,
            isLoading: false,
        };

        this.buttonAnimated = new Animated.Value(0);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        if (this.state.isLoading) { return; }

        this.setState({ isLoading: true, errorLoading: false });

        Animated.timing(this.buttonAnimated, {
            duration: 200,
            easing: Easing.linear,
            toValue: 1,
        }).start();

        setTimeout(() => {
            service.checkUser(this.props.onPressFunction().username, "no password checks yet")
                .then((user: any) => this.props.navigation.navigate("manage"))
                .catch((error: any) => {
                    this.setState({ errorLoading: true, isLoading: false });
                    this.buttonAnimated.setValue(0);
                });
        }, 500);

        setTimeout(() => {
            this.setState({isLoading: false});
            this.buttonAnimated.setValue(0);
        }, 2300);
    }

    render() {
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [DEVICE_WIDTH - 2 * MARGIN, 40],
        });

        return(
            <Animated.View style={[{width: changeWidth}]}>
                <TouchableOpacity
                    style={[styles.loginButton, this.props.extraStyle,
                        this.state.errorLoading ?
                            {backgroundColor: "red"} : {backgroundColor: "white"}]}
                    onPress={this.onPress}
                    activeOpacity={1}>
                    {this.state.isLoading ? (
                        <Image source={require("../../../assets/loading.gif")} style={styles.image} />
                    ) : (
                        <Text style={[styles.loginText,
                            this.state.errorLoading ? {color: "white"} : {color: this.props.textColor}]}>
                            {this.props.buttonText}
                        </Text>
                    )}
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

// STYLING
const DEVICE_WIDTH = Dimensions.get("window").width;
const MARGIN = 30;

const styles = StyleSheet.create({
    image: {
        height: 25,
        width: 25,
    },
    loginButton: {
        alignItems: "center",
        borderRadius: 20,
        height: 40,
        justifyContent: "center",
        width: "100%",
        zIndex: 100,
    },
    loginText: {
        fontSize: 14,
    },
});
