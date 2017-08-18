import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../../form-fields/text';
import {time} from '../../../../utils/validations';
import {maskTime} from '../../../../utils/normalizations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class HighwayFourthStep extends Component {
    render() {
        const { previousPage, invalid, pristine, submitting, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" style={{ marginBottom: 20 }}>
                            Opções Avançadas
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="hora_ida"
                            component={TextField}
                            placeholder="HH:MM"
                            label="Horário de Ida"
                            validate={time}
                            normalize={maskTime}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="hora_volta"
                            component={TextField}
                            placeholder="HH:MM"
                            label="Horário de Volta"
                            validate={time}
                            normalize={maskTime}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="companias_preferenciais"
                            component={TextField}
                            label="Companhias de Preferência"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="number"
                            name="duracao_maxima"
                            component={TextField}
                            label="Tempo Máximo de Duração"
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

HighwayFourthStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'highwayForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(HighwayFourthStep)