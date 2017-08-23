import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpeditionsRecord from './record';
import SubscribeIndex from '../../subscribe';
import BadRequestError from '../../errors/404';
import LoadingInfinite from '../../loadings/infinite';
import { requestExpedition } from '../../../actions/expeditions';

class ExpeditionsShow extends Component {
    componentWillMount() {
        this.props.requestExpedition(this.props.match.params.id);
    }
    render() {
        const { fetching, expedition, match } = this.props;

        if (fetching) {
            return <LoadingInfinite />;
        }

        if (!expedition) {
            return <BadRequestError />;
        }

        return (
            <div>
                <ExpeditionsRecord {...expedition} id={match.params.id} />
                <SubscribeIndex record={{ type: 'expedicoes', id: match.params.id}} />
            </div>
        );
    }
}

function mapsStateToProps(state) {
    return {
        expedition: state.expeditions.one,
        fetching: state.expeditions.fetching,
    }
}

ExpeditionsShow.propTypes = {
    expedition: PropTypes.object,
    fetching: PropTypes.bool.isRequired,
};

export default connect(mapsStateToProps, {requestExpedition})(ExpeditionsShow);