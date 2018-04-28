import React, {Component} from 'react';
import CorporativeFeatures from './features';
import CorporativeBonus from './bonus';

class CorporativeIndex extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <CorporativeFeatures />
                <CorporativeBonus />
            </div>
        );
    }
}

export default CorporativeIndex;
