import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './utils/config-store';
import App from './components/app';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router history={createBrowserHistory()}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
