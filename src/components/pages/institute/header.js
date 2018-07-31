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
        textTransform: 'uppercase',
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        fontWeight: 700,
        marginTop: '2rem'
    }
}));

class InstituteHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Typography type="headline" color="accent" gutterBottom className={classes.title}>
                        FUNDO SOCIAL DE INVESTIMENTO
                    </Typography>
                    <Typography type="body1">
                        Se torne um associado do fundo e ajude a criar oportunidades para microempreendedores brasileiros em comunidades carentes
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
