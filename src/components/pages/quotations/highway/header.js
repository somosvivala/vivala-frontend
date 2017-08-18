import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import RodoviarioSvg from '../../../../assets/svg/icons/vivala/onibus.svg';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('HighwayHeader', theme => ({
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

class HighwayHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.flex}>
                <img src={RodoviarioSvg} className={classes.img} alt="Rodoviário Icone" />
                <div className={classes.right}>
                    <Typography type="subheading">
                        Pedido de Cotação
                    </Typography>
                    <Typography type="title" color="inherit" className={classes.title}>
                        Rodoviário
                    </Typography>
                </div>
            </div>
        );
    }
}

HighwayHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(HighwayHeader);