import React, { Component } from 'react';
import Routes from '../../routes';
import routesConfig from '../../routes/config';
import Menu from '../header/menu';
import Footer from '../footer';

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                {Routes(routesConfig)}
                <Footer />
            </div>
        );
    }
}
export default App;