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

        const past = expeditions.filter(expedition => expedition.id === 1 || expedition.id === 2);
        const future = expeditions.filter(expedition => expedition.id === 3 || expedition.id === 4);

        return (
            <div>
                <ExpeditionsHeader translations={trans('expeditions.header')}/>
                <ExpeditionsAfter expeditions={past} translations={trans('expeditions.after')}/>
                <ExpeditionsBefore expeditions={future} translations={trans('expeditions.before')}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        expeditions: state.expeditions.all,
        fetching: state.expeditions.fetching,
        fetched: state.expeditions.fetched,
        error: state.expeditions.error,
    }
}

export default connect(mapStateToProps, {requestExpeditions})(ExpeditionsIndex);
