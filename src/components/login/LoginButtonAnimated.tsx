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
import { CallbackFunction } from "../../config/Types";

interface Props {
  onPressFunction: CallbackFunction;
  textColor: string;
  buttonText: string;
  extraStyle: any;
  animate: boolean;
}

interface State {
    isLoading: boolean;
}

export default class LoginButton  extends React.Component<Props, State> {
    buttonAnimated: Animated.Value;
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false,
        };

        this.buttonAnimated = new Animated.Value(0);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        if (this.state.isLoading) { return; }

        this.props.onPressFunction();
        this.setState({ isLoading: true });
        Animated.timing(this.buttonAnimated, {
            duration: 200,
            easing: Easing.linear,
            toValue: 1,
        }).start();

        setTimeout(() => {
            // console.log("timeout");
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
            // <View style={styles.buttonContainer}>
                <Animated.View style={[{width: changeWidth}]}>
                    <TouchableOpacity
                        style={[styles.loginButton, this.props.extraStyle]}
                        onPress={this.onPress}
                        activeOpacity={1}>
                        {this.state.isLoading ? (
                            <Image source={require("../../../assets/loading.gif")} style={styles.image} />
                        ) : (
                            <Text style={[styles.loginText, {color: this.props.textColor}]}>
                                {this.props.buttonText}
                            </Text>
                        )}
                    </TouchableOpacity>
                </Animated.View>
            // </View>
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
        // margin: MARGIN,
        // width: DEVICE_WIDTH - 2*MARGIN,
        },
    loginText:{
        fontSize: 14,
    },
    // buttonContainer: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'flex-start',
    // },
});
