import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Increment from '../../../form-fields/increment';
import {min0} from '../../../../utils/validations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class CompletePackagesThirdStep extends Component {
    render() {
        const { previousPage, invalid, submitting, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" style={{ marginBottom: 30 }}>
                            Com quem você quer ir?
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            component={Increment}
                            name="qnt_adultos"
                            validate={min0}
                            title="Adultos"
                            helper="A partir de 12 anos"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            component={Increment}
                            name="qnt_criancas"
                            validate={min0}
                            title="Crianças"
                            helper="De 2 a 11 anos"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            component={Increment}
                            name="qnt_bebes"
                            validate={min0}
                            title="Bebês"
                            helper="Até 2 anos"
                        />
                    </Grid>

                    <Grid gutter={0} container item xs={12} style={{ marginTop: 30}}>
                        <Grid gutter={0} container item xs={6} justify="flex-start">
                            <Button raised color="primary" type="button" onClick={previousPage}>
                                Anterior
                            </Button>
                        </Grid>
                        <Grid gutter={0} container item xs={6} justify="flex-end">
                            <Button raised color="primary" type="submit" disabled={invalid || submitting}>
                                Próximo
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

CompletePackagesThirdStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};


export default reduxForm({
    form: 'completePackagesForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    initialValues: {
        qnt_adultos: 0,
        qnt_criancas: 0,
        qnt_bebes: 0
    }
})(CompletePackagesThirdStep);
