import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import TextField from '../../../form-fields/text';
import RadioInput from '../../../form-fields/radio';
import {maskCurrency} from '../../../../utils/normalizations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Checkbox from '../../../form-fields/checkbox';
import {change, untouch} from 'redux-form';

class CompletePackagesSixthStep extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.transporteType === 'aluguel') {
            nextProps.dispatch(change('completePackagesForm', 'carro_privativo', null));
            nextProps.dispatch(change('completePackagesForm', 'carro_compartilhado', null));
            nextProps.dispatch(change('completePackagesForm', 'van_compartilhada', null));
            nextProps.dispatch(untouch('completePackagesForm', 'carro_privativo', 'carro_compartilhado', 'van_compartilhada'));
        } else if (nextProps.transporteType === 'transfer') {
            nextProps.dispatch(change('completePackagesForm', 'economico', null));
            nextProps.dispatch(change('completePackagesForm', 'luxo', null));
            nextProps.dispatch(change('completePackagesForm', 'compacto', null));
            nextProps.dispatch(change('completePackagesForm', 'premium', null));
            nextProps.dispatch(change('completePackagesForm', 'intermediario', null));
            nextProps.dispatch(change('completePackagesForm', 'minivan', null));
            nextProps.dispatch(change('completePackagesForm', 'suv', null));
            nextProps.dispatch(change('completePackagesForm', 'ar', null));
            nextProps.dispatch(change('completePackagesForm', 'radio', null));
            nextProps.dispatch(change('completePackagesForm', 'direcao_hidraulica', null));
            nextProps.dispatch(change('completePackagesForm', 'cd_usb', null));
            nextProps.dispatch(change('completePackagesForm', 'vidro_eletrico', null));
            nextProps.dispatch(change('completePackagesForm', 'quatro_portas', null));
            nextProps.dispatch(change('completePackagesForm', 'automatico', null));
            nextProps.dispatch(untouch('completePackagesForm', 'economico', 'luxo', 'compacto', 'premium', 'intermediario', 'minivan', 'suv', 'ar', 'radio', 'direcao_hidraulica', 'cd_usb', 'vidro_eletrico', 'quatro_portas', 'automatico'));
        }
    }

    render() {
        const { invalid, previousPage, transporteType, submitting, handleSubmit } = this.props;

        const radios = [
            { value: 'transfer', label: 'Transfer Para o Hotel' },
            { value: 'aluguel', label: 'Aluguel de Carro' },
        ]

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit">
                            Transporte Interno
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Field name="carro_transporte_tipo" component={RadioInput} radios={radios} />
                    </Grid>

                    {
                        transporteType === radios[0].value &&
                            <div style={{ marginLeft: 10, marginBottom: 30 }}>
                                <Typography type="subheading" color="inherit">
                                    Tipo de transfer
                                </Typography>
                                <Grid item xs={12}>
                                    <Field
                                        name="tipos_transfer[carro_privativo]"
                                        component={Checkbox}
                                        label="Carro Privativo"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="tipos_transfer[carro_compartilhado]"
                                        component={Checkbox}
                                        label="Carro Compartilhado"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="tipos_transfer[van_compartilhada]"
                                        component={Checkbox}
                                        label="Van Compartilhada"
                                    />
                                </Grid>
                            </div>
                    }

                    {
                        transporteType === radios[1].value &&
                        <Grid style={{ marginLeft: 10 }}>
                            <Grid container gutter={0}>
                                <Grid item xs={12}>
                                    <Typography type="subheading" color="inherit">
                                        Categoria
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="categorias_carro[economico]"
                                        component={Checkbox}
                                        label="Econômico"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="categorias_carro[luxo]"
                                        component={Checkbox}
                                        label="Luxo"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="categorias_carro[compacto]"
                                        component={Checkbox}
                                        label="Compacto"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="categorias_carro[premium]"
                                        component={Checkbox}
                                        label="Premium"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="categorias_carro[intermediario]"
                                        component={Checkbox}
                                        label="Intermediário"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="categorias_carro[minivan]"
                                        component={Checkbox}
                                        label="Minivan"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="categorias_carro[suv]"
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
    const transporteType = selector(state, 'carro_transporte_tipo');
    return {
        transporteType,
    }
})(CompletePackagesSixthStep);

export default CompletePackagesSixthStep
