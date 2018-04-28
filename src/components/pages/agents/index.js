import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import AgentsList from './list';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import FontAwesome from 'react-fontawesome';


const styleSheet = createStyleSheet('AgentsIndex', theme => ({
    bg: {
        backgroundColor: '#ddd',
        textAlign: 'center'
    },
    button: {
        marginTop: '1rem',
        width: window.screen.width < 900 ? '100%' : '33%',
        paddingLeft: 0,
        paddingRight: 0,
        fontWeight: 'bold',
        textTransform:'none',
        fontSize: window.screen.width < 900 ? '15px' : '17px'
    }
}));

class AgentsIndex extends Component {
    render() {
        const { classes } = this.props;
        const button = 'Receba sua cotacao em 24H';
        return (
            <div>
                <Helmet>
                    <title>Seja um Agente Vivalá</title>
                    <meta name="theme-color" content="#ED6D2C" />
                    <meta name="description" content="Quer Trabalhar só com Turismo ou Fazer Renda Extra? Ganhe Até R$ 1.000,00 por Semana" />

                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:url" content={this.props.location.pathname} />
                    <meta property="og:title" content="Vivalá - Operadora de Volunturismo e Ecoturismo no Brasil e Agência Global de Viagens" />
                    <meta property="og:site_name" content="Vivalá" />
                    <meta property="og:description" content="Viaje pelo Brasil com roteiros de Turismo e Voluntariado, Experiências de Conexão com a Natureza e Lugares Incríveis para ir quando quiser." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://res.cloudinary.com/vivala/image/upload/imagem_home_1524934756">
                    <meta property="og:image:type" content="image/jpg">
                    <meta property="og:image:width" content="1200">
                    <meta property="og:image:height" content="630">
                </Helmet>

                <AgentsList />

                <div className={classes.bg}>
                    <div className="container padding-2x">
                        <Typography type="body1" paragraph>
                            Quer uma proposta para sua viagem ágil, humanizada e gratuita?
                        </Typography>
                        <Link to="/cotacao">
                            <Button raised color="primary" className={classes.button}>
                                {button}
                                <FontAwesome name='long-arrow-right' style={{ fontSize: 25, paddingLeft: 20 }} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

AgentsIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AgentsIndex);
