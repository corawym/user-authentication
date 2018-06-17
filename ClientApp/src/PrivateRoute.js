import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            location={rest.location}
            render={props => (
                user.isAuth ? (
                    <Component {...props} />
                )
                    : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
            )}
        />
    );
};

export default connect(store => {
    return {
        user: store.user
    }
})(PrivateRoute);