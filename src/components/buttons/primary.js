import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

class PrimaryButton extends Component {
    render() {
        return (
            <Button raised color="primary">
                <span style={{ color: 'white' }}>{this.props.text}</span>
            </Button>
        );
    }
}

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired
}

export default PrimaryButton;