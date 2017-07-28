import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('QuotationsSearch', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        textAlign: window.screen.width < 800 ? 'center' : 'left'
    },
    bg2: {
        backgroundColor: theme.defaultDarken.color,
        textAlign: 'center'
    },
    text: {
        textTransform: 'uppercase'
    },
    button: {
        width: '100%',
        color: 'white !important',
        marginTop: 30,
    }
}));

class QuotationsSearch extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="headline" paragraph className={classes.text}>
                            Seja atendido por agentes apaixonados por viagens
                        </Typography>
                        <Typography type="title" color="inherit" paragraph className={classes.text}>
                            O que você está procurando?
                        </Typography>
                        <Button raised color="primary" className={classes.button}>
                            <Link to="/cotacao/pacotes-completos">
                                Pacotes Completos
                            </Link>
                        </Button>
                        <Button raised color="primary" className={classes.button}>
                            <Link to="/cotacao/hospedagens">
                                Hospedagens
                            </Link>
                        </Button>
                        <Button raised color="primary" className={classes.button}>
                            <Link to="/cotacao/voos">
                                Voos
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

QuotationsSearch.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(QuotationsSearch);