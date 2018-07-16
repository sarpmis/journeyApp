import { createBottomTabNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import ManageScreen from "../screens/ManageScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

export const MainNavigator = createBottomTabNavigator({
  home: { screen: WelcomeScreen },
  login: { screen: LoginScreen },
  manage: { screen: ManageScreen },
});
