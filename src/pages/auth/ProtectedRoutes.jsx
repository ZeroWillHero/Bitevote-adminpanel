import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRoutes = ({ children }) => {
    
    let isAuth = false;

    if (localStorage.getItem("accessToken")) {
        isAuth = true;
    }
    
    if (!isAuth) {
        return <Navigate to="/login" replace />; // Use replace to avoid adding the login route to history
    }

    return children; // Render children if authenticated
};

ProtectedRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoutes;
