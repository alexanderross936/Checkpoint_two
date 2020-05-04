import React from 'react'
import { Switch, Route } from 'react-router'
import Listing from './containers/Listing'
import Login from './components/Login'
import Business from './containers/Business'
import addListing from './containers/addListing'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
            <Route path="/login" component={Login} />
            <Route path="/business/:id" component={Business} />
            <Route path="/addlisting" component={addListing} />
        </Switch>
    );
};

export default Router;