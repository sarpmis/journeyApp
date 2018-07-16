export const SET_PASSWORD = "SET_PASSWORD";
export const SET_USERNAME = "SET_USERNAME";

export function setUsername(input: string) {
    return (dispatch: any) => {
        dispatch({
            type: SET_USERNAME,
            username: input,
        });
    };
}

export function setPassword(input: string) {
    return (dispatch: any) => {
        dispatch({
            type: SET_PASSWORD,
            password: input,
        });
    };
}
