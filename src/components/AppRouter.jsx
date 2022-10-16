import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Drivers from "../pages/Drivers";
import Rides from "../pages/Rides";
import RideIdPage from "../pages/RideIdPage";
import Login from "../pages/Login";


export const Arouter = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "drivers",
                element: <Drivers />,
            },
            {
                path: "rides",
                element: <Rides />,
            },
            {
                path: "rides/:id",
                element: <Login />,
            },
            {
                path:"/login",
                element: <Login />,
            },
        ],
    },
]);

export const Nrouter = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "drivers",
                element: <Drivers />,
            },
            {
                path: "rides",
                element: <Rides />,
            },
            {
                path:"/login",
                element: <Login />,
            },
        ],
    },
]);
