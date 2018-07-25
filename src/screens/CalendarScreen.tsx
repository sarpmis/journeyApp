import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import CalendarRow from "@src/components/calendar/CalendarRow";
import CalendarTable from "@src/components/calendar/CalendarTable";

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
