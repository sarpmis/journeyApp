import * as React from "react";
import {
    View,
    StyleSheet,
    Text,
    Animated,
    Easing,
    TouchableOpacity,
    Image,
} from "react-native";

interface Props {
    // TODO: replace all these fields with Person object
    id: string;
    name: string;
    surname: string;
    title: string;
    text: string;
    index: number;
    width: number;
    onPress: any;
    height?: number;
}

export default class Portrait extends React.Component<Props> {
    animated: Animated.Value;
    enlarged: boolean;

    constructor(props: any) {
        super(props);
        this.enlarged = false;
        this.animated = new Animated.Value(0);
        this.onPress = this.onPress.bind(this);
        this.enlarge = this.enlarge.bind(this);
        this.shrink = this.shrink.bind(this);
        this.isEnlarged = this.isEnlarged.bind(this);
    }

    enlarge() {
        if (this.isEnlarged()) { return; }
        this.enlarged = true;
        Animated.timing(this.animated, {
            duration: 250,
            easing: Easing.linear,
            toValue: 1,
        }).start();
    }

    shrink() {
        if (!this.isEnlarged()) { return; }
        this.enlarged = false;
        Animated.timing(this.animated, {
            duration: 400,
            easing: Easing.linear,
            toValue: 0,
        }).start();
    }

    isEnlarged() {
        return this.enlarged;
    }

    onPress() {
        this.props.onPress(this.props.id, this.props.index);
        // console.log("PORTRAIT: you clicked on " + this.props.index + ", id:" + this.props.id);
    }

    render() {
        const variableWidth = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [this.props.width, this.props.width * GROW_SCALE],
        });

        // TODO: MAKE DUMMY CIRCLE IMAGE
        return(
            <TouchableOpacity style={[styles.portraitContainer,
                {
                    width: this.props.width,
                    height: this.props.width,
                }]}
                onPress={this.onPress}
                activeOpacity={1}>
                <Animated.View style={[styles.circle,
                    {
                        // apply ratios
                        width: Animated.multiply(variableWidth, CIRCLE_TO_WIDTH),
                        height: Animated.multiply(variableWidth, CIRCLE_TO_WIDTH),
                        borderRadius: Animated.multiply(variableWidth, CIRCLE_TO_WIDTH),
                        }]}/>
                <Text style={{color: "black"}}> {this.props.text} </Text>
            </TouchableOpacity>
        );
    }
}

/****************************** STYLING ******************************/
// const HEIGHT_TO_WIDTH = 1.2;
const CIRCLE_TO_WIDTH = 0.4;
const GROW_SCALE = 2;

const styles = StyleSheet.create({
    portraitContainer: {
        alignItems: "center",
        borderWidth: 1,
        // borderColor: "red",
    },
    circle: {
        backgroundColor: "blue",
    },
});
