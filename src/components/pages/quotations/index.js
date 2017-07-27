import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet('QuotationsIndex', theme => ({
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

class QuotationsIndex extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="headline" paragraph className={classes.text}>
                            Monte sua viagem sozinho
                        </Typography>
                        <Button raised color="primary" href="/cotacao/pacotes-completos" className={classes.button}>
                            <Typography className={classes.text} color="inherit">
                                Pacotes Completos
                            </Typography>
                        </Button>
                        <Button raised color="primary" href="/cotacao/hospedagens" className={classes.button}>
                            <Typography className={classes.text} color="inherit">
                                Hospedagens
                            </Typography>
                        </Button>
                        <Button raised color="primary" href="/cotacao/voos" className={classes.button}>
                            <Typography className={classes.text} color="inherit">
                                Voos
                            </Typography>
                        </Button>
                        <Button raised color="primary" href="/cotacao/onibus" className={classes.button}>
                            <Typography className={classes.text} color="inherit">
                                Onibus
                            </Typography>
                        </Button>
                        <Button raised color="primary" href="/cotacao/experiencias" className={classes.button}>
                            <Typography className={classes.text} color="inherit">
                                Experiências
                            </Typography>
                        </Button>
                    </div>
                </div>
                <div className={classes.bg2}>
                    <div className="container padding">
                        <Typography type="subheading" color="inherit" paragraph className={classes.text}>
                            Ou se preferir, seja atendido de forma ágil, humanizada e gratuita
                        </Typography>
                        <Button raised color="primary" href="#">
                            Receba sua cotação em até 24 horas
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

QuotationsIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(QuotationsIndex);