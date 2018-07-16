
export const DATA_AVAILABLE = "DATA_AVAILABLE";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_USERNAME = "SET_USERNAME";

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

export function setUsername(input: string) {
    return (dispatch) => {
        dispatch({
            type: SET_USERNAME,
            username: input,
        });
    };
}

export function setPassword(input: string) {
    return (dispatch) => {
        dispatch({
            type: SET_PASSWORD,
            password: input,
        });
    };
}
