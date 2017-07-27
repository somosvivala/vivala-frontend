import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import TextField from '../../../form-fields/text';
import {required} from '../../../../utils/validations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import _ from 'lodash';

class CompletePackagesSixthStep extends Component {

    renderFields(total) {
        return _.range(total).map((item, key) => {
            return (
                <Grid gutter={8} container key={`passageiro-${key}`} style={{ padding: 10, marginBottom: 30 }}>
                    <Typography type="subheading" color="inherit">
                        Passageiro {key+1}
                    </Typography>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="seguro_viagem_nome[]"
                            component={TextField}
                            label="Nome Completo"
                            validate={required}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="text"
                            name="seguro_viagem_data_nascimento[]"
                            component={TextField}
                            label="Data de Nascimento"
                            validate={required}
                        />
                    </Grid>
                </Grid>
            )
        })
    }

    render() {
        const { invalid, total, previousPage, pristine, submitting, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '60px auto 0 auto' }}>
                <Grid container gutter={16}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" paragraph>
                            Seguro Viagem
                        </Typography>
                    </Grid>

                    {
                        total > 0 ?
                            <Grid container gutter={0}>

                                {this.renderFields(total)}

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
                            :
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography type="body1" color="inherit">
                                        Você não selecionou acompanhantes. Siga para a próxima etapa.
                                    </Typography>
                                </Grid>
                                <Grid gutter={0} container style={{ marginTop: 30}}>
                                    <Grid gutter={0} container item xs={6} justify="flex-start">
                                        <Button raised color="primary" type="submit" onClick={previousPage}>
                                            Anterior
                                        </Button>
                                    </Grid>
                                    <Grid gutter={0} container item xs={6} justify="flex-end">
                                        <Button raised color="primary" type="submit" disabled={invalid || submitting}>
                                            Próximo
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                    }
                </Grid>
            </form>
        );
    }
}

CompletePackagesSixthStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

CompletePackagesSixthStep = reduxForm({
    form: 'completePackagesForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(CompletePackagesSixthStep);


const selector = formValueSelector('completePackagesForm')
CompletePackagesSixthStep = connect(state => {
    const adultos = selector(state, 'qnty_adultos');
    const criancas = selector(state, 'qnty_criancas');
    const bebes = selector(state, 'qnty_bebes');
    return {
        total: parseInt(adultos, 10) + parseInt(criancas, 10) + parseInt(bebes, 10),
    }
})(CompletePackagesSixthStep);

export default CompletePackagesSixthStep