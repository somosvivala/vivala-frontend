import React, {Component} from 'react';
import { Field } from 'redux-form';
import textField from './text';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

class ArrayInput extends Component {
    render() {
        const { fields, name, type, label } = this.props;

        if (fields.length < 1) {
            return (
                <Grid gutter={0} container style={{ marginBottom: 25 }}>
                    <Grid item xs={7} key={'passageiro-1'}>
                        <Field
                            name={name}
                            type={type}
                            date={type === 'date'}
                            component={textField}
                            label={`${label} 1`}
                        />
                    </Grid>
                    <Grid container gutter={0} item xs={3} align="flex-end">
                        <Button fab aria-label="add" onClick={() => { fields.push(); fields.push(); } } style={{ marginLeft: 15, minWidth: 10, height: 35, width: 35 }}>
                            +
                        </Button>
                    </Grid>
                </Grid>
            )
        }

        return (
            <div>
                {
                    fields.map((name, key) =>
                        <Grid container gutter={0} item xs={12} key={'passageiro-' + (key+1)} style={{marginBottom: 25 }}>
                            <Grid item xs={7}>
                                <Field
                                    name={name}
                                    type={type}
                                    date={type === 'date'}
                                    component={textField}
                                    label={`${label} ${key+1}`}
                                />
                            </Grid>
                            <Grid container gutter={0} item xs={3} align="flex-end">
                                <Button fab aria-label="add" onClick={() => fields.push()} style={{ marginLeft: 15, minWidth: 10, height: 35, width: 35 }}>
                                    +
                                </Button>
                            </Grid>
                            { key !== 0 &&
                                <Grid container gutter={0} item xs={2} align="flex-end">
                                    <Button fab aria-label="remove" onClick={() => fields.remove(key)}
                                            style={{minWidth: 10, height: 35, width: 35}}>
                                        -
                                    </Button>
                                </Grid>
                            }
                        </Grid>
                    )
                }
            </div>
        );
    }
}

export default ArrayInput;
