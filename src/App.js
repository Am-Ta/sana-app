import React from "react";
import "./App.scss";

import AddAddress from "./components/adress/AddAddress";
import Addresses from "./components/adress/Addresses";

const App = () => {
    return (
        <div className="app">
            <AddAddress />
            <Addresses />
        </div>
    );
};

export default App;
