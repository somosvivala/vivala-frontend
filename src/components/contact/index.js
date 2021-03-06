import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types';
import {email, required} from '../../utils/validations';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import TextField from '../form-fields/text';
import {maskTelephone} from '../../utils/normalizations';

class ContactForm extends Component {
    render() {
        const { type, handleSubmit, invalid, pristine, submitting } = this.props;
        const corporative = type === 'corporative';
        const agents = type === 'agents';
        const common = type === 'common';

        return (
            <div>
                { !common && <Typography type="title" align="center" gutterBottom style={{ textTransform: 'uppercase'}}>Contato</Typography> }
                <form onSubmit={handleSubmit} style={{ width: '100%'}}>
                    <Grid container gutter={16} justify="center">
                        <Grid item xs={12}>
                            <Field
                                type="text"
                                name="nome_completo"
                                component={TextField}
                                label="Nome"
                                validate={required}
                            />
                        </Grid>

                        { (agents || common) &&
                            <Grid item xs={12}>
                                <Field
                                    type="text"
                                    name="nome_preferencia"
                                    component={TextField}
                                    label="Como quer ser chamado?"
                                    validate={required}
                                />
                            </Grid>
                        }

                        <Grid item xs={12}>
                            <Field
                                type="text"
                                name="email"
                                component={TextField}
                                label="Email"
                                validate={email}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Field
                                type="tel"
                                name="telefone"
                                component={TextField}
                                label="Telefone"
                                normalize={maskTelephone}
                                validate={required}
                            />
                        </Grid>
                        { (corporative || common) &&
                            <Grid item xs={12}>
                                <Field
                                    type="area"
                                    name="mensagem"
                                    component={TextField}
                                    label="Mensagem"
                                    validate={required}
                                />
                            </Grid>
                        }

                        <Grid gutter={0} container justify="flex-end" style={{ marginTop: 30 }}>

                            <Button raised color="primary" type="submit" disabled={invalid || pristine || submitting} onClick={handleSubmit(data => {

                                data.token_rdstation = document.getElementsByName('token_rdstation')[0].value;
                                data.identificador = '/contato';
                                if (corporative) {
                                    data.identificador = '/corporativo';
                                }
                                if (agents) {
                                    data.identificador = '/agentes/seja-um-agente';
                                }

                                let dataRDStation = Object.keys(data).map(function(idx) {
                                    var valorCampo = data[idx];

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
                </form>
            </div>
        );
    }
}

ContactForm.propTypes = {
    type: PropTypes.string.isRequired
};

export default reduxForm({
    form: 'newsletterForm',
})(ContactForm);
