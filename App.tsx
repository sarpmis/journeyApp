import React from "react";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
// @ts-ignore
import store from "@redux/store";
// @ts-ignore
import { LoginNavigator, MainNavigator } from "@config/Router";
// @ts-ignore
import setGlobals from "@config/Globals";
// @ts-ignore
import { cacheBackgroundImages, cachePortraitImages } from "@config/Images";

// Function to simulate load on the JS thread. Used to test if animations on the
// native thread work as expected, or simulate a low-end device performance.
const runCPUburner = () => {
    const timestamp = Date.now() + 160;
    while (Date.now() < timestamp) {};
    requestAnimationFrame(runCPUburner);
};
// runCPUburner();

interface State {
    isReady: boolean;
}

// ENTRY POINT OF APP
export default class App extends React.Component<State> {
    constructor(props: any) {
        super(props);
        // initial state
        this.state = {
            isReady: false,
        };
        // binds
        this.initApp = this.initApp.bind(this);
    }

    // cache assets for faster load speed and low bandwith usage
    async loadAssetsAsync() {
        const backgrounds = cacheBackgroundImages();
        const portraits = cachePortraitImages();
        await Promise.all([...backgrounds, ...portraits]);
    }

    async initApp() {
        this.loadAssetsAsync();
        setGlobals();
    }

    render() {
        if (!this.state.isReady) {
            return(
                // show loading screen until all assets are loaded
                <AppLoading
                    startAsync={this.initApp}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }
        return (
            <Provider store={store}>
                <LoginNavigator />
            </Provider>
        );
    }
}
