import * as React from "react";
import {
    ScrollView,
    Text,
    View,
    Dimensions,
    StyleSheet,
    Platform,
} from "react-native";
import { People } from "@types/People";
import Portrait from "@src/components/portrait/Portrait";
import PortraitLine from "@src/components/portrait/PortraitLine";

interface Props {
    index: number;
    data: People[];
    portraitWidth: number;
    // Callback functions
    onPortraitPressed: any;
    onMidChange?: any;
    onScrollEnd: any;
    // optional index to center, default is middle
    startingIndex?: number;
    height?: number;
}

const DEVICE_WIDTH = Dimensions.get("window").width;

export default class PortraitRow extends React.Component <Props> {
    private extraSpaceWidth: number;
    private children: any; // ref array TODO: figure out proper type for this
    private middleIndex: number;
    private scrollView: ScrollView | null;
    private firstAction: boolean;
    private startingIndex: number;

    constructor(props: any){
        super(props);
        // initial values
        this.scrollView = null;
        this.middleIndex = 0;
        this.startingIndex = 0;
        this.children = [];
        this.firstAction = true;
        // constants
        this.extraSpaceWidth =
            (DEVICE_WIDTH / 2) - (this.props.portraitWidth / 2);
        // binds
        this.handleScroll = this.handleScroll.bind(this);
        this.enlargeChild = this.enlargeChild.bind(this);
        this.enlargeMiddleChild = this.enlargeMiddleChild.bind(this);
        this.shrinkChild = this.shrinkChild.bind(this);
        this.scrollToIndex = this.scrollToIndex.bind(this);
        this.onPortraitPressed = this.onPortraitPressed.bind(this);
        this.onScrollEnd = this.onScrollEnd.bind(this);
        this.onScrollBegin = this.onScrollBegin.bind(this);
    }

    componentDidMount() {
        this.middleIndex = this.props.startingIndex ?
            (this.props.startingIndex) : (Math.floor(this.children.length / 2));
        if (this.scrollView !== null) {
            this.scrollView.scrollTo({x: this.middleIndex * this.props.portraitWidth, animated: false});
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    handleScroll(event: any) {
        // get offset
        const offset = event.nativeEvent.contentOffset.x;
        // calculate index
        let temp = Math.round(offset / this.props.portraitWidth);
        // prevent errors when scrolled outside the screen
        if (temp < 0) {
            temp = 0;
        } else if (temp >= this.children.length){
            temp = this.children.length - 1;
        }
        // if middle index changed
        if (temp - this.middleIndex !== 0) {
            this.enlargeChild(temp);
            this.shrinkChild(this.middleIndex);
            this.middleIndex = temp;
            if (this.props.onMidChange) {
                this.props.onMidChange(this.props.index);
            }
        }
    }

    enlargeChild(index: number) {
        this.children[index].enlarge();
    }

    enlargeMiddleChild() {
        this.enlargeChild(this.middleIndex);
    }

    shrinkChild(index: number) {
        this.children[index].shrink();
    }

    // scrolls and centers the portrait of the given index
    scrollToIndex(index: number, animation: boolean) {
        if (this.scrollView !== null) {
            this.scrollView.scrollTo({x: index * this.props.portraitWidth, animated: animation});
        }
    }

    /****************************** CALLBACK FUNCTIONS ******************************/
    onPortraitPressed( personId: string, portraitIndex: number) {
        if (portraitIndex === this.middleIndex) {
            if (this.firstAction) {
                this.firstAction = false;
                this.enlargeMiddleChild();
                this.props.onPortraitPressed(personId, this.props.index, true);
            }
        } else {
            this.scrollToIndex(portraitIndex, true);
            if (this.firstAction) {
                this.firstAction = false;
            } else {
                this.props.onPortraitPressed(personId, this.props.index, false);
            }
        }
    }

    onScrollEnd() {
        // this.scrollToIndex(this.middleIndex, false);
        // callback to parent
        if (this.startingIndex !== this.middleIndex || this.firstAction) {
            this.props.onScrollEnd(this.children[this.middleIndex].getPerson().id, this.props.index, true);
        }
        if (this.firstAction) {
            this.firstAction = false;
        }
    }

    onScrollBegin() {
        if (this.firstAction) {
            this.enlargeMiddleChild();
        }
        this.startingIndex = this.middleIndex;
    }

    render() {
        const listItems: JSX.Element[] = [];
        const arr: People[] = this.props.data;
        for (let i = 0; i < this.props.data.length; i++) {
            listItems.push(
                <Portrait
                    person={arr[i]}
                    index={i}
                    width={this.props.portraitWidth}
                    height={this.props.height ? (this.props.height) : (this.props.portraitWidth)}
                    onPress={this.onPortraitPressed}
                    touchable
                    key={i}
                    ref={(ref) => this.children[i] = ref}
                    lineRight={i !== this.props.data.length - 1}
                    lineLeft={i !== 0}
                />,
            );
        }

        return(
            <View style={styles.parentContainer} >
            <PortraitLine axis="vertical" lean="start" showBorders/>
            <ScrollView
                ref={(ref) => this.scrollView = ref}
                horizontal
                snapToInterval={this.props.portraitWidth}
                snapToAlignment="start"
                scrollEventThrottle={16}
                onScroll={this.handleScroll}
                onScrollBeginDrag={this.onScrollBegin}
                onMomentumScrollEnd={this.onScrollEnd}
                decelerationRate={0.7}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContainer}
                style={{ height: this.props.height }}
                pagingEnabled={Platform.OS === "android"}>
                <View style={[styles.extraSpace, {width: this.extraSpaceWidth, height: this.props.portraitWidth }]} />
                {listItems}
                <View style={[styles.extraSpace, {width: this.extraSpaceWidth, height: this.props.portraitWidth }]} />
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    extraSpace: {
        backgroundColor: "transparent",
    },
    scrollViewContainer: {
        alignItems: "center",
        justifyContent: "center",
        // borderColor: "blue",
        // borderWidth: 1,
    },
    parentContainer: {
        alignItems: "center",
        justifyContent: "center",
        // borderColor: "yellow",
        // borderWidth: 1,
    },
});
