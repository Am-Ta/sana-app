import React from "react";
import PropTypes from "prop-types";
import AlertItem from "./AlertItem";

import { connect } from "react-redux";

const Alerts = ({ errors }) => {
    return (
        <div className="alerts">
            {errors &&
                Object.keys(errors).map((error, index) => (
                    <AlertItem
                        key={index}
                        error={error}
                        errorText={errors[error][0]}
                    />
                ))}
        </div>
    );
};

Alerts.propTypes = {
    errors: PropTypes.object
};

const mapStateToProps = state => ({
    errors: state.addressSource.error
});
export default connect(mapStateToProps, {})(Alerts);
