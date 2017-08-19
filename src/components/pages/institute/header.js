import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('InstituteHeader', theme => ({
    bg : {
        backgroundColor: theme.default.color,
        textAlign: window.screen.width < 800 ? 'center' : 'left'
    },
    title: {
        textTransform: 'uppercase'
    }
}));

class InstituteHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.bg}>
                <div className="container padding-2x">
                    <Typography type="headline" color="accent" gutterBottom className={classes.title}>
                        Instituto Sustentável
                    </Typography>
                    <Typography type="body1">
                        Através do seu apoio teremos mais força para continuar
                        e expandir nossos projetos de capacitação profissional para microempreendedores
                    </Typography>
                </div>
            </div>
        );
    }
}

InstituteHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(InstituteHeader);