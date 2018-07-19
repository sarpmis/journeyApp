import * as React from "react";
import {
    ScrollView,
    Text,
    View,
    Dimensions,
    StyleSheet,
} from "react-native";
import Portrait from "./Portrait";
import { People } from "./People";

interface Props {
    index: number;
    data: People[];
    portraitWidth: number;
    // Callback functions
    onPortraitPressed: any;
    removeRowsBelow: any;
    // optional index to center, default is middle
    startingIndex?: number;
    height?: number;
}

const DEVICE_WIDTH = Dimensions.get("window").width;

export default class PortraitScrollView extends React.Component <Props> {
    private extraSpaceWidth: number;
    private children: any; // ref array TODO: figure out proper type for this
    private middleIndex: number;
    private scrollView: ScrollView | null;

    constructor(props: any){
        super(props);
        // initial values
        this.scrollView = null;
        this.middleIndex = 0;
        this.children = [];
        // constants
        this.extraSpaceWidth =
            (DEVICE_WIDTH / 2) - (this.props.portraitWidth / 2);
        // binds
        this.handleScroll = this.handleScroll.bind(this);
        this.enlargeChild = this.enlargeChild.bind(this);
        this.shrinkChild = this.shrinkChild.bind(this);
        this.scrollToIndex = this.scrollToIndex.bind(this);
        this.onPortraitPressed = this.onPortraitPressed.bind(this);
    }

    componentDidMount() {
        this.middleIndex = this.props.startingIndex ?
            (this.props.startingIndex) : (Math.floor(this.children.length / 2));
        if (this.scrollView !== null) {
            this.scrollView.scrollTo({x: this.middleIndex * this.props.portraitWidth, animated: true});
        }
    }

    handleScroll(event: any){
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
        // if middle index changed enlarged new index and
        // shrink old one. Tell parent to remove rows
        // above this
        if (temp - this.middleIndex !== 0) {
            this.enlargeChild(temp);
            this.shrinkChild(this.middleIndex);
            this.middleIndex = temp;
            this.props.removeRowsBelow(this.props.index);
        }
    }

    enlargeChild(index: number) {
        this.children[index].enlarge();
    }

    shrinkChild(index: number) {
        this.children[index].shrink();
    }

    // scrolls and centers the portrait of the given index
    scrollToIndex(index: number) {
        if (this.scrollView !== null) {
            this.scrollView.scrollTo({x: index * this.props.portraitWidth, animated: true});
        }
    }

    /****************************** CALLBACK FUNCTIONS ******************************/
    // we get portrait index and pers
    onPortraitPressed( personId: string, portraitIndex: number) {
        // scroll to the index
        this.scrollToIndex(portraitIndex);
        // invoke callback to parent so it pops rows below this and if pressed portrait is the middle
        // one create a new row for it
        this.props.onPortraitPressed(personId, this.props.index, (portraitIndex === this.middleIndex));
        console.log("portraitIndex: " + portraitIndex + ", middleIndex: " + this.middleIndex);
    }

    render() {
        const listItems: JSX.Element[] = [];
        const arr: People[] = this.props.data;
        for (let i = 0; i < this.props.data.length; i ++) {
            listItems.push(
                <Portrait
                    person={arr[i]}
                    index={i}
                    width={this.props.portraitWidth}
                    onPress={this.onPortraitPressed}
                    key={i}
                    ref={(ref) => this.children[i] = ref}
                />,
            );
        }

        return(
            <View style={styles.parentContainer} >
            <View style={styles.verticalLine}>

            </View>
            <ScrollView
                ref={(ref) => this.scrollView = ref}
                horizontal
                snapToInterval={this.props.portraitWidth}
                snapToAlignment="start"
                scrollEventThrottle={16}
                onScroll={this.handleScroll}
                onMomentumScrollEnd={() => this.enlargeChild(this.middleIndex)}
                decelerationRate={0.7}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContainer}
                style={{  borderColor: "magenta", height: this.props.height } }>
                <View style={[styles.extraSpace, {width: this.extraSpaceWidth, height: this.props.portraitWidth }]} />
                    {/* <Text> I AM EXTRA SPACE </Text>
                </View> */}
                {listItems}
                <View style={[styles.extraSpace, {width: this.extraSpaceWidth, height: this.props.portraitWidth }]} />
                    {/* <Text> I AM EXTRA SPACE </Text>
                </View> */}
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    extraSpace: {
        backgroundColor: "transparent",
    },
    verticalLine: {
        width: 0,
        borderWidth: 1,
        borderColor: "white",
        opacity: 0.6,
        height: 30,
    },
    scrollViewContainer: {
        alignItems: "center",
        // borderColor: "blue",
        // borderWidth: 1,
    },
    parentContainer: {
        alignItems: "center",
        // borderColor: "yellow",
        // borderWidth: 1,
    }
});
