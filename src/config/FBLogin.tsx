import {
    Alert,
} from "react-native";

export async function logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync("671743613165732", {
        permissions: ["public_profile"],
        });
    if (type === "success") {
        // Get the user"s name using Facebook"s Graph API
        const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert(
        "Logged in!",
        `Hi ${(await response.json()).name}!`,
        );
    }
}
