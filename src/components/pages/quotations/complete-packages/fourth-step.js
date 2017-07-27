import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../../form-fields/text';
import {required} from '../../../../utils/validations';
import {maskCurrency} from '../../../../utils/normalizations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class CompletePackagesThirdStep extends Component {
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
            <form onSubmit={handleSubmit} style={{ width: 400, margin: '60px auto 0 auto' }}>
                <Grid container gutter={16}>
                    <Typography type="title" color="inherit">
                        Transporte Aéreo
                    </Typography>

                    <Grid item xs={12}>
                        <Field name="aeroporto_origem"
                               component="select"
                        >
                            <option value="" disabled>Selecione uma opção</option>
                            {options.map(option =>
                                <option value={option.value} key={option.value}>
                                    {option.text}
                                </option>
                            )}
                        </Field>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="aeroporto_origem"
                            component={TextField}
                            label="Aeroporto de Origem"
                            validate={required}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="aeroporto_origem"
                            component={TextField}
                            label="Aeroporto de Origem"
                            validate={required}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="aeroporto_destino"
                            component={TextField}
                            label="Aeroporto de Destino"
                            validate={required}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="companias_aereas_preferenciais"
                            component={TextField}
                            label="Companhias Aéreas de Preferência"
                            validate={required}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field name="numero_paradas"
                               component="select"
                        >
                            <option value="" disabled>Selecione uma opção</option>
                            {options2.map(option =>
                                <option value={option.value} key={option.value}>
                                    {option.text}
                                </option>
                            )}
                        </Field>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="number"
                            name="tempo_voo"
                            component={TextField}
                            label="Tempo de Voo em Horas"
                            validate={required}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="aereo_preco_desejado"
                            component={TextField}
                            label="Preço Máximo"
                            validate={required}
                            normalize={maskCurrency}
                        />
                    </Grid>

                    <Grid gutter={0} container style={{ marginTop: 30}}>
                        <Grid gutter={0} container item xs={6} justify="flex-start">
                            <Button raised color="primary" type="submit" onClick={previousPage}>
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

CompletePackagesThirdStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'completePackagesForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(CompletePackagesThirdStep)