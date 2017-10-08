import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import ExperienciaSvg from '../../../../assets/svg/icons/vivala/experiencia.svg';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('TripHeader', theme => ({
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

class TripHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.flex}>
                <img src={ExperienciaSvg} className={classes.img} alt="Experiencia Icone" />
                <div className={classes.right}>
                    <Typography type="subheading">
                        Pedido de Cotação
                    </Typography>
                    <Typography type="title" color="inherit" className={classes.title}>
                        Passeio
                    </Typography>
                </div>
            </div>
        );
    }
}

TripHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(TripHeader);