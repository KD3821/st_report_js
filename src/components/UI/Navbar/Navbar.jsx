import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="mynavbar">
            <Link to={`rides`} >Поездки</Link>
            <Link to={`drivers`} >Водители</Link>
            <Link to={`login`} >Вход</Link>
        </div>
    );
};

export default Navbar;