import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class Increment extends Component {
    render() {
        const { title, helper, input, meta: {error} } = this.props;
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <div>
                        <Typography type="subheading" color="inherit" style={{ textTransform: 'uppercase' }}>{title}</Typography>
                        <Typography type="body1">{helper}</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button raised
                                dense
                                onClick={(event, index, value) => input.onChange(parseInt(input.value, 10)-1)}
                        >
                            -
                        </Button>
                        <div style={{ backgroundColor: 'white', width: 25, height: 25, lineHeight: '25px', textAlign: 'center' }}>{input.value}</div>
                        <Button raised
                                dense
                                onClick={(event, index, value) => input.onChange(parseInt(input.value, 10)+1)}
                        >
                            +
                        </Button>
                    </div>
                </div>
                { !!error && <Typography type="caption" style={{ color: 'red', marginTop: 10 }}>{error}</Typography> }
            </div>
        );
    }
}

export default Increment;
