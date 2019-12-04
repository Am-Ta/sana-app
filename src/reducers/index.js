import Address from "./addressReducer";
import { combineReducers } from "redux";

export default combineReducers({
    adressSource: Address
});
