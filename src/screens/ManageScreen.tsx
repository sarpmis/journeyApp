import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "@src/redux/actions/action";
import PortraitRowsParent from "@src/components/manage/PortraitRowsParent";

interface Props {
    navigation: any;
    username: string;
}

class ManageScreen extends React.Component<Props> {
    static navigationOptions = {
        tabBarVisible: false,
      };

    render() {
        return(
            <View style={styles.manageScreenBackground}>
                <PortraitRowsParent />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    manageScreenBackground: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "black",
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
