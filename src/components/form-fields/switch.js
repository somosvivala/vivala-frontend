import React, {Component} from 'react';
import Switch from 'material-ui/Switch';
import Typography from 'material-ui/Typography';

class SwitchInput extends Component {
    render() {
        const {input, label } = this.props;
        return (
            <div style={{ display: 'inline-flex', alignItems: 'center'}}>
                <Switch
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                    {...input}
                />
                <Typography type="body1" component="span">{label}</Typography>
            </div>
        );
    }
}

SwitchInput.propTypes = {};
SwitchInput.defaultProps = {};

export default SwitchInput;
