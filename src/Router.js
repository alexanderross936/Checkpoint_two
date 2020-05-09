import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Listing from './containers/Listing'
import Login from './components/Login'
import Business from './containers/Business'
import addListing from './containers/addListing'
import cookie from 'cookie'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
            <Route exact path="/login" component={Login} />
            <Route path="/business/:id" component={Business} />
            <ProtectedRoute exact path="/addlisting" component={addListing} />
        </Switch>
    );
};

export default Router;