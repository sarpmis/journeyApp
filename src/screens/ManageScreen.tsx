import React from "react";
import { Text } from "react-native";

import * as Actions from "@src/redux/actions/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

interface Props {
    username: string;
}

class ManageScreen extends React.Component<Props> {
    render() {
        return(
            <Text style={{color: "black", marginTop: 200}}> Hellooooo {this.props.username} </Text>
        );
    }
}

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
