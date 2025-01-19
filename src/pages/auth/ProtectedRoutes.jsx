import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRoutes = ({ children }) => {
    const isAuth = true; // This should be replaced with your actual auth check logic
    
    if (!isAuth) {
        return <Navigate to="/login" replace />; // Use replace to avoid adding the login route to history
    }

    return children; // Render children if authenticated
};

ProtectedRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoutes;
