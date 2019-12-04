import React, { useEffect } from "react";
import AddressItem from "./AddressItem";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getAddress } from "../../actions/addressAction";

const Addresses = ({ address, user, getAddress }) => {
    useEffect(() => {
        getAddress();
    }, []);

    useEffect(() => {
        getAddress();
    }, [user]);

    return (
        <div className="app_addresses">
            {address.length > 0 &&
                address
                    .slice(address.length - 5)
                    .map((addressItem, index) => (
                        <AddressItem key={index} addressItem={addressItem} />
                    ))}
        </div>
    );
};

Addresses.propTypes = {
    getAddress: PropTypes.func,
    address: PropTypes.array,
    user: PropTypes.object
};

const mapStateToProps = state => ({
    address: state.addressSource.address,
    user: state.addressSource.user
});

export default connect(mapStateToProps, { getAddress })(Addresses);
