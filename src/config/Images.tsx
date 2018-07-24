import { Asset } from "expo";
import React from "react";
import { Image } from "react-native";

export const Images = {
    person: {
        "adile-nasit.png": require("@assets/peoples/adile-nasit.png"),
        "munir-ozkul.png": require("@assets/peoples/munir-ozkul.png"),
        "ilyas-salman.png": require("@assets/peoples/ilyas-salman.png"),
        "ahmet-ariman.png": require("@assets/peoples/ahmet-ariman.png"),
        "feridun-savli.png": require("@assets/peoples/feridun-savli.png"),
        "halit-akcatepe.png": require("@assets/peoples/halit-akcatepe.png"),
        "tarik-akan.png": require("@assets/peoples/tarik-akan.png"),
        "sevda-tolga.png": require("@assets/peoples/sevda-tolga.png"),
        "perran-kutman.png": require("@assets/peoples/perran-kutman.png"),
        "sener-sen.png": require("@assets/peoples/sener-sen.png"),
    },
    backgrounds: {
        welcomeScreen: require("@assets/login-background.png"),
        loginScreen: require("@assets/Videos/login.mp4"),
    },
};

export function cacheBackgroundImages() {
    const promises = new Array();
    for (const img in Images.backgrounds) {
        // @ts-ignore
        promises.push(Asset.fromModule(Images.backgrounds[img]).downloadAsync());
        // console.log("cached " + img);
    }
    return promises;
}

export function cachePortraitImages() {
    const promises = new Array();
    for (const img in Images.person) {
        // @ts-ignore
        promises.push(Asset.fromModule(Images.person[img]).downloadAsync());
    }
    return promises;
}
