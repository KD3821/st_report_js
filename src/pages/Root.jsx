import React from 'react';
import {Link} from "react-router-dom";

const Root = () => {

    return (
        <div>
            <Link to={`rides`} >Поездки</Link>
            <Link to={`drivers`} >Водители</Link>
        </div>
    );
};

export default Root;