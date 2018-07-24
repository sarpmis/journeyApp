import React from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Video } from "expo";

import { NavigationScreenProps } from "react-navigation";
import LoginHeader from "../components/login/LoginHeader";
import LoginInput from "../components/login/LoginInput";
import LoginLogo from "../components/login/LoginLogo";
import {
  TOP_NAVBAR_HEIGHT,
  // @ts-ignore
} from "@config/Configuration";
import {
  Images,
  // @ts-ignore
} from "@config/Images";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

class LoginScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    tabBarVisible: false,
  };

  vid: any;
  constructor(props: any){
    super(props);
    this.setVideoRef = this.setVideoRef.bind(this);
  }

  setVideoRef(ref: any) {
    this.vid = ref;
  }

  componentDidMount() {
    this.vid.pauseAsync();
  }

  render() {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.background}>
          <Video
          source={Images.backgrounds.loginScreen}
          rate={1.0}
          isMuted
          resizeMode="cover"
          shouldPlay
          isLooping={true}
          style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT }}
          ref={this.setVideoRef}
          />
        </View>
        <View style={styles.overlay}>
          <LoginHeader navigation={this.props.navigation} />
          <TouchableWithoutFeedback style={
            {flex: 1}} onPress={ () => { Keyboard.dismiss(); } }>
            <View style={{flex: 1}}>
                <KeyboardAvoidingView
                      style={styles.loginRowContainer}
                      behavior="position"
                      keyboardVerticalOffset={TOP_NAVBAR_HEIGHT} >
                  <View style={{flex: 1} }>
                    <View style={[styles.loginScreenRow, {justifyContent: "flex-start", paddingTop: 30}]}>
                      <LoginLogo/>
                    </View>
                    <View style={[styles.loginScreenRow, {justifyContent: "flex-end", paddingBottom: 30}]}>
                      <Text style={styles.loginInfoText}>
                          Your username and password are sent to you via email.
                      </Text>
                    </View>
                    <View style={[styles.loginScreenRow, {paddingBottom: 50}]}>
                      <LoginInput navigation={ this.props.navigation } />
                    </View>
                  </View>
                </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
  },
  loginInfoText: {
    opacity: 0.8,
    textAlign: "center",
    width: "60%",
  },
  loginRowContainer: {
    alignItems: "center",
    flex: 1,
    width: "100%",
    // borderColor: "yellow", borderWidth: 1,
  },
  loginScreenRow: {
    alignItems: "center",
    flex: 1,
    width: DEVICE_WIDTH,
    // borderColor: "green", borderWidth: 1,
  },
});

export default LoginScreen;
