import * as React from "react";
import {
    ScrollView,
    Text,
    View,
    Dimensions,
} from "react-native";
import Portrait from "./Portrait";
import { People } from "./People";

interface Props {
    data: People[];
    portraitWidth: number;
}

interface State {
    middleIndex: number;
}

const DEVICE_WIDTH = Dimensions.get("window").width;

export default class PortraitScrollView extends React.Component <Props, State> {

    constructor(props: any) {
        super(props);
    }

    handleScroll(event: Object){
        const offset = event.nativeEvent.contentOffset.x;
        console.log(offset);
        // calculate middle index using portrait width, update state
        // middleIndex = 
    }

    // TODO: call this onMomentumScrollEnd
    enlargeSelected(){
        return null;
    }
    // TODO call this onScrollBeginDrag ?
    shrinkSelected(){
        return null;
    }

    render() {
        const listItems = this.props.data.map((p) => {
            return (
              <Portrait key={p.id} width={this.props.portraitWidth} text={p.name}/>
            );
        });

        const middlePortrait = Math.floor(this.props.data.length / 2);

        return(
            <ScrollView
                horizontal
                snapToInterval={this.props.portraitWidth}
                snapToAlignment="center"
                scrollEventThrottle={16}
                onScroll={this.handleScroll}
                style={{  borderColor: "magenta", marginTop: 100} }>
                {listItems}
            </ScrollView>
        );
    }
}
