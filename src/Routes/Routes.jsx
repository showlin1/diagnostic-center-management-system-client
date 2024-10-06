import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPages from "../Pages/ErrorPages";
import DashboardLayout from "../Layout/DashboardLayout";
import MyProfile from "../Pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPages />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <MyProfile />
            },
        ]
    },
]);