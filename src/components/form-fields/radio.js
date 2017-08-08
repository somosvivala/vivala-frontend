import React, {Component} from 'react';
import Radio  from 'material-ui/Radio';
import Typography from 'material-ui/Typography';

class RadioInput extends Component {
    render() {
        const { input, radios } = this.props;

        return (
            <div>
                {
                    radios.map(radio => {
                        return (
                            <div style={{ display: 'inline-flex', alignItems: 'center'}} key={radio.value}>
                                <Radio
                                    checked={input.value === radio.value}
                                    onChange={input.onChange}
                                    value={radio.value}
                                    name={input.name}
                                />
                                <Typography type="body1" component="span">{radio.label}</Typography>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default RadioInput;
