import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import RootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// this export is for testing
export const middleware = [Thunk];
const initialState = {};

const store = createStore(
    RootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
