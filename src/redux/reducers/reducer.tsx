import { combineReducers } from 'redux';
// Import the actions type constants we defined in our actions
import { DATA_AVAILABLE, SET_USERNAME, SET_PASSWORD } from "../actions/action";

let initState = { data: [], loading: true, username: "default_placeholder" };

const loginReducer = (state = initState, action: any) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
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
