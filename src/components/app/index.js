import React, { Component } from 'react';
import Routes from '../../routes';
import routesConfig from '../../routes/config';
import Menu from '../header/menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                {Routes(routesConfig)}
            </div>
        );
    }
}
export default App;