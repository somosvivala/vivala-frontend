import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import configureStore from './utils/config-store';
import App from './components/app';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import customMuiTheme from './assets/theme/custom';
import 'typeface-titillium-web';

ReactDOM.render(
    <MuiThemeProvider store={configureStore()} theme={customMuiTheme}>
        <Router history={createBrowserHistory()}>
            <App />
        </Router>
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
