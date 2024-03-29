import { ADD_ADDRESS, GET_ADDRESS, ERROR_ADDRESS } from "../actions/types";
const initialState = {
    user: null,
    address: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return {
                ...state,
                user: action.payload,
                error: null
            };
        case GET_ADDRESS:
            return {
                ...state,
                address: action.payload
            };
        case ERROR_ADDRESS:
            return {
                ...state,
                error: action.payload,
                address: [],
                user: null
            };
        default:
            return state;
    }
};
