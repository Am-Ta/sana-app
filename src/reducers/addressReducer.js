import { ADD_ADDRESS, GET_ADDRESS, ERROR_ADDRESS } from "../actions/types";
const initialState = {
    user: null,
    adresses: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return {
                ...state,
                user: action.payload
            };
        case ERROR_ADDRESS:
            return {
                ...state,
                error: action.payload,
                addresses: [],
                user: null
            };
        default:
            return state;
    }
};
