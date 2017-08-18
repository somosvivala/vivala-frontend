import React, { Component } from 'react';
import IndexHeader from './header';
import IndexSearch from './search';
import ImageMessage from './image-message';
import Institute from './institute';
import Newsletter from '../../newsletter';
import MediaNews from './media-news';
import trans from '../../../utils/translate';

class IndexPage extends Component {
    render() {
        return (
            <div>
                <IndexHeader title={trans('index.header.title')}
                             text={trans('index.header.text')}
                            button={trans('index.header.button')}
                />
                <IndexSearch />
                <ImageMessage text={trans('index.imageMessage.text')} />
                <Institute text={trans('index.institute.text')} />
                <Newsletter text={trans('newsletter.text')}
                            placeholderName={trans('newsletter.placeholderName')}
                />
                <MediaNews text={trans('index.mediaNews.text')} />
            </div>
        );
    }
}

export default IndexPage;