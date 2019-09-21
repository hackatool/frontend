import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from './pages/Profile'
import CardList from './pages/CardList';

function Routes() {
    return (
    <Switch>
        <Route path="/" exact component={CardList} />
        <Route path="/user" component={Profile} />
    </Switch>
    );
}

export default Routes;