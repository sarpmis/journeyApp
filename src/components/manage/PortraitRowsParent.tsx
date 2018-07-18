import * as React from "react";
import {
    ScrollView,
    StyleSheet,
    View,
    Dimensions,
} from "react-native";
import { People } from "./People";
import PortraitScrollView from "./PortraitScrollView";
import Portrait from "./Portrait";
import { DummyPeople } from "@src/components/manage/DummyPeopleService";
import {
    PORTRAIT_WIDTH,
    PORTRAIT_ROW_HEIGHT,
    BOTTOM_NAVBAR_HEIGHT,
    TOP_NAVBAR_HEIGHT,
    ROOT_PORTRAIT_HEIGHT,
    ROOT_PORTRAIT_WIDTH,
} from "@config/Configuration";

const DEVICE_HEIGHT = Dimensions.get("window").height;
const DEVICE_WIDTH = Dimensions.get("window").width;

interface Props {
    something: any;
}

interface State {
    rowStack: JSX.Element[];
}

export default class PortraitRows extends React.Component <Props> {
    private rowStack: JSX.Element[];
    private rowCount: number;

    constructor(props: Props) {
        super(props);
        this.state = {
            rowStack: null,
        }
        // binds
        this.pushRoot = this.pushRoot.bind(this);
        this.pushRow = this.pushRow.bind(this);
        this.popRow = this.popRow.bind(this);
        this.popUpTo = this.popUpTo.bind(this);
        this.createNewRow = this.createNewRow.bind(this);
        this.onPortraitPressed = this.onPortraitPressed.bind(this);
        this.updateState = this.updateState.bind(this);
        this.onHorizontalScroll = this.onHorizontalScroll.bind(this);
        // initializers
        this.rowStack = [];
        this.rowCount = 0;
        this.pushRoot(DummyPeople.list[0]);
        this.pushRow(DummyPeople.list);
    }

    pushRoot(person: People){
        this.rowStack.push(
            <View
                key={0}
                style={{alignItems: "center", paddingTop: 64}}
                >
                <Portrait
                    person={person}
                    index={-1}
                    width={ROOT_PORTRAIT_WIDTH}
                    height={ROOT_PORTRAIT_HEIGHT}
                    onPress={this.onPortraitPressed}
                />
            </View>,
        );
    }
    // pushes a new row to the bottom of the stack
    pushRow(data: People[]) {
        this.rowCount++;
        this.rowStack.push(
            <PortraitScrollView
                    key={this.rowCount}
                    index={this.rowCount}
                    data={ data }
                    portraitWidth={ PORTRAIT_WIDTH }
                    onPortraitPressed={this.onPortraitPressed}
                    removeRowsBelow={this.onHorizontalScroll}
                    height={PORTRAIT_ROW_HEIGHT}/>,
        );
    }

    // pops the bottom row from the stack
    popRow() {
        if (this.rowCount !== 0) {
        this.rowStack.pop();
        this.rowCount--;
        }
    }

    // pops rows until the specified index is at the bottom
    popUpTo(index: number) {
        if (index < this.rowCount) {
            const popCount = this.rowCount - index;
            for (let i = 0; i < popCount; i++) {
                this.popRow();
            }
        }
    }

    createNewRow(id: string) {
        this.pushRow(DummyPeople.list);
    }

    /****************************** CALLBACK FUNCTIONS ******************************/
    // When a portrait is pressed a new row using the users id is created
    onPortraitPressed(personId: string, rowIndex: number, createRow: boolean) {
        this.popUpTo(rowIndex);
        if (createRow) {
            this.createNewRow(personId);
            this.updateState();
        }
    }

    // When user scrolls away on a row, we delete all rows below it
    onHorizontalScroll(rowIndex: number) {
        this.popUpTo(rowIndex);
        this.updateState();
    }

    // rowStack is a class variable, but react only renders changes when
    // state variables change. So whenever we want our changes to render
    // we copy rowStack to state
    updateState() {
        this.setState({
            rowStack: this.rowStack,
        });
    }

    render() {
        return(
            <ScrollView 
                contentContainerStyle={styles.scrollViewContainer}
                decelerationRate={0.7}
                >
                {this.rowStack}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    bottomBuffer: {
        backgroundColor: "blue",
        // height: 100,
    },
    scrollViewContainer: {
        // backgroundColor: "lightblue",
        paddingBottom: DEVICE_HEIGHT - PORTRAIT_ROW_HEIGHT
            - BOTTOM_NAVBAR_HEIGHT
            - TOP_NAVBAR_HEIGHT,
    },
});
