import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import { LinearGradient } from "expo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// @ts-ignore
import * as Actions from "@src/redux/actions/action";
// @ts-ignore
import PortraitRowsParent from "@src/components/manage/PortraitRowsParent";
// @ts-ignore
import MainHeader from "@src/components/navbar/MainHeader";

interface Props {
    navigation: any;
    username: string;
}

class ManageScreen extends React.Component<Props> {
    static navigationOptions = {
        tabBarVisible: false,
        header: <MainHeader/>,
      };

    render() {
        return(
            <View style={StyleSheet.absoluteFillObject}>
                <View style={styles.manageScreenBackground}>
                    <LinearGradient colors={["#1A1D1F", "#40484D"]}>
                        <PortraitRowsParent />
                    </LinearGradient>
                </View>
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
    };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(Actions, dispatch);
}

// Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(ManageScreen);
