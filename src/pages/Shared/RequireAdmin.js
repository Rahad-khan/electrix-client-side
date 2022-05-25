import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from './Spinner';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    const email = user?.email;
    const { data, isLoading } = useQuery(["adminQuery", user], async () => {
        return await axios.get(`https://toolkits-server.herokuapp.com/user/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
    });
    if (loading || isLoading) {
        return <Spinner></Spinner>
    };

    const role = data?.data?.role;

    if (!user || !(role === 'admin')) {
        signOut(auth);
        localStorage.removeItem("accessToken")
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;