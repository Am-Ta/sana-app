import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addAddress } from "../../actions/addressAction";

const AddAddress = ({ addAddress }) => {
    const [info, setInfo] = useState({
        first_name: "",
        last_name: "",
        mobileNumber: "",
        phoneNumber: "",
        address: "",
        gender: "male"
    });

    const {
        first_name,
        last_name,
        mobileNumber,
        phoneNumber,
        address,
        gender
    } = info;

    const handleChange = e =>
        setInfo({ ...info, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        addAddress(info);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__item">
                <label>
                    First Name
                    <input
                        type="text"
                        name="first_name"
                        value={first_name}
                        className="form__text"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className="form__item">
                <label>
                    Last Name
                    <input
                        type="text"
                        name="last_name"
                        value={last_name}
                        className="form__text"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className="form__item">
                <label>
                    Mobile Number
                    <input
                        type="tel"
                        name="mobileNumber"
                        value={mobileNumber}
                        className="form__text"
                        onChange={handleChange}
                        placeholder="0912*******"
                    />
                </label>
            </div>
            <div className="form__item">
                <label>
                    Phone Number
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber}
                        className="form__text"
                        onChange={handleChange}
                        placeholder="021********"
                    />
                </label>
            </div>
            <div className="form__item">
                <label>
                    Address
                    <input
                        type="text"
                        name="address"
                        value={address}
                        className="form__text"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className="form__item">
                <label>
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="form__radio"
                        onChange={handleChange}
                        checked={gender === "male"}
                    />
                </label>
                <label>
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="form__radio"
                        onChange={handleChange}
                        checked={gender === "female"}
                    />
                </label>
            </div>
            <div className="form__item">
                <button type="submit" className="btn btn_block btn_success">
                    Next <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </form>
    );
};

AddAddress.propTypes = {};

export default connect(null, { addAddress })(AddAddress);
