import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className="mynavbar">
            <Link to={`rides`} >Поездки</Link>
            <Link to={`drivers`} >Водители</Link>
            <Link to={`login`} >Вход</Link>
            <MyButton onClick={logout} >Exit</MyButton>
        </div>
    );
};

export default Navbar;