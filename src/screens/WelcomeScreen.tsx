import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationScreenProps } from "react-navigation";
// @ts-ignore
import LoginButton from "@src/components/login/LoginButton";
// @ts-ignore
import LoginLogo from "@src/components/login/LoginLogo";
// @ts-ignore
import { logIn } from "@src/config/FBLogin";
// @ts-ignore
import LoginHeader from "@src/components/login/LoginHeader";

class WelcomeScreen extends React.Component<NavigationScreenProps> {

  static navigationOptions = {
    tabBarVisible: false,
    header: null,
  };

  goToLoginPage = () => {
    this.props.navigation.navigate("login");
  }

  render() {
    return (
      <ImageBackground
        source={require("..\\assets\\login-background.png")}
        style={styles.backgroundImage}>
        <View style={{flex: 1}}>
          <View style={styles.loginScreenRowContainer}>
            <LoginLogo/>
          </View>
          <View style={styles.loginScreenRowContainer}>
            <View style={styles.loginInfoContainer}>
                <Text style={styles.loginInfoText}>
                  This app is designed for you. Journey will be your guide.
                </Text>
            </View>
          </View>
          <View style={styles.loginScreenRowContainer}>
            <View style={styles.loginButtonContainer}>
              <LoginButton
                onPressFunction={logIn}
                extraStyle={{backgroundColor: "#5E50E4", marginBottom: 15}}
                textColor={"#FFFFFF"}
                buttonText="login with facebook" />
              <Text style={[styles.loginInfoText, {opacity: 0.6, fontWeight: "500"}]}>
                  already a member?
              </Text>
              <LoginButton
                onPressFunction={this.goToLoginPage}
                extraStyle={{backgroundColor: "#FFFFFF", marginTop: 15}}
                textColor={"#363636"}
                buttonText="login" />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

// STYLING
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
  },
  loginButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  loginInfoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  loginInfoText: {
    opacity: 0.8,
    textAlign: "center",
    width: "75%",
  },
  loginScreenRowContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default WelcomeScreen;
