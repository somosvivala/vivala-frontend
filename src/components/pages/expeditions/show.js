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
        const { fetching, expedition, match, error } = this.props;

        if (error) {
            return <BadRequestError />;
        }

        if (fetching) {
            return <LoadingInfinite />;
        }

        if (!expedition) {
            return null;
        }
      
        return (
            <div>
                <ExpeditionsRecord {...expedition} id={match.params.id} />

                { expedition.inscricoes_abertas &&
                    <SubscribeIndex
                      title="Quero saber mais..."
                      record={{ type: 'expedicoes', id: match.params.id, pagSeguroUrl: expedition.url_pagseguro }}
                    />
                }
            </div>
        );
    }
}

function mapsStateToProps(state) {
    return {
        expedition: state.expeditions.one,
        fetching: state.expeditions.fetching,
        error: state.expeditions.error,
    }
}

ExpeditionsShow.propTypes = {
    expedition: PropTypes.object,
    fetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

export default connect(mapsStateToProps, {requestExpedition})(ExpeditionsShow);