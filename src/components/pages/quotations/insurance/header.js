import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import VoosSvg from '../../../../assets/svg/icons/vivala/voos.svg';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('InsuranceHeader', theme => ({
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

class InsuranceHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.flex}>
                <img src={VoosSvg} className={classes.img} alt="Voos Icone" />
                <div className={classes.right}>
                    <Typography type="subheading">
                        Pedido de Cotação
                    </Typography>
                    <Typography type="title" color="inherit" className={classes.title}>
                        Seguro
                    </Typography>
                </div>
            </div>
        );
    }
}

InsuranceHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(InsuranceHeader);