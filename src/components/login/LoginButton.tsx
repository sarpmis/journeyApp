import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { CallbackFunction } from "../../config/Types";

interface Props {
  onPressFunction: CallbackFunction;
  textColor: string;
  buttonText: string;
  extraStyle: any;
}

export default class LoginButton  extends React.Component<Props> {
  render() {
    return(
      <TouchableOpacity
          style={[styles.loginButton, this.props.extraStyle]}
          activeOpacity={1}
          onPress={this.props.onPressFunction}>
          <Text style={[styles.loginText, {color: this.props.textColor}]}>
              {this.props.buttonText}
          </Text>
      </TouchableOpacity>
    );
  }
}

// STYLING
const DEVICE_WIDTH = Dimensions.get("window").width;
const MARGIN = 30;

const styles = StyleSheet.create({
  loginButton: {
    alignItems: "center",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    margin: MARGIN,
    width: DEVICE_WIDTH - 2 * MARGIN,
    zIndex: 100,
  },
  loginText: {
    fontSize: 14,
  },
});
