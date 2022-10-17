import React, {useContext} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Drivers from "../pages/Drivers";
import Rides from "../pages/Rides";
import Login from "../pages/Login";
import RideIdPage from "../pages/RideIdPage";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";


const Arouter = createBrowserRouter([
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
                element: <RideIdPage />,
            },
            {
                path:"/login",
                element: <Login />,
            },
        ],
    },
]);

const Nrouter = createBrowserRouter([
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

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);

    if (isLoading) {
        return <Loader />
    }
    return (
        isAuth
            ? <RouterProvider router={Arouter}/>
            : <RouterProvider router={Nrouter}/>

    )
}

export default AppRouter;