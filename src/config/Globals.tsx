// for global styling
// @ts-ignore
import { setCustomText } from "react-native-global-props";

const globalTextProps = {
    style: {
      color: "#FFFFFF",
      // This font causes errors in Android and has to be downloaded separately
      // fontFamily: "Avenir",
      fontSize: 12,
      fontWeight: "900",
      // justifyContent: "center",
      lineHeight: 16,
      textAlign: "center",
    },
};

export default function setGlobals() {
    setCustomText(globalTextProps);
}
