import axios from "axios";
import { ADD_ADDRESS, GET_ADDRESS, ERROR_ADDRESS } from "./types";

export const addAddress = info => async dispatch => {
    try {
        const config = {
            auth: {
                username: "09822222222",
                password: "sana1234"
            }
        };
        const {
            address,
            first_name,
            last_name,
            gender,
            mobileNumber,
            phoneNumber
        } = info;

        const body = {
            region: 1,
            lat: 35.7717503,
            lng: 51.3365315,
            coordinate_mobile: mobileNumber,
            coordinate_phone_number: phoneNumber,
            address,
            first_name,
            last_name,
            gender
        };

        const res = await axios.post(
            "http://stage.achareh.ir/api/karfarmas/address",
            body,
            config
        );
        const data = await res.data;

        dispatch({
            type: ADD_ADDRESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ERROR_ADDRESS,
            payload: error.response.data
        });
    }
};

export const getAddress = () => async dispatch => {
    try {
        const config = {
            auth: {
                username: "09822222222",
                password: "sana1234"
            }
        };

        const res = await axios.get(
            "http://stage.achareh.ir/api/karfarmas/address",
            config
        );

        const data = await res.data;
        dispatch({
            type: GET_ADDRESS,
            payload: data
        });
    } catch (error) {}
};
