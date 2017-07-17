import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MaterialDrawer from 'material-ui/Drawer';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Logo from '../../assets/svg/logo_orange.svg';
import MenuItems from "./menu-items";

const styleSheet = createStyleSheet('Drawer', {
    list: {
        width: 250,
        flex: 'initial',
    },
    img: {
        marginTop: 10
    },
    menuItems: {
        padding: 20
    }
});

class Drawer extends Component {
    render() {
        const {classes,open,close} = this.props;
        return (
            <MaterialDrawer
                open={open}
                onRequestClose={close}
                onClick={close}
            >
                <Grid gutter={0} justify="space-between" container className={classes.list}>
                    <Grid item className={classes.img}>
                        <img src={Logo} alt="Logo" width="150" height="60"/>
                    </Grid>
                    <Grid item>
                        <IconButton color="contrast" aria-label="Menu" onClick={this.toggleOpen}>
                            <Icon color="primary">close</Icon>
                        </IconButton>
                    </Grid>
                    <Grid container item gutter={0} className={classes.menuItems}>
                        <MenuItems direction="column" showContact={false} />
                    </Grid>
                </Grid>
            </MaterialDrawer>
        );
    }
}

Drawer.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(Drawer);
