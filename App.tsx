import React from "react";
import { Provider } from "react-redux";
// @ts-ignore
import store from "@redux/store";
import { MainNavigator } from "@config/Router";
import setGlobals from "@config/Globals";

setGlobals();

const runCPUburner = () => {
    const timestamp = Date.now() + 160;
    while(Date.now() < timestamp) {};
    requestAnimationFrame(runCPUburner);
  }
runCPUburner();

// ENTRY POINT OF APP
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
