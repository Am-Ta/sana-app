import React from "react";
import PropTypes from "prop-types";

const AlertItem = ({ error, errorText }) => {
    return (
        <div className="alert__item">
            <i className="fas fa-exclamation-circle"></i>{" "}
            {`${error}: ${errorText}`}
        </div>
    );
};

AlertItem.propTypes = {
    error: PropTypes.string,
    errorText: PropTypes.string
};
export default AlertItem;
