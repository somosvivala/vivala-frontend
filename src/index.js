import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import configureStore from './utils/config-store';
import App from './components/app';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import customMuiTheme from './assets/theme/custom';
import 'typeface-titillium-web';

ReactDOM.render(
    <Provider store={configureStore()}>
        <MuiThemeProvider theme={customMuiTheme}>
            <Router history={createBrowserHistory()}>
                <App />
            </Router>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
