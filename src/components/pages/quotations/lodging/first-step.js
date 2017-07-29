import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../../form-fields/text';
import {required} from '../../../../utils/validations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class LodgingFirstStep extends Component {
    render() {
        const { invalid, pristine, submitting, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '60px auto 0 auto' }}>
                <Grid container gutter={16}>
                    <Typography type="title" color="inherit">
                        Para onde você quer ir?
                    </Typography>
                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="hotel_ou_regiao"
                            component={TextField}
                            label="Nome do Hotel ou Região"
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

LodgingFirstStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'lodgingForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(LodgingFirstStep)