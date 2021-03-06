import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../../form-fields/text';
import SelectInput from '../../../form-fields/select';
import {maskCurrency} from '../../../../utils/normalizations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class FlightsFourthStep extends Component {
    render() {
        const { previousPage, invalid, pristine, submitting, handleSubmit } = this.props;
        const options = [
            { value: 'manha', text: 'Das 06:00 às 11:59'},
            { value: 'tarde', text: 'Das 12:00 às 17:59'},
            { value: 'noite', text: 'Das 18:00 às 23:59'},
            { value: 'madrugada', text: 'Das 00:00 às 05:59'},
        ];

        const options2 = [
            { value: 0, text: 'Somente voos diretos'},
            { value: 1, text: 'Voos com até 1 parada'},
            { value: 2, text: 'Voos com 2 paradas ou mais'},
        ]

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" style={{ marginBottom: 20 }}>
                            Transporte Aéreo
                        </Typography>
                    </Grid>

                    <Grid item xs={12} >
                        <Field
                            name="periodo_voo_ida"
                            component={SelectInput}
                            options={options}
                            label="Ida"
                        />
                    </Grid>

                    <Grid item xs={12} >
                        <Field
                            name="periodo_voo_volta"
                            component={SelectInput}
                            options={options}
                            label="Volta"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" style={{ marginTop: 50, marginBottom: 20 }}>
                            Opções Avançadas
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="companias_aereas_preferenciais"
                            component={TextField}
                            label="Companhias Aéreas de Preferência"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            name="numero_paradas"
                            component={SelectInput}
                            options={options2}
                            label="Número de Paradas"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="number"
                            name="tempo_voo"
                            component={TextField}
                            label="Tempo de Voo em Horas"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="tel"
                            name="aereo_preco_desejado"
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

FlightsFourthStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'flightsForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(FlightsFourthStep)