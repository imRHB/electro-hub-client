import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return user.email && admin ? children : (<Navigate to="/login" state={{ from: location }} />)
};

export default AdminRoute;

