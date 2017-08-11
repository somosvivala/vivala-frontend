import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

class SubscribeButton extends Component {
    render() {
        const { click } = this.props;

        return <Button raised color="accent" onClick={click} style={{ width: '100%' }}>Inscreva-se</Button>;
    }
}

SubscribeButton.propTypes = {
    click: PropTypes.func.isRequired,
};

export default SubscribeButton;