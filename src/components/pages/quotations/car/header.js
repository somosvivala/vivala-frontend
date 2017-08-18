import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import CarroSvg from '../../../../assets/svg/icons/vivala/carros.svg';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('CarHeader', theme => ({
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

class CarHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.flex}>
                <img src={CarroSvg} className={classes.img} alt="Experiencia Icone" />
                <div className={classes.right}>
                    <Typography type="subheading">
                        Pedido de Cotação
                    </Typography>
                    <Typography type="title" color="inherit" className={classes.title}>
                        Carro
                    </Typography>
                </div>
            </div>
        );
    }
}

CarHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(CarHeader);