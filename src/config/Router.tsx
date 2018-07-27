import React from "react";
import {
  Animated,
  Easing,
} from "react-native";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
// @ts-ignore
import LoginScreen from "@src/screens/LoginScreen";
// @ts-ignore
import ManageScreen from "@src/screens/ManageScreen";
// @ts-ignore
import WelcomeScreen from "@src/screens/WelcomeScreen";
// @ts-ignore
import CalendarScreen from "@src/screens/CalendarScreen";
// @ts-ignore
import MainHeader from "@src/components/navbar/MainHeader";
// @ts-ignore
import LoginHeader from "@src/components/login/LoginHeader";

export const MainNavigator = createBottomTabNavigator(
  {
    manage: { screen: ManageScreen },
    calendar: { screen: CalendarScreen }
  },
  {
    initialRouteName: "manage",
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

// TRANSITION ANIMATIONS CONTROLLED LIKE THIS

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
