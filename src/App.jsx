import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home"
import Landing from "./pages/Landing"
import EditProfile from "./pages/Profile/EditProfile"
import UserProfile from "./pages/Profile/UserProfile"
import SignUp from "./pages/SignUp/SignUp"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/signup",
    element: <SignUp />,
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
]);

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}