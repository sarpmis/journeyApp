import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// interface LoginLogoProps {
// }

const LoginLogo: React.SFC<{}> = () => (
  <View style={styles.loginScreenContainer}>
      <Image
          source={require("../../../assets/logo-icon.png")}
          style={styles.loginScreenLogo} />
      <Text> JOURNEY </Text>
  </View>
);

const styles = StyleSheet.create({
  loginScreenContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  loginScreenLogo: {
    marginBottom: 10,
  },
});

export default LoginLogo;
