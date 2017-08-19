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

class LodgingSixthStep extends Component {
    render() {
        const { invalid, previousPage, pristine, submitting, handleSubmit } = this.props;

        const type1 = [
            { value: 'hostel', text: 'Hostel' },
            { value: 'pousada', text: 'Pousda' },
            { value: 'casa-ap', text: 'Casa/AP' },
            { value: 'hotel', text: 'Hotel' },
            { value: 'todos', text: 'Todos' },
        ];

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit">
                            Serviços incluídos desejados
                        </Typography>
                    </Grid>

                    <Grid container gutter={0} item xs={12}>
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
                        <Typography type="title" color="inherit"  style={{marginTop: 30}}>
                            Opções Avançadas
                        </Typography>
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

LodgingSixthStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'lodgingForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(LodgingSixthStep)