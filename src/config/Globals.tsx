// for global styling
// @ts-ignore
import { setCustomText } from "react-native-global-props";

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

export default function setGlobals() {
    setCustomText(globalTextProps);
}
