import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Checkbox from '../../../form-fields/checkbox';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class CarThirdStep extends Component {
    render() {
        const { previousPage, invalid, submitting, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" style={{ marginBottom: 20 }}>
                            Categoria
                        </Typography>
                    </Grid>

                    <Grid container gutter={0} item xs={12}>
                        <Grid item xs={6}>
                            <Field
                                name="categorias_carro[economico]"
                                component={Checkbox}
                                label="Econômico"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="categorias_carro[luxo]"
                                component={Checkbox}
                                label="Luxo"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="categorias_carro[compacto]"
                                component={Checkbox}
                                label="Compacto"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="categorias_carro[premium]"
                                component={Checkbox}
                                label="Premium"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="categorias_carro[intermediario]"
                                component={Checkbox}
                                label="Intermediário"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="categorias_carro[minivan]"
                                component={Checkbox}
                                label="Minivan"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="categorias_carro[suv]"
                                component={Checkbox}
                                label="SUV"
                            />
                        </Grid>
                    </Grid>

                    <Grid gutter={0} item xs={12} container style={{ marginTop: 20}}>
                        <Grid gutter={0} container item xs={6} justify="flex-start">
                            <Button raised color="primary" type="button" onClick={previousPage}>
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
            </form>
        );
    }
}

CarThirdStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};


export default reduxForm({
    form: 'carForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    initialValues: {
        qnt_adultos: 0,
        qnt_criancas: 0,
        qnt_bebes: 0
    }
})(CarThirdStep);
