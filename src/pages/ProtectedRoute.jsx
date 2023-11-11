import { Navigate, Outlet } from "react-router-dom";
import { useAuthUser } from "../context/AuthContext";

export const ProtectedRoute = () => {
    const user = useAuthUser();

    if (!user) {
      return <Navigate to="/signup" />;
    }
  
    return <Outlet />;
  };
  
