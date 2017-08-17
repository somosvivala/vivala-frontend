import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import HospedagensSvg from '../../../../assets/svg/icons/vivala/hoteis.svg';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('CompletePackagesHeader', theme => ({
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
        marginBottom: 20
    }
}));

class CompletePackagesHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.flex}>
                <img src={HospedagensSvg} className={classes.img} alt="Hospedagens Icone" />
                <div className={classes.right}>
                    <Typography type="subheading">
                        Pedido de Cotação
                    </Typography>
                    <Typography type="title" color="inherit" className={classes.title}>
                        Hospedagem
                    </Typography>
                </div>
            </div>
        );
    }
}

CompletePackagesHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(CompletePackagesHeader);