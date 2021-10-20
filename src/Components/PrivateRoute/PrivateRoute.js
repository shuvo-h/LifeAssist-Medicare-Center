import React from 'react';
import './PrivateRoute.css';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} = useAuth();
    // retuen if the data is loading 
    if (isLoading) {
        return <Spinner  className="spin-loader mx-auto d-block mt-5 fs-1" animation="border" variant="primary" />;
    }
    return (
        <Route
            {...rest}
            render={({location})=> user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: {from: location}
                }}
            ></Redirect>}

        ></Route>
    );
};

export default PrivateRoute;