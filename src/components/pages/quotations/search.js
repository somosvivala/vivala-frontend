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
                        <Link to="/cotacao/pacotes-completos">
                            <Button raised color="primary" className={classes.button}>
                                Pacotes Completos
                            </Button>
                        </Link>
                        <Link to="/cotacao/voos">
                            <Button raised color="primary" className={classes.button}>
                                Voos
                            </Button>
                        </Link>
                        <Link to="/cotacao/hospedagens">
                            <Button raised color="primary" className={classes.button}>
                                Hospedagens
                            </Button>
                        </Link>
                        <Link to="/cotacao/seguro">
                            <Button raised color="primary" className={classes.button}>
                                Seguro
                            </Button>
                        </Link>
                        <Link to="/cotacao/carro">
                            <Button raised color="primary" className={classes.button}>
                               Carros
                            </Button>
                        </Link>
                        <Link to="/cotacao/passeio">
                            <Button raised color="primary" className={classes.button}>
                              Passeios
                            </Button>
                        </Link>
                        <Link to="/cotacao/cruzeiro">
                            <Button raised color="primary" className={classes.button}>
                              Cruzeiros
                            </Button>
                        </Link>
                        <Link to="/cotacao/rodoviario">
                            <Button raised color="primary" className={classes.button}>
                               Onibus
                            </Button>
                        </Link>
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
