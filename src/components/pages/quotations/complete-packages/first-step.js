import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../../form-fields/text';
import {required} from '../../../../utils/validations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class CompletePackagesFirstStep extends Component {
    render() {
        const { invalid, pristine, submitting, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '60px auto 0 auto' }}>
                <Grid container gutter={16}>
                    <Typography type="title" color="inherit">
                        Para onde você quer viajar?
                    </Typography>
                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="origem"
                            component={TextField}
                            label="Origem"
                            validate={required}
                        />
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

CompletePackagesFirstStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'completePackagesForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(CompletePackagesFirstStep)