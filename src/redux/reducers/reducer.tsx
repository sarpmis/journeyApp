import { combineReducers } from "redux";
// Import the actions type constants we defined in our actions
import { SET_USERNAME, SET_PASSWORD } from "../actions/action";

const initState = { username: "default_placeholder" };

const loginReducer = (state = initState, action: any) => {
    switch (action.type) {
        case SET_USERNAME:
            state = Object.assign({}, state, { username: action.username });
        case SET_PASSWORD:
            state = Object.assign({}, state, { password: action.password });
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    loginReducer,
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
