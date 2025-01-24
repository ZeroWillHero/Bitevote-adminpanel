import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { auth } from "../../firebase.init";

const ProtectedRoutes = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkFirebaseAuth = async () => {
            try {
                const user = auth.currentUser;
                console.log('user', user);
                if (user) {
                    setIsAuth(true);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        checkFirebaseAuth();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator while checking auth status
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
