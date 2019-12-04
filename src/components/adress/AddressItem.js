import React from "react";
import PropTypes from "prop-types";

const AddressItem = ({ addressItem }) => {
    const { first_name, last_name, address, coordinate_mobile } = addressItem;
    return (
        <div className="address">
            <h3 className="address__title">{address}</h3>
            <div className="address__info">
                <p>{`${first_name} ${last_name}`}</p>
                {coordinate_mobile.length > 1 && <p>{coordinate_mobile}</p>}
            </div>
        </div>
    );
};

AddressItem.propTypes = {
    addressItem: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        address: PropTypes.string,
        coordinate_mobile: PropTypes.string
    })
};

export default AddressItem;
