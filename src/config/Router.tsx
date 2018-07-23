import {
  Animated,
  Easing,
} from "react-native";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import ManageScreen from "../screens/ManageScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

export const MainNavigator = createStackNavigator(
  {
    welcome: { screen: WelcomeScreen },
    login: { screen: LoginScreen },
    manage: { screen: ManageScreen },
  },
  {
    initialRouteName: "welcome",
    headerMode: "none",
    // mode: "modal",
    navigationOptions: {
      gesturesEnabled: false,
    },
    // transitionConfig: () => ({
    //   transitionSpec: {
    //     duration: 500,
    //     easing: Easing.out(Easing.poly(4)),
    //     timing: Animated.timing,
    //   },
    //   screenInterpolator: (sceneProps) => {
    //     const { layout, position, scene } = sceneProps;
    //     const { index } = scene;

    //     const height = layout.initHeight;
    //     const translateY = position.interpolate({
    //       inputRange: [index - 1, index, index + 1],
    //       outputRange: [height, 0, 0],
    //     });

    //     const opacity = position.interpolate({
    //       inputRange: [index - 1, index - 0.99, index],
    //       outputRange: [0, 1, 1],
    //     });

    //     return { opacity, transform: [{ translateY }] };
    //   },
    // }),
  }
);