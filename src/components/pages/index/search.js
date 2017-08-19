import React, { Component } from 'react';
import SearchCallToAction from '../../search/call-to-action';
import SearchTravel from '../../search/travel';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import trans from '../../../utils/translate';

class IndexSearch extends Component {
    state = {
        clicked: false,
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    render() {
        return (
            <ReactCSSTransitionGroup transitionName="slider" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                { !this.state.clicked ?
                    <SearchCallToAction key="search-call-to-action"
                        click={this.handleClick}
                        translations={trans('search.callToAction')}
                    />
                    :
                    <SearchTravel key="search-travel"
                        click={this.handleClick}
                        translations={trans('search.travel')}
                    />
                }
            </ReactCSSTransitionGroup>
        );
    }
}

export default IndexSearch;