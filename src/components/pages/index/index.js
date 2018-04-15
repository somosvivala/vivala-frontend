import React, { Component } from 'react';
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
                image: 'https://i.imgur.com/iK34j42.png'
            },
            {
                image: 'https://i.imgur.com/HZCmy5j.jpg'
            },
            {
                image: 'https://i.imgur.com/SCfosvN.png'
            },
            {
                image: 'https://i.imgur.com/pkaSVNA.jpg'
            },
            {
                image: 'https://i.imgur.com/eoC6rVA.jpg'
            },
            {
                image: 'https://i.imgur.com/PlCbwAs.jpg'
            },
            {
                image: 'https://img00.deviantart.net/2602/i/2016/184/a/b/minimalist_wallpaper___yukihira_souma_by_agenfneptunus-da8l3ya.png'
            }
        ];

        return (
            <div className="content-wrapper">
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
