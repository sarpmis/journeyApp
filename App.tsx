import { MainNavigator } from "./src/config/Router";

// SETTING GLOBAL TEXT STYLE
import {setCustomText} from "react-native-global-props";

const globalTextProps = {
  style: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 16,
    textAlign: "center",
  },
};

setCustomText(globalTextProps);

// ENTRY POINT OF APP
export default MainNavigator;