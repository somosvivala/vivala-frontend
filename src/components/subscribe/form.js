import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import TextField from '../form-fields/text';
import {email, required} from '../../utils/validations';
import {maskTelephone} from '../../utils/normalizations';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

class SubscribeForm extends Component {
    render() {
        const { handleSubmit, submit, invalid, pristine, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit} style={{ width: '100%'}}>
                <Grid container gutter={16} justify="center">
                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="name"
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
                    <Grid gutter={0} container justify="flex-end" style={{ marginTop: 30 }}>
                        <Button raised color="accent" type="submit" disabled={invalid || pristine || submitting}>
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default reduxForm({
    form: 'subscribeForm',
})(SubscribeForm)