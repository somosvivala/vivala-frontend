import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/svg/logo_orange.svg';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import Drawer from './drawer';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Menu', theme => ({
    bg: {
        backgroundColor: '#f5f5f5',
        height: 80,
    },
    img: {
        marginTop: 15
    },
    button: {
        textAlign: 'right'
    }
}));

const container = {
    container: true,
    gutter: 0,
    align: "center",
    direction: "row",
    justify: "center",
};

class Menu extends Component {
    state = {
        open: false,
    }

    toggleOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }


    render() {
        const {classes} = this.props;

        return (
            <div className={ classes.bg }>
                <Grid {...container} className="container">
                    <Grid item xs={6} className={classes.img}>
                        <img src={Logo} alt="Logo" width="150" height="60"/>
                    </Grid>

                    <Grid item xs={6} className={classes.button}>
                        <IconButton color="contrast" aria-label="Menu" onClick={this.toggleOpen}>
                            <Icon color="primary">menu</Icon>
                        </IconButton>
                    </Grid>
                </Grid>
                <Drawer open={this.state.open} close={this.toggleOpen}/>
            </div>
        );
    }
}

Menu.PropTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(Menu);