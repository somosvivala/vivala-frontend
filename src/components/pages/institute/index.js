import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import InstituteHeader from './header';
import InstituteSupport from './support';

class InstituteIndex extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Instituto Vivalá</title>
                    <meta name="theme-color" content="#09A2A1" />
                    <meta name="description" content="Projetos de Capacitação Profissional e Investimentos para Microempreendedores Mentorados." />

                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:url" content={this.props.location.pathname} />
                    <meta property="og:title" content="Vivalá - Operadora de Volunturismo e Ecoturismo no Brasil e Agência Global de Viagens" />
                    <meta property="og:site_name" content="Vivalá" />
                    <meta property="og:description" content="Viaje pelo Brasil com roteiros de Turismo e Voluntariado, Experiências de Conexão com a Natureza e Lugares Incríveis para ir quando quiser." />
                    <meta property="og:type" content="website" />
                </Helmet>
                <InstituteHeader />
                <InstituteSupport />
            </div>
        );
    }
}

InstituteIndex.propTypes = {};
InstituteIndex.defaultProps = {};

export default InstituteIndex;
