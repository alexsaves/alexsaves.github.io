import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import Application from './application.jsx';
import {ConnectedRouter, routerMiddleware, push} from 'react-router-redux';
import {
  LOOK
} from './actions/actions';
import reducers from './reducers';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

// The apps initial state
const initialState = {};

// Set up a history object
const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))));
// Build the middleware for intercepting and dispatching navigation actions
let unsubscribe = appStore.subscribe(() => console.log("STATE CHANGED", appStore.getState()));

// Set things up
var rootNode = document.querySelector('.app');
if (rootNode) {
  render(
    <Provider store={appStore}>
    <ConnectedRouter history={history}>
      <Application/>
    </ConnectedRouter>
  </Provider>, rootNode);
}