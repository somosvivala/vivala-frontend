import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types';
import {email, required} from '../../utils/validations';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from '../form-fields/text';
import {maskTelephone} from '../../utils/normalizations';

class ContactForm extends Component {
    render() {
        const { handleSubmit, invalid, pristine, submitting } = this.props;

        return (
            <div>
                <Typography type="subheading" gutterBottom>Contato</Typography>
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
                                type="text"
                                name="telefone"
                                component={TextField}
                                label="Telefone"
                                normalize={maskTelephone}
                                validate={required}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                type="text"
                                name="nome_empresa"
                                component={TextField}
                                label="Nome da Empresa"
                                validate={required}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                type="text"
                                name="numero_funcionarios"
                                component={TextField}
                                label="Número de Funcionários"
                                validate={required}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                type="text"
                                name="mensagem"
                                component={TextField}
                                label="Mensagem"
                                validate={required}
                                custom={{
                                    multiline: true,
                                    rows: 4
                                }}
                            />
                        </Grid>
                        <Grid gutter={0} container justify="flex-end" style={{ marginTop: 30 }}>
                            <Button raised color="accent" type="submit" disabled={invalid || pristine || submitting}>
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
    classes: PropTypes.object.isRequired
};

export default reduxForm({
    form: 'newsletterForm',
})(ContactForm);