import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import CalendarInput from '../../../form-fields/calendar';
import {required} from '../../../../utils/validations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class InsuranceSecondStep extends Component {
    render() {
        const { previousPage, invalid, pristine, submitting, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" paragraph>
                            Quando você quer ir?
                        </Typography>
                        <Field
                            type="text"
                            component={CalendarInput}
                            name="data_ida"
                            validate={required}
                        />
                    </Grid>

                    <Grid item xs={12} style={{ marginTop: 30 }}>
                        <Typography type="title" color="inherit" paragraph>
                            Quando você quer voltar?
                        </Typography>

                        <Field
                            type="text"
                            component={CalendarInput}
                            name="data_volta"
                        />
                    </Grid>

                    <Grid gutter={0} container item xs={12} style={{ marginTop: 30}}>
                        <Grid gutter={0} container item xs={6} justify="flex-start">
                            <Button raised color="primary" type="button" onClick={previousPage}>
                                Anterior
                            </Button>
                        </Grid>
                        <Grid gutter={0} container item xs={6} justify="flex-end">
                            <Button raised color="primary" type="submit" disabled={invalid || pristine || submitting}>
                                Próximo
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

InsuranceSecondStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'insuranceForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(InsuranceSecondStep)