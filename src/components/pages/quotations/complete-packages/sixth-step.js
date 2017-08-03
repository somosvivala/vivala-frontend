import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import TextField from '../../../form-fields/text';
import {maskCurrency} from '../../../../utils/normalizations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Checkbox from '../../../form-fields/checkbox';

class CompletePackagesSixthStep extends Component {
    render() {
        const { invalid, previousPage, hasTransfer, hasAluguel, submitting, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={16}>
                    <Typography type="title" color="inherit">
                        Transporte Interno
                    </Typography>

                    <Grid item xs={12}>
                        <Field
                            name="transfer"
                            component={Checkbox}
                            label="Transfer Para o Hotel"
                        />
                    </Grid>
                    {
                        hasTransfer &&
                            <div style={{ marginLeft: 10, marginBottom: 30 }}>
                                <Typography type="subheading" color="inherit">
                                    Tipo de transfer
                                </Typography>
                                <Grid item xs={12}>
                                    <Field
                                        name="carro_privativo"
                                        component={Checkbox}
                                        label="Carro Privativo"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="carro_compartilhado"
                                        component={Checkbox}
                                        label="Carro Compartilhado"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="van_compartilhada"
                                        component={Checkbox}
                                        label="Van Compartilhada"
                                    />
                                </Grid>
                            </div>
                    }

                    <Grid item xs={12}>
                        <Field
                            name="aluguel"
                            component={Checkbox}
                            label="Aluguel de Carro"
                        />
                    </Grid>
                    {
                        hasAluguel &&
                        <Grid style={{ marginLeft: 10 }}>
                            <Grid container gutter={0}>
                                <Grid item xs={12}>
                                    <Typography type="subheading" color="inherit">
                                        Categoria
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="economico"
                                        component={Checkbox}
                                        label="Econômico"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="luxo"
                                        component={Checkbox}
                                        label="Luxo"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="compacto"
                                        component={Checkbox}
                                        label="Compacto"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="premium"
                                        component={Checkbox}
                                        label="Premium"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="intermediario"
                                        component={Checkbox}
                                        label="Intermediário"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="minivan"
                                        component={Checkbox}
                                        label="Minivan"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="suv"
                                        component={Checkbox}
                                        label="SUV"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container gutter={0}>
                                <Grid item xs={12}>
                                    <Typography type="subheading" color="inherit">
                                        Itens Desejados
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="ar"
                                        component={Checkbox}
                                        label="Ar"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="radio"
                                        component={Checkbox}
                                        label="Rádio"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="direcao_hidraulica"
                                        component={Checkbox}
                                        label="Direção Hidráulica"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="cd_usb"
                                        component={Checkbox}
                                        label="CD ou USB"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="vidro_eletrico"
                                        component={Checkbox}
                                        label="Vidro Elétrico"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="quatro_portas"
                                        component={Checkbox}
                                        label="Quatro Portas"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="automatico"
                                        component={Checkbox}
                                        label="Automático"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    }

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="transporte_interno_solicitacoes"
                            component={TextField}
                            label="Solicitações Especiais"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="transporte_interno_preco_desejado"
                            component={TextField}
                            label="Preço Máximo"
                            normalize={maskCurrency}
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

CompletePackagesSixthStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

CompletePackagesSixthStep = reduxForm({
    form: 'completePackagesForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(CompletePackagesSixthStep);


const selector = formValueSelector('completePackagesForm')
CompletePackagesSixthStep = connect(state => {
    const hasTransfer = selector(state, 'transfer');
    const hasAluguel = selector(state, 'aluguel');
    return {
        hasTransfer,
        hasAluguel,
    }
})(CompletePackagesSixthStep);

export default CompletePackagesSixthStep