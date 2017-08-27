import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestExperiences} from '../../../actions/experiences';
import ExperiencesHeader from "./header";
import ExperiencesAfter from "./after";
import ExperiencesBefore from "./before";
import BadRequestError from '../../errors/404';
import LoadingInfinite from '../../loadings/infinite';

class ExperiencesIndex extends Component {
    componentWillMount() {
        this.props.requestExperiences();
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
                <ExperiencesHeader />
                { future.length > 0 && <ExperiencesAfter experiences={future} key="experiences-future" /> }
                { past.length > 0 && <ExperiencesBefore experiences={past} key="experiences-past" /> }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        future: state.expeditions.edicoes_futuras,
        past: state.expeditions.edicoes_passadas,
        fetching: state.experiences.fetching,
        error: state.experiences.error,
    }
}

export default connect(mapStateToProps, {requestExperiences})(ExperiencesIndex);
