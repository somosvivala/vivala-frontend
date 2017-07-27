import React, {Component} from 'react';
import Button from 'material-ui/Button';

class ButtonBoolean extends Component {
    render() {
        const {input} = this.props;
        return (
            <div>
                <Button raised
                        color={input.value === true ? 'primary' : 'default'}
                        style={{ marginRight: 10 }}
                        onClick={(event, index, value) => input.onChange(true)}
                >
                    SIM
                </Button>
                <Button raised
                        color={input.value === false ? 'primary' : 'default'}
                        style={{ marginRight: 10 }}
                        onClick={(event, index, value) => input.onChange(false)}
                >
                    NÃO
                </Button>
            </div>
        );
    }
}

export default ButtonBoolean;
