import React from "react";
import {
    View,
    StyleSheet,
    Text,
} from "react-native";
import {
    CALENDAR_WIDTH,
    CALENDAR_HEIGHT,
} from "./CalendarRow";

interface Props {
    number: number;
}

export default class CalendarTable extends React.Component<Props> {
    render() {
        console.log("Table")
        return(
            <View style={styles.tableContainer}>
                <Text style={{ fontSize: 40, lineHeight: 40 }}> {this.props.number} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tableContainer: {
        backgroundColor: "red",
        width: 300,
        height: CALENDAR_HEIGHT,
        borderColor: "blue",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
});
