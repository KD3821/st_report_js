import React from 'react';
import './styles/App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Drivers from "./pages/Drivers";
import Rides from "./pages/Rides";
import Root from "./pages/Root";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />
    },
    {
        path: "/drivers",
        element: <Drivers />,
    },
    {
        path: "/rides",
        element: <Rides />,
    },
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App;
