import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import {
    PORTRAIT_LINE_VERTICAL_LENGTH,
    PORTRAIT_LINE_HORIZONTAL_LENGTH,
    PORTRAIT_LINE_WIDTH,
    PORTRAIT_LINE_OPACITY,
    // @ts-ignore
} from "@config/Configuration";

interface Props {
    axis: "horizontal" | "vertical";
}

export default class PortraitLine extends React.Component <Props> {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return(
            <View style={[styles.portraitLine,
                this.props.axis === "horizontal" ?
                (styles.horizontalPortraitLine) : (styles.verticalPortraitLine),
                ]}/>
        );
    }
}

const styles = StyleSheet.create({
    portraitLine: {
        borderWidth: PORTRAIT_LINE_WIDTH,
        borderColor: "white",
        opacity: PORTRAIT_LINE_OPACITY,
    },
    verticalPortraitLine: {
        width: 0,
        height: PORTRAIT_LINE_VERTICAL_LENGTH,
    },
    horizontalPortraitLine: {
        height: 0,
        width: PORTRAIT_LINE_HORIZONTAL_LENGTH,
    },
});
