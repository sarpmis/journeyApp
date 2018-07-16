import { MainNavigator } from "./src/config/Router";

// SETTING GLOBAL TEXT STYLE
// @ts-ignore
import {setCustomText} from "react-native-global-props";

import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store'; //Import the store
import Home from './src/Comp' //Import the component file

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
              <Home />
          </Provider>
      );
  }
}
