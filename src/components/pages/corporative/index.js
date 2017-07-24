import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoadingInfinite from '../../loadings/infinite';
import CorporativeFeatures from './features';
import CorporativeBonus from './bonus';

class CorporativeIndex extends Component {
    componentWillMount() {
        // this.props.requestExpeditions();
    }

    render() {
        return (
            <div>
                <CorporativeFeatures />
                <CorporativeBonus />

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, {})(CorporativeIndex);
