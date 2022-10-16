import React from 'react';
import {useRouteError} from 'react-router-dom';
import Navbar from "../components/UI/Navbar/Navbar";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <Navbar/>
            <div className="error">
                <h1>Ой!</h1>
                <p>Что-то пошло не так!</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}
export default ErrorPage;