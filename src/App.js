import React from 'react';
import './styles/App.css';
import {RouterProvider} from "react-router-dom";
import {Arouter, Nrouter} from "./components/AppRouter";


function App() {
    const isAuth = true;
    return (
        isAuth
            ? <RouterProvider router={Arouter}/>
            : <RouterProvider router={Nrouter}/>

    )
}

export default App;
