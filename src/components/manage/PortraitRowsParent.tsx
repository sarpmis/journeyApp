import * as React from "react";
import {
    ScrollView,
    StyleSheet,
    View,
    Dimensions,
} from "react-native";
import { People } from "./People";
import PortraitRow from "./PortraitRow";
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
        this.popAndCreate = this.popAndCreate.bind(this);
        this.removeRowsBelow = this.removeRowsBelow.bind(this);
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
                    onPress={this.popAndCreate}
                />
            </View>,
        );
    }
    // pushes a new row to the bottom of the stack
    pushRow(data: People[]) {
        this.rowCount++;
        this.rowStack.push(
            <PortraitRow
                    key={this.rowCount}
                    index={this.rowCount}
                    data={ data }
                    portraitWidth={ PORTRAIT_WIDTH }
                    onPortraitPressed={this.popAndCreate}
                    onMidChange={this.removeRowsBelow}
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
    // pops up to the given row index and creates a new row using the given 
    // person Id
    popAndCreate (personId: string, rowIndex: number, createRow: boolean) {
        this.popUpTo(rowIndex);
        // console.log("popping up to: " + rowIndex + " createRow: " + createRow + " personId: " + personId);
        if (createRow) {
            this.createNewRow(personId);
            this.forceUpdate();
        }
    }

    // When user scrolls away on a row, we delete all rows below it
    removeRowsBelow(rowIndex: number) {
        const stackSizeBefore = this.rowCount;
        this.popUpTo(rowIndex);
        if (stackSizeBefore !== this.rowCount) {
            this.forceUpdate();
        }
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
    scrollViewContainer: {
        // backgroundColor: "lightblue",
        paddingBottom: DEVICE_HEIGHT - PORTRAIT_ROW_HEIGHT
            - BOTTOM_NAVBAR_HEIGHT
            - TOP_NAVBAR_HEIGHT,
    },
});
