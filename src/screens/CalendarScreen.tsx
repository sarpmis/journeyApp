import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";
// @ts-ignore
import CalendarRow from "@src/components/calendar/CalendarRow";

// Barebones for Calendar functionality. Uses very(!) naive method for
// two-way infinite scroll.
export default class CalendarScreen extends React.Component {

    render() {
        return(
            <View style={styles.calendarRowContainer}>
                <CalendarRow/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    calendarRowContainer: {
        padding: 100,
        flex: 1,
        borderColor: "blue",
        borderWidth: 2,
    },
});
