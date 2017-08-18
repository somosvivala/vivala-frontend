import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../../form-fields/text';
import Checkbox from '../../../form-fields/checkbox';
import {maskCurrency} from '../../../../utils/normalizations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class TripFourthStep extends Component {
    render() {
        const { previousPage, invalid, pristine, submitting, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" paragraph>
                            Interesses
                        </Typography>
                    </Grid>

                    <Grid container gutter={0} style={{ marginBottom: 20 }}>
                        <Grid item xs={6}>
                            <Field
                                name="passeios_interessses[aventura]"
                                component={Checkbox}
                                label="Aventura"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="passeios_interessses[exclusivo]"
                                component={Checkbox}
                                label="Exclusivo"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Field
                                name="passeios_interessses[city_tour]"
                                component={Checkbox}
                                label="City Tour"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="passeios_interessses[familia]"
                                component={Checkbox}
                                label="Família"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Field
                                name="passeios_interessses[comer_beber]"
                                component={Checkbox}
                                label="Comer e Beber"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="passeios_interessses[natureza]"
                                component={Checkbox}
                                label="natureza"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="passeios_interessses[cultural_local]"
                                component={Checkbox}
                                label="Cultura + Local"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="passeios_interessses[romantico]"
                                component={Checkbox}
                                label="Romântico"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="passeios_interessses[esporte]"
                                component={Checkbox}
                                label="Esporte"
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" paragraph>
                            Opções Avançadas
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="preco_desejado"
                            component={TextField}
                            label="Preço Máximo"
                            normalize={maskCurrency}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="area"
                            name="solicitacoes"
                            component={TextField}
                            label="Solicitações Especiais"
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

TripFourthStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'tripForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(TripFourthStep)