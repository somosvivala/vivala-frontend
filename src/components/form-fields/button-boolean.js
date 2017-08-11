import React, {Component} from 'react';
import Button from 'material-ui/Button';

class ButtonBoolean extends Component {
    render() {
        const {input} = this.props;
        return (
            <div>
                <Button raised
                        color={input.value === 1 ? 'primary' : 'default'}
                        style={{ marginRight: 10 }}
                        onClick={value => input.onChange(1)}
                >
                    SIM
                </Button>
                <Button raised
                        color={input.value === 0 ? 'primary' : 'default'}
                        style={{ marginRight: 10 }}
                        onClick={value => input.onChange(0)}
                >
                    NÃO
                </Button>
            </div>
        );
    }
}

export default ButtonBoolean;
