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
    portraitPressed: any;
    startingIndex?: number;
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
        this.portraitPressed = this.portraitPressed.bind(this);
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
        // shrink old one
        if (temp - this.middleIndex !== 0) {
            this.enlargeChild(temp);
            this.shrinkChild(this.middleIndex);
            this.middleIndex = temp;
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

    // we get portrait index and pers
    portraitPressed( personId: string, portraitIndex: number) {
        // scroll to the index
        this.scrollToIndex(portraitIndex);
        // invoke callback to parent so it knows to make a new row
        this.props.portraitPressed(personId, this.props.index);
        // console.log("ROW: moving to " + portraitIndex);
    }

    render() {
        const listItems: JSX.Element[] = [];
        const arr: People[] = this.props.data;
        for (let i = 0; i < this.props.data.length; i ++) {
            listItems.push(
                <Portrait
                    id={arr[i].id}
                    name={arr[i].name}
                    surname={arr[i].surname}
                    title={arr[i].title}
                    text={arr[i].name}
                    index={i}
                    width={this.props.portraitWidth}
                    onPress={this.portraitPressed}
                    key={i}
                    ref={(ref) => this.children[i] = ref}
                />,
            );
        }

        return(
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
                style={{  borderColor: "magenta", marginTop: 100} }>
                <View style={[styles.extraSpace, {width: this.extraSpaceWidth, height: this.props.portraitWidth }]} >
                    <Text> I AM EXTRA SPACE </Text>
                </View>
                {listItems}
                <View style={[styles.extraSpace, {width: this.extraSpaceWidth, height: this.props.portraitWidth }]} >
                    <Text> I AM EXTRA SPACE </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    extraSpace: {
        backgroundColor: "black",
    }
});
