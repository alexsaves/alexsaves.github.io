import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import HomeComponent from './routes/home.jsx';

const RoutesComponent = () => {
    return (
        <Switch>
            <Route path="/" component={HomeComponent}/>       
        </Switch>
    );
};

// Expose the connected version
export default RoutesComponent;