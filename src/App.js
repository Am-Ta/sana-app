import React from "react";
import "./App.scss";

import AddAddress from "./components/adress/AddAddress";
import Addresses from "./components/adress/Addresses";

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <AddAddress />
                <Addresses />
            </div>
        </div>
    );
};

export default App;
