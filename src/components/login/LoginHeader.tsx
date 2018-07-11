import * as React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface LoginHeaderProps {
    navigation: any;
}

const LoginHeader: React.SFC<LoginHeaderProps> = ({ navigation }) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity
            style={styles.headerLeftContainer}
            onPress={() => navigation.goBack()} >
            <Image source={require("../../../assets/back_icon.png")} style={styles.loginPageBackIcon} />
        </TouchableOpacity>
        <View style={styles.headerMidContainer}>
            <Text style={{fontSize: 18, lineHeight: 25, opacity: 0.8}}>Login</Text>
        </View>
        <View style={styles.headerRightContainer}>
        </View>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.1)",
        flexDirection: "row",
        height: 64,
        paddingBottom: 10,
        paddingTop: 25,
        // borderColor: 'red',
        // borderWidth: 1
    },
    headerLeftContainer: {
        alignItems: "flex-start",
        height: "100%",
        justifyContent: "center",
        paddingLeft: 10,
        width: "25%",
        // borderColor: 'red',
        // borderWidth: 1
    },
    headerMidContainer: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: "50%",
        // borderColor: 'red',
        // borderWidth: 1
    },
    headerRightContainer: {
        alignItems: "flex-end",
        height: "100%",
        justifyContent: "center",
        paddingRight: 10,
        width: "25%",
        // borderColor: 'red',
        // borderWidth: 1
    },
    loginPageBackIcon: {
        maxHeight: 40,
        maxWidth: 40,
    },
});

export default LoginHeader;
