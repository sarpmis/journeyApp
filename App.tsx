import React from "react";
import { Provider } from "react-redux";
// @ts-ignore
import store from "@redux/store";
import { MainNavigator } from "./src/config/Router";
// for global styling
// @ts-ignore
import {setCustomText} from "react-native-global-props";

const globalTextProps = {
  style: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 12,
    fontWeight: "900",
    // justifyContent: "center",
    lineHeight: 16,
    textAlign: "center",
  },
};

setCustomText(globalTextProps);

// ENTRY POINT OF APP

// export default MainNavigator;

export default class App extends React.Component {
  render() {
      return (
          <Provider store={store}>
              {/* <Home /> */}
              <MainNavigator />
          </Provider>
      );
  }
}
