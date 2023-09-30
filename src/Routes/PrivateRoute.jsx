import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        // Use className instead of class for defining CSS classes
        return <span className="loading loading-spinner loading-sm"></span>;
    }

    if (user) {
        return children;
    }

    // Use Navigate component to redirect to the login page
    return <Navigate to="/login" />;
};

export default PrivateRoute;
