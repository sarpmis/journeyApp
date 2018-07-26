import React from "react";
import {
  Animated,
  Easing,
} from "react-native";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import LoginScreen from "@src/screens/LoginScreen";
import ManageScreen from "@src/screens/ManageScreen";
import WelcomeScreen from "@src/screens/WelcomeScreen";
import CalendarScreen from "@src/screens/CalendarScreen";
import MainHeader from "@src/components/navbar/MainHeader";
import LoginHeader from "@src/components/login/LoginHeader";

export const MainNavigator = createBottomTabNavigator(
  {
    manage: { screen: ManageScreen },
    calendar: { screen: CalendarScreen }
  },
  {
    initialRouteName: "calendar",
    // headerMode: "float",
    // mode: "modal",
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export const LoginNavigator = createStackNavigator(
  {
    welcome: { screen: WelcomeScreen },
    login: { screen: LoginScreen },
    main: { screen: MainNavigator },
  },
  {
    initialRouteName: "welcome",
    headerMode: "none",
    // mode: "modal",
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

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
