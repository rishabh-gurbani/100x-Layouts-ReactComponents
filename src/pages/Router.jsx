import { useState } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
  } from "react-router-dom";
  
import Home from "./Home/Home"
import Landing from "./Landing"
import EditProfile from "./Profile/EditProfile"
import UserProfile from "./Profile/UserProfile"
import SignUp from "./SignUp/SignUp"

import { useAuthUser } from "../context/AuthContext"
import { ProtectedRoute } from "./ProtectedRoute"

const Routes = () => {
    const [user, setUser] = useState(useAuthUser());

    const nonAuthenticatedRoutes = [
        {
            path: "/",
            element: <Landing/>,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
    ]

    const authenticatedRoutes = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/",
                    element: <Navigate to="/home" />
                },
                {
                    path: "/home",
                    element: <Home/>,
                },
                {
                    path: "/profile",
                    element: <UserProfile/>,
                },
                {
                    path: "/editProfile",
                    element: <EditProfile />
                },
            ]   
        },
    ]

    const router = createBrowserRouter([
        ...(!user ? nonAuthenticatedRoutes : []),
        ...authenticatedRoutes,
    ]);

    return <RouterProvider router={router} />;

}

export default Routes;
