import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExperiencesRecord from './record';
import SubscribeIndex from '../../subscribe';
import BadRequestError from '../../errors/404';
import LoadingInfinite from '../../loadings/infinite';
import { requestExperience } from '../../../actions/experiences';

class ExperiencesShow extends Component {
    componentWillMount() {
        this.props.requestExperience(this.props.match.params.id);
    }
    render() {
        const { fetching, experience, match, error } = this.props;

        if (error) {
            return <BadRequestError />;
        }

        if (fetching) {
            return <LoadingInfinite />;
        }

        if (!experience) {
            return null;
        }

        return (
            <div>
                <ExperiencesRecord {...experience} id={match.params.id} />
                { experience.inscricoes_abertas && <SubscribeIndex record={{ type: 'experiencias', id: match.params.id}} /> }
            </div>
        );
    }
}

function mapsStateToProps(state) {
    return {
        experience: state.experiences.one,
        fetching: state.experiences.fetching,
        error: state.experiences.error,
    }
}

ExperiencesShow.propTypes = {
    experience: PropTypes.object,
    fetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

export default connect(mapsStateToProps, {requestExperience})(ExperiencesShow);