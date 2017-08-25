import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestExpeditions} from '../../../actions/expeditions';
import ExpeditionsHeader from "./header";
import ExpeditionsAfter from "./after";
import ExpeditionsBefore from "./before";
import trans from '../../../utils/translate';
import BadRequestError from '../../errors/500';
import LoadingInfinite from '../../loadings/infinite';

class ExpeditionsIndex extends Component {
    componentWillMount() {
        this.props.requestExpeditions();
    }

    render() {
        const { expeditions, fetching, fetched, error } = this.props;

        if (fetching || !fetched) {
            return <LoadingInfinite />;
        }

        if (fetched && error) {
            return <BadRequestError />;
        }

        const future = expeditions.edicoes_futuras;
        const past = expeditions.edicoes_passadas;
        console.log(future);
        return (
            <div>
                <ExpeditionsHeader translations={trans('expeditions.header')}/>
                { future.length && <ExpeditionsAfter expeditions={future} translations={trans('expeditions.after')} key="expeditions-future" /> }
                { past.length && <ExpeditionsBefore expeditions={past} translations={trans('expeditions.before')} key="expeditions-past" /> }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        expeditions: state.expeditions.all,
        fetching: state.expeditions.fetching,
        fetched: state.expeditions.fetched,
        error: state.expeditions.error,
    }
}

export default connect(mapStateToProps, {requestExpeditions})(ExpeditionsIndex);
