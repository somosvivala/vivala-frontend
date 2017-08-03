import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../../form-fields/text';
import Checkbox from '../../../form-fields/checkbox';
import SelectInput from '../../../form-fields/select';
import {maskCurrency} from '../../../../utils/normalizations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class CompletePackagesFifthStep extends Component {
    render() {
        const { invalid, previousPage, pristine, submitting, handleSubmit } = this.props;

        const roomTypes = [
            { value: 'individual', text: 'Individual' },
            { value: 'casal', text: 'Casal' },
            { value: 'triplo', text: 'Triplo' },
            { value: 'quadruplo', text: 'Quadruplo' },
            { value: 'casa-apartamento', text: 'Casa/Apartamento Inteiro' },
        ];


        const type1 = [
            { value: 'hostel', text: 'Hostel' },
            { value: 'pousada', text: 'Pousda' },
            { value: 'casa-ap', text: 'Casa/AP' },
            { value: 'hotel', text: 'Hotel' },
            { value: 'todos', text: 'Todos' },
        ];

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={16}>
                    <Typography type="title" color="inherit" gutterBottom>
                        Hospedagem
                    </Typography>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="hotel_ou_regiao"
                            component={TextField}
                            label="Nome do Hotel ou Regiao de preferência"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="number"
                            name="qnt_quartos"
                            component={TextField}
                            label="Quantidade de Quartos"
                        />
                    </Grid>

                    <Grid item xs={12}  style={{ marginTop: 10, marginBottom: 30 }}>
                        <Field
                            name="tipo_quarto"
                            component={SelectInput}
                            options={roomTypes}
                            label="Tipo de Quarto"
                        />
                    </Grid>

                    <Grid container gutter={0}>
                        <Grid item xs={12}>
                            <Typography type="subheading" color="inherit" paragraph>
                                Serviço incluídos desejados
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Field
                                name="cafe_manha"
                                component={Checkbox}
                                label="Café da Manhã"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="academia"
                                component={Checkbox}
                                label="Academia"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Field
                                name="piscina"
                                component={Checkbox}
                                label="Piscina"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="estacionamento"
                                component={Checkbox}
                                label="Estacionamento"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Field
                                name="wifi"
                                component={Checkbox}
                                label="Wi-Fi"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="cancelamento_gratis"
                                component={Checkbox}
                                label="Cancelamento Grátis"
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            name="hospedagem_tipo"
                            component={SelectInput}
                            options={type1}
                            label="Tipo de Hospedagem"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="hospedagem_solicitacoes"
                            component={TextField}
                            label="Solicitações Especiais"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="hospedagem_preco_desejado"
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

CompletePackagesFifthStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'completePackagesForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(CompletePackagesFifthStep)