import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import Typography from 'material-ui/Typography';

class CheckboxInput extends Component {
    render() {
        const {input, label} = this.props;
        return (
            <div style={{ display: 'inline-flex', alignItems: 'center'}}>
                <Checkbox
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                    {...input}
                />
                <Typography type="body1" component="span">{label}</Typography>
            </div>
        );
    }
}

CheckboxInput.propTypes = {};
CheckboxInput.defaultProps = {};

export default CheckboxInput;
