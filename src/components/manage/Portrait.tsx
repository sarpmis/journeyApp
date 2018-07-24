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
    PORTRAIT_ANIMATION_SHRINK_TIME,
    PORTRAIT_ANIMATION_GROW_TIME,
    PORTRAIT_TEXT_MARGIN,
} from "@config/Configuration";
import { People } from "@src/components/People";
import { Images } from "@config/Images";

interface Props {
    person: People;
    index: number;
    width: number;
    onPress: any;
    height?: number;
    touchable?: boolean;
}

export default class Portrait extends React.Component<Props> {
    private animated: Animated.Value;
    private enlarged: boolean;
    private photoGrowthMargin: number;

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
        // class constants
        this.photoGrowthMargin = this.props.width * PORTRAIT_CIRCLE_TO_WIDTH_RATIO
            * (PORTRAIT_IMAGE_GROW_SCALE - 1) / 2;
    }

    shouldComponentUpdate() {
        return false;
    }

    getPerson() {
        return this.props.person;
    }

    enlarge() {
        if (this.isEnlarged()) { return; }
        this.enlarged = true;
        Animated.timing(this.animated, {
            duration: PORTRAIT_ANIMATION_GROW_TIME,
            easing: Easing.linear,
            toValue: 1,
            useNativeDriver: true,
        }).start();
    }

    shrink() {
        if (!this.isEnlarged()) { return; }
        this.enlarged = false;
        Animated.timing(this.animated, {
            duration: PORTRAIT_ANIMATION_SHRINK_TIME,
            easing: Easing.linear,
            toValue: 0,
            useNativeDriver: true,
        }).start();
    }

    isEnlarged() {
        return this.enlarged;
    }

    onPress() {
        this.props.onPress(this.props.person.id, this.props.index);
    }

    render() {
        const transformValue = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, PORTRAIT_IMAGE_GROW_SCALE],
        });

        const textAnimationY = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, this.photoGrowthMargin],
        });

        // const variableWidth = this.animated.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [this.props.width, this.props.width * PORTRAIT_IMAGE_GROW_SCALE],
        // });
        return(
            <TouchableOpacity style={[styles.portraitContainer,
                {
                    width: this.props.width,
                    height: this.props.height ? this.props.height : this.props.width,
                }]}
                onPress={this.onPress}
                activeOpacity={this.props.touchable? (0.5) : (1)}>
                <Animated.Image style={[styles.portraitCircle, styles.test,
                    {
                        width: this.props.width * PORTRAIT_CIRCLE_TO_WIDTH_RATIO,
                        height: this.props.width * PORTRAIT_CIRCLE_TO_WIDTH_RATIO,
                        borderRadius: this.props.width * PORTRAIT_CIRCLE_TO_WIDTH_RATIO / 2,
                        marginTop: this.photoGrowthMargin,
                        // apply ratios
                        transform: [{ scale: transformValue}],
                    }]}
                    source={Images.person[this.props.person.photo]}
                    >
                </Animated.Image>
                <Animated.View style={{transform: [{translateY: textAnimationY}]}}>
                <Text style={styles.portraitTitleText}>
                    {this.props.person.name} {this.props.person.surname} </Text>
                <Text style={styles.portraitBottomText}> {this.props.person.title} </Text>
                </Animated.View>
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
    test: {
        transform: [{ scale: 1.2}]
    },
    portraitCircle: {
        // backgroundColor: "blue",
        borderColor: "white",
        borderWidth: 2,
    },
    portraitTitleText: {
        marginTop: PORTRAIT_TEXT_MARGIN,
    },
    portraitBottomText: {
        fontSize: 10,
        lineHeight: 14,
        opacity: 0.6,
    },
});
