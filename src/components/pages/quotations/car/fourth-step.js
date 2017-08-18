import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Checkbox from '../../../form-fields/checkbox';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class CarFourthStep extends Component {
    render() {
        const { previousPage, invalid, submitting, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" style={{ marginBottom: 20 }}>
                            Itens Desejados
                        </Typography>
                    </Grid>

                    <Grid container gutter={0} item xs={12}>
                        <Grid item xs={6}>
                            <Field
                                name="itens_carro[ar]"
                                component={Checkbox}
                                label="Ar"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="itens_carro[radio]"
                                component={Checkbox}
                                label="Rádio"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="itens_carro[direcao_hidraulica]"
                                component={Checkbox}
                                label="Direção Hidráulica"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="itens_carro[cd_usb]"
                                component={Checkbox}
                                label="CD ou USB"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="itens_carro[vidro_eletrico]"
                                component={Checkbox}
                                label="Vidro Elétrico"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="itens_carro[quatro_portas]"
                                component={Checkbox}
                                label="Quatro Portas"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="itens_carro[automatico]"
                                component={Checkbox}
                                label="Automático"
                            />
                        </Grid>
                    </Grid>

                    <Grid gutter={0} item xs={12} container style={{ marginTop: 20}}>
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

CarFourthStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};


export default reduxForm({
    form: 'carForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    initialValues: {
        qnt_adultos: 0,
        qnt_criancas: 0,
        qnt_bebes: 0
    }
})(CarFourthStep);
