import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import Application from './application.jsx';
import {ConnectedRouter, routerMiddleware, push} from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import createHistory from 'history/createBrowserHistory';

// Set up a history object
const history = createHistory();

let startupState = {};

// Support the dev tools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Set up an app store
const appStore = createStore(reducers, startupState, composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))));

// Build the middleware for intercepting and dispatching navigation actions
let unsubscribe = appStore.subscribe(() => console.log("STATE CHANGED", appStore.getState()));

// Set things up
var rootNode = document.querySelector('.app');
if (rootNode) {
  render(<Provider store={appStore}><ConnectedRouter history={history}><Application/></ConnectedRouter></Provider>, rootNode);
} else {
  throw new Error("No root node found!");
}