import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../../form-fields/text';
import {required} from '../../../../utils/validations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class TripFirstStep extends Component {
    render() {
        const { invalid, pristine, submitting, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={16}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" style={{ marginBottom: 20 }}>
                            Para onde você quer ir?
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="destino"
                            component={TextField}
                            label="Destino"
                            validate={required}
                        />
                    </Grid>

                    <Grid gutter={0} container justify="flex-end" style={{ marginTop: 30 }}>
                        <Button raised color="primary" type="submit" disabled={invalid || pristine || submitting}>
                            Próximo
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

TripFirstStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'tripForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(TripFirstStep)