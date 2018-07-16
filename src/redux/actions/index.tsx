export const DATA_AVAILABLE = "DATA_AVAILABLE";
export const SET_USERNAME = "SET_USERNAME";
export const SET_PASSWORD = "SET_PASSWORD";
export const GET_USERNAME = "GET_USERNAME";

// Import the sample data
import Data from "./instructions.json";

export function getData() {
    return (dispatch) => {

        // Make API Call
        // For this example, I will be using the sample data in the json file
        // delay the retrieval [Sample reasons only]
        setTimeout(() => {
            const data  = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);
    };
}

// The user has logged in
export const setUsername = (username: string) => {
    return {
        type: SET_USERNAME,
        username: (username),
    };
};

export const setPassword = (password: string) => {
    return {
        type: SET_PASSWORD,
        password: (password),
    };
};

export const getUsername = () => {
    return {
        type: GET_USERNAME,
    };
};
