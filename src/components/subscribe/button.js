import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

class SubscribeButton extends Component {
    render() {
        const { click, title, style, btnColor } = this.props;

        return <Button raised color={ btnColor ? btnColor : "accent" } onClick={click} style={{ textAlign: 'center', width: '100%', ...style }}>{ title || "Inscreva-se"}</Button>;
    }
}

SubscribeButton.propTypes = {
    click: PropTypes.func.isRequired,
    btnColor: PropTypes.string,
};

export default SubscribeButton;