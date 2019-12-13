import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import CorporativoHeader from './header';
import CorporativeFeatures from './features';
import CorporativeBonus from './bonus';
import CorporativeClients from './clients';

class CorporativeIndex extends Component {
    render() {
        return (
            <div className="content-wrapper corporativo">
                <Helmet>
                    <title>Corporativo</title>
                    <meta name="theme-color" content="#ED6D2C" />
                    <meta name="description" content="Vivências de turismo de base comunitária e voluntariado no Brasil
" />

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

                <CorporativoHeader />
                <CorporativeFeatures />
                <CorporativeBonus />
                <CorporativeClients />
            </div>
        );
    }
}

export default CorporativeIndex;
