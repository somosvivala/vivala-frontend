import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import {connect} from 'react-redux';
import Servicos from './servicos';
import Social from '../../social/index';
import CotacaoSection from './cotacao-section';
import Newsletter from '../../newsletter';
import MediaNews from './media-news';
import HighlightSection from './highlight';
import AssociadoSection from './associado';
import InstitutoSlider from './instituto-slider';
import trans from '../../../utils/translate';
import {requestHome} from '../../../actions/home';
import LoadingInfinite from '../../loadings/infinite';

class IndexPage extends Component {

    componentWillMount() {
        this.props.requestHome();
    }

    render() {
        const { fetching, fotoVolunturismo, fotoEcoturismo, fotoImersoes, fotoInstituto } = this.props;

        if (fetching || !fotoVolunturismo || !fotoEcoturismo || !fotoImersoes || !fotoInstituto) {
            return <LoadingInfinite />;
        }

        const photos = [
            {
                image: fotoInstituto
            }
        ];

        return (
            <div className="content-wrapper">
                <Helmet>
                    <title>Vivalá - Volunturismo e Ecoturismo no Brasil</title>
                    <meta name="theme-color" content="#ED6D2C" />
                    <meta name="description" content="Acreditamos que viagens melhoram pessoas e pessoas melhoram o mundo. Conheça nossos roteiros!" />

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
                <Servicos fotoVolunturismo={fotoVolunturismo} fotoEcoturismo={fotoEcoturismo} fotoImersoes={fotoImersoes} />
                <Social color="#aaa"
                        facebook="https://www.facebook.com/SomosVivala/"
                        linkedin="https://pt.linkedin.com/company/vivalá"
                        instagram="https://www.instagram.com/somosvivala/"
                        youtube="https://www.youtube.com/channel/UCT8bbWeVmbaDDMxvWlI8bBA"
                />
                <CotacaoSection />
                <InstitutoSlider expeditions={photos} />
                <HighlightSection />
                <AssociadoSection />
                <Newsletter text={trans('newsletter.text')}
                            placeholderName={trans('newsletter.placeholderName')}
                />
                <MediaNews />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fotoVolunturismo: state.home.fotoVolunturismo,
        fotoEcoturismo: state.home.fotoEcoturismo,
        fotoImersoes: state.home.fotoImersoes,
        fotoInstituto: state.home.fotoInstituto,
        fetching: state.home.fetching,
    }
}

export default connect(mapStateToProps, {requestHome})(IndexPage);
