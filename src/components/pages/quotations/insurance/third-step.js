import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FieldArray, reduxForm } from 'redux-form';
import arrayInput from '../../../form-fields/array';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class InsuranceThirdStep extends Component {
    render() {
        const { previousPage, invalid, submitting, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Typography type="title" color="inherit" style={{ marginBottom: 30 }}>
                        Idades dos Segurados
                    </Typography>

                    <Grid item xs={12}>
                        <FieldArray
                            type="date"
                            name="datas_nascimento_seguro_viagem"
                            label="Passageiro"
                            component={arrayInput}
                        />
                    </Grid>

                    <Grid gutter={0} container style={{ marginTop: 30}}>
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

InsuranceThirdStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};


export default reduxForm({
    form: 'insuranceForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    initialValues: {
        qnt_adultos: 0,
        qnt_criancas: 0,
        qnt_bebes: 0
    }
})(InsuranceThirdStep);
