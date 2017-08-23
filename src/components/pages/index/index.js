import React, { Component } from 'react';
import {connect} from 'react-redux';
import IndexHeader from './header';
import IndexSearch from './search';
import ImageMessage from './image-message';
import Institute from './institute';
import Newsletter from '../../newsletter';
import MediaNews from './media-news';
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

        return (
            <div>
                <IndexHeader title={trans('index.header.title')}
                             text={trans('index.header.text')}
                            button={trans('index.header.button')}
                />
                <IndexSearch />
                <ImageMessage text={trans('index.imageMessage.text')} />
                <Institute text={trans('index.institute.text')} expeditions={expeditions.edicoes_futuras} />
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
