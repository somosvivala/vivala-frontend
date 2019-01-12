import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import AgentsHeader from './header';
import AgentsList from './list';
import { withStyles, createStyleSheet } from 'material-ui/styles';


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
        return (
            <div className="agentes-page content-wrapper">
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
                    <meta property="og:image" content="https://res.cloudinary.com/vivala/image/upload/v1528403873/home_volunturismo_1527197447_vasb9e.jpg" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="1621" />
                    <meta property="og:image:height" content="788" />
                </Helmet>

                <AgentsHeader />

                <AgentsList />
            </div>
        );
    }
}

AgentsIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AgentsIndex);
