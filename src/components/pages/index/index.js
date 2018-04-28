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
import {requestIndex} from '../../../actions/index';
import LoadingInfinite from '../../loadings/infinite';

class IndexPage extends Component {

    componentWillMount() {
        this.props.requestIndex();
    }

    render() {
        const { fetching, expeditions } = this.props;

        if (fetching || !expeditions) {
            return <LoadingInfinite />;
        }

        const photos = [
            {
                image: 'https://i.imgur.com/q2H12iW.png'
            },
            {
                image: 'https://i.imgur.com/q2H12iW.png'
            }
        ];

        return (
            <div className="content-wrapper">
                <Helmet>
                    <title>Vivalá</title>
                    <meta name="theme-color" content="#ED6D2C" />
                    <meta name="description" content="Operadora de Volunturismo e Ecoturismo no Brasil e Agência Global de Viagens" />

                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:url" content={this.props.location.pathname} />
                    <meta property="og:title" content="Vivalá - Operadora de Volunturismo e Ecoturismo no Brasil e Agência Global de Viagens" />
                    <meta property="og:site_name" content="Vivalá" />
                    <meta property="og:description" content="Viaje pelo Brasil com roteiros de Turismo e Voluntariado, Experiências de Conexão com a Natureza e Lugares Incríveis para ir quando quiser." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://res.cloudinary.com/vivala/image/upload/imagem_home_1524934756" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                </Helmet>
                <Servicos />
                <Social color="#aaa"
                        facebook="https://www.facebook.com/SomosVivala/"
                        linkedin="https://pt.linkedin.com/company/vivalá"
                        instagram="https://www.instagram.com/somosvivala/"
                        youtube="https://www.youtube.com/channel/UCT8bbWeVmbaDDMxvWlI8bBA"
                />
                <CotacaoSection />
                {/*<Institute text={trans('index.institute.text')} expeditions={expeditions.edicoes_passadas} />*/}
                <InstitutoSlider expeditions={photos} />
                <HighlightSection />
                <AssociadoSection />
                <Newsletter text={trans('newsletter.text')}
                            placeholderName={trans('newsletter.placeholderName')}
                />
                <MediaNews text={trans('index.mediaNews.text')} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        expeditions: state.index.content,
        fetching: state.index.fetching,
    }
}

export default connect(mapStateToProps, {requestIndex})(IndexPage);
