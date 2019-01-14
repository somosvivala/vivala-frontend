import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import textInput from '../../../form-fields/text';
import {required} from '../../../../utils/validations';
import {maskTelephone} from '../../../../utils/normalizations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class InsuranceFifthStep extends Component {
    render() {
        const { previousPage, invalid, pristine, submitting, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" style={{ marginBottom: 30 }}>
                            Dados Para Contato
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            component={textInput}
                            name="nome_completo"
                            label="Nome Completo"
                            validate={required}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            type="text"
                            component={textInput}
                            name="nome_preferencia"
                            label="Como quer ser chamado?"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="email"
                            component={textInput}
                            name="email"
                            label="E-mail"
                            validate={required}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="tel"
                            component={textInput}
                            name="telefone"
                            label="Telefone"
                            normalize={maskTelephone}
                            validate={required}
                        />
                    </Grid>

                    <Grid gutter={0} container item xs={12} style={{ marginTop: 30}}>
                        <Grid gutter={0} container item xs={6} justify="flex-start">
                            <Button raised color="primary" type="button" onClick={previousPage}>
                                Anterior
                            </Button>
                        </Grid>
                        <Grid gutter={0} container item xs={6} justify="flex-end">
                            
                            <Button raised color="primary" type="submit" disabled={invalid || pristine || submitting} onClick={handleSubmit(data => {

                                data.token_rdstation = document.getElementsByName('token_rdstation')[0].value;
                                data.identificador = "/cotacao/seguro";

                                let dataRDStation = Object.keys(data).map(function(idx) {
                                    var valorCampo = data[idx];

                                    //se for um desses, precisamos mapear os valores.
                                    if (
                                        idx  === 'hospedagem_servicos' || 
                                        idx === 'tipos_transfer' || 
                                        idx === 'passeios_interesses' ||
                                        idx === 'categorias_carro' ||
                                        idx === 'itens_carro'
                                    ){
                                        valorCampo = Object.keys(data[idx]).toString();
                                    }                                    

                                    return {
                                        name: idx,
                                        value: valorCampo
                                    }
                                });

                                window.RdIntegration.post(dataRDStation);
                                this.props.onSubmit(data);

                            })}>
                                Enviar
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

InsuranceFifthStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'insuranceForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(InsuranceFifthStep)
