import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import CruizeSvg from '../../../../assets/svg/icons/vivala/cruzeiro.svg';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('CruiseHeader', theme => ({
    right: {
        marginLeft: 20,
    },
    img: {
        width: 70,
        height: 50,
    },
    title: {
        textTransform: 'uppercase',
        color: theme.vivala.color
    },
    flex: {
        display: 'flex',
    }
}));

class CruiseHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.flex}>
                <img src={CruizeSvg} className={classes.img} alt="Cruzeiro Icone" />
                <div className={classes.right}>
                    <Typography type="subheading">
                        Pedido de Cotação
                    </Typography>
                    <Typography type="title" color="inherit" className={classes.title}>
                        Cruzeiro
                    </Typography>
                </div>
            </div>
        );
    }
}

CruiseHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(CruiseHeader);