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
import {
    PORTRAIT_CIRCLE_TO_WIDTH_RATIO,
    PORTRAIT_IMAGE_GROW_SCALE,
} from "@config/Configuration";
import { People } from "@src/components/People";
import { Images } from "@assets/images";

interface Props {
    // TODO: replace all these fields with Person object
    person: People;
    index: number;
    width: number;
    onPress: any;
    height?: number;
}

export default class Portrait extends React.Component<Props> {
    animated: Animated.Value;
    enlarged: boolean;
    photo: string;

    constructor(props: any) {
        super(props);
        // binds
        this.onPress = this.onPress.bind(this);
        this.enlarge = this.enlarge.bind(this);
        this.shrink = this.shrink.bind(this);
        this.isEnlarged = this.isEnlarged.bind(this);
        // initial values
        this.enlarged = false;
        this.animated = new Animated.Value(0);
        this.photo = "../../../assets/" + this.props.person.photo;
        console.log(Images);
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
        this.props.onPress(this.props.person.id, this.props.index);
        // console.log("PORTRAIT: you clicked on " + this.props.index + ", id:" + this.props.id);
    }

    render() {
        const variableWidth = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [this.props.width, this.props.width * PORTRAIT_IMAGE_GROW_SCALE],
        });

        // TODO: MAKE DUMMY CIRCLE IMAGE
        return(
            <TouchableOpacity style={[styles.portraitContainer,
                {
                    width: this.props.width,
                    height: this.props.height ? this.props.height : this.props.width,
                }]}
                onPress={this.onPress}
                activeOpacity={1}>
                <Animated.Image style={[styles.portraitCircle,
                    {
                        // apply ratios
                        width: Animated.multiply(variableWidth, PORTRAIT_CIRCLE_TO_WIDTH_RATIO),
                        height: Animated.multiply(variableWidth, PORTRAIT_CIRCLE_TO_WIDTH_RATIO),
                        borderRadius: Animated.multiply(variableWidth, PORTRAIT_CIRCLE_TO_WIDTH_RATIO / 2),
                    }]}
                    source={Images.person[this.props.person.photo]}
                    >
                </Animated.Image>
                <Text style={styles.portraitTitleText}> {this.props.person.name} {this.props.person.surname} </Text>
                <Text style={styles.portraitBottomText}> {this.props.person.title} </Text>
            </TouchableOpacity>
        );
    }
}

/****************************** STYLING ******************************/
const styles = StyleSheet.create({
    portraitContainer: {
        alignItems: "center",
        // borderWidth: 1,
        // borderColor: "red",
    },
    portraitCircle: {
        // backgroundColor: "blue",
    },
    portraitTitleText: {
        marginTop: 10,
    },
    portraitBottomText: {
        fontSize: 10,
        lineHeight: 14,
        opacity: 0.6,
    },
});
