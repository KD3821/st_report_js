import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import Navbar from "../components/UI/Navbar/Navbar";

const Login = () => {
    return (
        <div>
            <h1>Страница для Логина</h1>
            <form action="">
                <MyInput type="text" placeholder="Введите имя"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;