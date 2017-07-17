import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchCallToAction from '../../search/call-to-action';
import SearchTravel from '../../search/travel';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import trans from '../../../utils/translate';

class IndexSearch extends Component {
    state = {
        clicked: true,
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    render() {
        return (
            <ReactCSSTransitionGroup transitionName="slider" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                { !this.state.clicked ?
                    <SearchCallToAction key="search-call-to-action"
                                        click={this.handleClick}
                                        translations={trans('search.callToAction')}
                    />
                    :
                    <SearchTravel translations={trans('search.travel')} key="search-travel" click={this.handleClick} />
                }
            </ReactCSSTransitionGroup>
        );
    }
}

export default IndexSearch;