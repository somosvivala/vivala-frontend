import React, {Component} from 'react';
import Button from 'material-ui/Button';
import { Field } from 'redux-form';
import Typography from 'material-ui/Typography';

class Increment extends Component {
    render() {
        const { title, helper, input, meta: { touched, error }} = this.props;
        return (
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <Field type="hidden" component="input" {...input}/>
                <div>
                    <Typography type="subheading" color="inherit" style={{ textTransform: 'uppercase' }}>{title}</Typography>
                    <Typography type="body1">{helper}</Typography>
                </div>
                <div style={{ display: 'flex' }}>
                    <Button raised
                            dense
                            onClick={(event, index, value) => input.onChange(parseInt(input.value, 10)-1)}
                            stlye={{ width: 11, minWidth: '10px !important'}}
                    >
                        -
                    </Button>
                    <div style={{ backgroundColor: 'white', width: 25, height: 25, lineHeight: '25px', textAlign: 'center' }}>{input.value}</div>
                    <Button raised
                            dense
                            stlye={{ width: 11, minWidth: '10px !important'}}
                            onClick={(event, index, value) => input.onChange(parseInt(input.value, 10)+1)}
                    >
                        +
                    </Button>
                </div>
            </div>
        );
    }
}

export default Increment;
