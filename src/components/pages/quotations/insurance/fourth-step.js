import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../../form-fields/text';
import {number} from '../../../../utils/validations';
import ButtonBoolean from '../../../form-fields/button-boolean';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class InsuranceFourthStep extends Component {
    render() {
        const { previousPage, invalid, pristine, submitting, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Typography type="title" color="inherit" style={{ marginBottom: 30 }}>
                        Opções Avançadas
                    </Typography>

                    <Grid item xs={12}>
                        <div style={{ marginBottom: 20 }}>
                            <Typography type="subheading" color="inherit" gutterBottom>
                                Irá realizar esportes radicais?
                            </Typography>
                        </div>

                        <div style={{ margin: '0 auto'}}>
                            <Field
                                type="text"
                                component={ButtonBoolean}
                                name="esportes_radicais"
                                validate={number}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="area"
                            name="solicitacoes"
                            component={TextField}
                            label="Solicitações Especiais"
                        />
                    </Grid>

                    <Grid gutter={0} container style={{ marginTop: 30}}>
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

InsuranceFourthStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'insuranceForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    initialValues: {
        "esportes_radicais": ''
    },
    keepDirtyOnReinitialize: true,
})(InsuranceFourthStep)