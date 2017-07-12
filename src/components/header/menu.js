import React, { Component } from 'react';
import Logo from '../../assets/svg/logo_orange.svg';
import AppBar from 'material-ui/AppBar';
import trans from '../../utils/translate';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

class Menu extends Component {
    render() {
        return (
            <AppBar color="default" position="fixed">
                <Toolbar>
                    <img src={Logo} width="120" height="50" alt="Logo" style={{ marginTop: 5 }} />

                    <Typography type="subheading" color="inherit" style={{ textTransform: 'uppercase', flex: 1, textAlign: 'right', marginRight: 30 }}>
                        { trans('index.first.title') }
                    </Typography>

                    <IconButton color="contrast" aria-label="Menu">
                        <Icon color="primary">menu</Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }

}

export default Menu;