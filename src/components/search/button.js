import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('SearchButton', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        textAlign: window.screen.width < 900 ? 'center' : 'left'
    },
    bg2: {
        backgroundColor: theme.defaultDarken.color,
        textAlign: window.screen.width < 900 ? 'center' : 'left'
    }
}));

class SearchButton extends Component {
    render() {
        const { classes, darkBg } = this.props;
        return (
            <div className={ darkBg ? classes.bg2 : classes.bg }>
                <div className="container padding">
                    <Typography type="subheading" color="inherit" paragraph className={classes.text}>
                        Ou se preferir, seja atendido de forma ágil, humanizada e gratuita
                    </Typography>
                    <Button raised color="primary">
                        <Link to="/cotacao">
                            Receba sua cotação em até 24 horas
                        </Link>
                    </Button>
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