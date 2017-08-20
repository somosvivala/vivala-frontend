import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('SearchButton', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        textAlign: 'center',
    },
    bg2: {
        backgroundColor: theme.defaultDarken.color,
        textAlign: 'center',
    },
    button: {
        width: window.screen.width < 900 ? '100%' : 'auto'
    },
    title: {
        textTransform: 'uppercase'
    }
}));

class SearchButton extends Component {
    render() {
        const { classes, darkBg } = this.props;
        return (
            <div className={ darkBg ? classes.bg2 : classes.bg }>
                <div className="container padding-2x">
                    <Typography type="title" className={classes.title} gutterBottom>
                        Precisa de ajuda?
                    </Typography>
                    <Typography type="subheading" color="inherit" paragraph>
                        Ou se preferir, seja atendido de forma ágil, humanizada e gratuita
                    </Typography>
                    <Link to="/cotacao">
                        <Button raised color="primary"  className={classes.button}>
                                Receba sua cotação em até 24 horas
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

SearchButton.propTypes = {
    classes: PropTypes.object.isRequired,
    darkBg: PropTypes.bool
};

export default withStyles(styleSheet)(SearchButton);