import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import SearchButton from '../../search/button';

const styleSheet = createStyleSheet('QuotationsIndex', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        textAlign: window.screen.width < 900 ? 'center' : 'left'
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
            <div className="content-wrapper">
                <Helmet>
                    <title>Receba sua Cotação em até 24H</title>
                    <meta name="theme-color" content="#ED6D2C" />
                    <meta name="description" content="Seja Atendido por Apaixonados por Viagens de Forma Ágil, Humanizada e Gratuita. " />

                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:url" content={this.props.location.pathname} />
                    <meta property="og:title" content="Vivalá - Operadora de Volunturismo e Ecoturismo no Brasil e Agência Global de Viagens" />
                    <meta property="og:site_name" content="Vivalá" />
                    <meta property="og:description" content="Viaje pelo Brasil com roteiros de Turismo e Voluntariado, Experiências de Conexão com a Natureza e Lugares Incríveis para ir quando quiser." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://res.cloudinary.com/vivala/image/upload/v1528403873/home_volunturismo_1527197447_vasb9e.jpg" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="1621" />
                    <meta property="og:image:height" content="788" />
                </Helmet>
                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="headline" paragraph className={classes.text}>
                            Monte sua viagem sozinho
                        </Typography>
                        <Button raised color="primary" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/packages" className={classes.button}>
                            <Typography className={classes.text} color="inherit">
                                Pacotes Completos
                            </Typography>
                        </Button>
                        <Button raised color="primary" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/hotels" className={classes.button}>
                            <Typography className={classes.text} color="inherit">
                                Hospedagens
                            </Typography>
                        </Button>
                        <Button raised color="primary" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/flights" className={classes.button}>
                            <Typography className={classes.text} color="inherit">
                                Voos
                            </Typography>
                        </Button>
                    </div>
                </div>

                <SearchButton darkBg />
            </div>
        );
    }
}

QuotationsIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(QuotationsIndex);
