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
                image: 'https://i.imgur.com/2z9sWWo.png'
            },
            {
                image: 'https://i.imgur.com/2z9sWWo.png'
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
