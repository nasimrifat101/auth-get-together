import { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-sm"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" />;
};

// Define PropTypes for the component
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired, // children prop is required and must be a React node
};

export default PrivateRoute;
