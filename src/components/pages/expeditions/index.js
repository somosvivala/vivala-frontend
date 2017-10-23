import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestExpeditions} from '../../../actions/expeditions';
import ExpeditionsHeader from "./header";
import ExpeditionsAfter from "./after";
import ExpeditionsBefore from "./before";
import BadRequestError from '../../errors/404';
import LoadingInfinite from '../../loadings/infinite';

class ExpeditionsIndex extends Component {
    componentWillMount() {
        this.props.requestExpeditions();
    }

    render() {
        const { future, past, fetching, error } = this.props;

        if (error) {
            return <BadRequestError />;
        }

        if (fetching) {
            return <LoadingInfinite />;
        }

        return (
            <div>
                <ExpeditionsHeader />
                { future.length > 0 && <ExpeditionsAfter expeditions={future} key="expeditions-future" /> }
                { past.length > 0 && <ExpeditionsBefore expeditions={past} key="expeditions-past" /> }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        future: state.expeditions.edicoes_futuras,
        past: state.expeditions.edicoes_passadas,
        fetching: state.expeditions.fetching,
        error: state.expeditions.error,
    }
}

export default connect(mapStateToProps, {requestExpeditions})(ExpeditionsIndex);
