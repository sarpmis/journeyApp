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
    data: People[];
    portraitWidth: number;
    startingIndex?: number;
}

const DEVICE_WIDTH = Dimensions.get("window").width;

export default class PortraitScrollView extends React.Component <Props> {
    private extraSpaceWidth: number;
    private children: any;
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

    scrollToIndex(index: number) {
        if (this.scrollView !== null) {
            this.scrollView.scrollTo({x: index * this.props.portraitWidth, animated: true});
        }
    }

    render() {
        const listItems: JSX.Element[] = [];
        const arr: People[] = this.props.data;
        for (let i = 0; i < this.props.data.length; i ++) {
            listItems.push(
                <Portrait
                    key={arr[i].id}
                    ref={(ref) => this.children[i] = ref}
                    index={i}
                    width={this.props.portraitWidth}
                    text={arr[i].name}
                    onPress={this.scrollToIndex}
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
