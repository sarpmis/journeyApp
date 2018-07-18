import React from "react";
import {
    Text,
    View,
    StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "@src/redux/actions/action";
import Portrait from "@src/components/manage/Portrait";
import PortraitScrollView from "@src/components/manage/PortraitScrollView";
import PortraitRowsParent from "@src/components/manage/PortraitRowsParent";
import { DummyPeople } from '@src/components/manage/DummyPeopleService';

interface Props {
    navigation: any;
    username: string;
}

class ManageScreen extends React.Component<Props> {

    render() {
        return(
            // <Text style={{color: "black", marginTop: 200}}> Hellooooo {this.props.username} </Text>
            // <View style={styles.selectedPortraitContainer}>
            //     <Portrait width={200} height={300} />
            // </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                {/* <PortraitScrollView
                    data={ DummyPeople.list }
                    portraitWidth={100} /> */}
                <PortraitRowsParent />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    selectedPortraitContainer: {
        borderWidth: 2,
        borderColor: "green",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

/****************************** REDUX BOILERPLATE ******************************/

// Allows us to call use objects in state as props
function mapStateToProps(state: any, props: any) {
    return {
        username: state.loginReducer.username,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(Actions, dispatch);
}

// Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(ManageScreen);
