import * as React from "react";
import {
    View,
    StyleSheet,
    Text,
    Animated,
    Button,
    Easing,
    TouchableOpacity,
} from "react-native";

interface Props {
    // name: string;
    // surname: string;
    // title: string;
    width: number;
    height: number;
    text: string;
}

interface State {
    enlarged: boolean;
}

export default class Portrait extends React.Component<Props, State> {
    animated: Animated.Value;

    constructor(props: any) {
        super(props);
        this.state = {
            enlarged: false,
        };
        this.animated = new Animated.Value(0);
        this.onPress = this.onPress.bind(this);
        this.grow = this.grow.bind(this);
        this.shrink = this.shrink.bind(this);
    }

    grow() {
        Animated.timing(this.animated, {
            duration: 200,
            easing: Easing.linear,
            toValue: 1,
        }).start();
    }

    shrink() {
        Animated.timing(this.animated, {
            duration: 200,
            easing: Easing.linear,
            toValue: 0,
        }).start();
    }

    onPress() {
        if (this.state.enlarged) {
            this.shrink();
            this.setState({enlarged: false});
        } else {
            this.grow();
            this.setState({enlarged: true});
        }
    }

    render() {
        const variableWidth = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [this.props.width, this.props.width * GROW_SCALE],
        });

        return(
            <Animated.View style={[styles.portraitContainer,
                {
                    width: this.props.width,
                    // height: Animated.multiply(variableWidth, HEIGHT_TO_WIDTH),
                    height: this.props.width,
                }]}>
                <Animated.View style={[styles.circle,
                    {
                        width: Animated.multiply(variableWidth, CIRCLE_TO_WIDTH),
                        height: Animated.multiply(variableWidth, CIRCLE_TO_WIDTH),
                        borderRadius: Animated.multiply(variableWidth, CIRCLE_TO_WIDTH),
                        }]}/>
                <Text style={{color: "black"}}> {this.props.text} </Text>
                <TouchableOpacity onPress={this.onPress} 
                    style={{backgroundColor: "red", height: 50, width: 50}}/>
            </Animated.View>
        );
    }
}

/****************************** STYLING ******************************/
// const HEIGHT_TO_WIDTH = 1.2;
const CIRCLE_TO_WIDTH = 0.4;
const GROW_SCALE = 2.5;

const styles = StyleSheet.create({
    portraitContainer: {
        alignItems: "center",
        borderWidth: 1,
        borderColor: "red",
    },
    circle: {
        backgroundColor: "blue",
    }
});
