import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../../form-fields/text';
import CalendarInput from '../../../form-fields/calendar';
import {required, time} from '../../../../utils/validations';
import {maskTime} from '../../../../utils/normalizations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class CarFirstStep extends Component {
    render() {
        const { invalid, pristine, submitting, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" paragraph>
                            Retirada
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="cidade_retirada"
                            component={TextField}
                            label="Cidade"
                            validate={required}
                            style={{ marginBottom: 30 }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit" gutterBottom>Quando?</Typography>
                        <Field
                            type="text"
                            component={CalendarInput}
                            name="data_retirada"
                            validate={required}
                        />
                    </Grid>


                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="hora_retirada"
                            component={TextField}
                            placeholder="HH:MM"
                            label="Horário"
                            validate={[ required, time ]}
                            normalize={maskTime}
                        />
                    </Grid>


                    <Grid gutter={0} container item xs={12} justify="flex-end" style={{ marginTop: 20 }}>
                        <Button raised color="primary" type="submit" disabled={invalid || pristine || submitting}>
                            Próximo
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

CarFirstStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'carForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(CarFirstStep)