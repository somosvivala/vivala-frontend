import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

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
        fontWeight: 'bold',
        width: window.screen.width < 900 ? '100%' : 'auto',
        marginBottom: '2rem'
    },
    title: {
        marginTop: '2rem',
        textTransform: 'uppercase',
        textAlign: window.screen.width < 900 ? 'left' : 'center'
    },
    paragrafo: {
        textAlign: window.screen.width < 900 ? 'left' : 'center',
        maxWidth: window.screen.width < 900 ? '70%' : '100%',
    }
}));

class SearchButton extends Component {
    render() {
        const { classes, darkBg } = this.props;
        return (
            <div className={ darkBg ? classes.bg2 : classes.bg }>
                <div className="container padding">
                    <Typography type="title" className={classes.title} gutterBottom>
                        Precisa de ajuda?
                    </Typography>
                    <Typography type="subheading" className={classes.paragrafo} color="inherit" paragraph>
                       Quer uma proposta para sua viagem ágil, humanizada e gratuita
                    </Typography>
                    <Link to="/cotacao">
                        <Button raised color="primary" className={classes.button}>
                            Receba sua cotação em até 24 horas
                            <FontAwesome name='long-arrow-right' style={{ fontSize: 25, paddingLeft: 20 }} />
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
