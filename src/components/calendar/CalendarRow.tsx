import React from "react";
import {
    View,
    ScrollView,
    StyleSheet,
    Dimensions,
} from "react-native";
import CalendarTable from "@src/components/calendar/CalendarTable";

export const CALENDAR_WIDTH = 300;
export const CALENDAR_HEIGHT = 250;
const DEVICE_WIDTH = Dimensions.get("window").width;
const EXTRA_SPACE_WIDTH =
(DEVICE_WIDTH - CALENDAR_WIDTH) / 2;

export default class CalendarRow extends React.Component {
    private middleNumber: number;
    private scrollView: ScrollView | null;
    private calendars: JSX.Element[];
    private shouldAddRight: boolean;
    private shouldAddLeft: boolean;

    constructor(props: any){
        super(props);
        // initial values
        this.middleNumber = 0;
        this.scrollView = null;
        this.calendars = new Array();
        this.shouldAddLeft = false;
        this.shouldAddRight = false;
        // binds
        this.addToLeft = this.addToLeft.bind(this);
        this.addToRight = this.addToRight.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleScrollViewRef = this.handleScrollViewRef.bind(this);
        this.scrollToIndex = this.scrollToIndex.bind(this);
        this.endScroll = this.endScroll.bind(this);
    }

    componentDidMount() {
        this.scrollToIndex(1, false);
    }

    componentWillMount() {
        this.calendars.push(
            <CalendarTable number={0} key={0}/>,
            <CalendarTable number={1} key={1}/>,
            <CalendarTable number={2} key={2}/>,
        );
        this.middleNumber = 1;
    }

    addToRight() {
        const temp = [
            this.calendars[1],
            this.calendars[2],
            <CalendarTable number={this.middleNumber + 2} key={this.middleNumber + 2}/>,
        ];
        this.middleNumber++;
        this.calendars = temp;
    }

    addToLeft() {
        const temp = [
            <CalendarTable number={this.middleNumber - 2} key={this.middleNumber - 2}/>,
            this.calendars[0],
            this.calendars[1],
        ];
        this.middleNumber--;
        this.calendars = temp;
    }

    handleScrollViewRef = (ref: ScrollView) => { this.scrollView = ref; };

    // scrolls and centers the portrait of the given index
    scrollToIndex(index: number, animation: boolean) {
        if (this.scrollView !== null) {
            this.scrollView.scrollTo({x: index * CALENDAR_WIDTH, animated: animation});
        }
    }

    handleScroll(event: any) {
        // get offset
        const offset = event.nativeEvent.contentOffset.x;
        // calculate index
        let temp = Math.round(offset / CALENDAR_WIDTH);
        // prevent errors when scrolled outside the screen
        if (temp < 0) {
            temp = 0;
        } else if (temp >= 3) {
            temp = 2;
        }

        // if middle index changed
        if (temp === 2) {
            this.shouldAddRight = true;
        } else if (temp === 0) {
            this.shouldAddLeft = true;
        } else {
            this.shouldAddLeft = false;
            this.shouldAddRight = false;
        }
    }

    endScroll() {
        if (this.shouldAddLeft) {
            this.addToLeft();
            this.forceUpdate();
            this.scrollToIndex(1, false);
        } else if (this.shouldAddRight) {
            this.addToRight();
            this.forceUpdate();
            this.scrollToIndex(1, false);
        }
    }

    render() {
        return(
            <View style={styles.parentContainer}>
            <ScrollView
            ref={this.handleScrollViewRef}
            contentContainerStyle={styles.scrollViewContainer}
            style={{ height: CALENDAR_HEIGHT, width: DEVICE_WIDTH }}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={this.handleScroll}
            onMomentumScrollEnd={this.endScroll}
            scrollEventThrottle={16}
            snapToInterval={CALENDAR_WIDTH}
            snapToAlignment="start"
            decelerationRate={0.7}
            >
                <View style={[styles.extraSpace, {width: EXTRA_SPACE_WIDTH, height: CALENDAR_HEIGHT }]} />
                {this.calendars}
                <View style={[styles.extraSpace, {width: EXTRA_SPACE_WIDTH, height: CALENDAR_HEIGHT }]} />
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        // borderColor: "magenta",
        // borderWidth: 2,
    },
    parentContainer: {
        alignItems: "center",
    },
    extraSpace: {
        backgroundColor: "lightblue",
    },
});
