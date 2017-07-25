import React, { Component } from 'react';
import AgentsFeatures from './features';
import AgentsBonus from './bonus';

class AgentsSubscribe extends Component {
    render() {
        return (
            <div>
                <AgentsFeatures />
                <AgentsBonus />
            </div>
        );
    }
}

export default AgentsSubscribe;