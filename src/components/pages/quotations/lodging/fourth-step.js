import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import SelectInput from '../../../form-fields/select';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class LodgingFourthStep extends Component {
    render() {
        const { invalid, previousPage, pristine, submitting, handleSubmit } = this.props;

        const roomTypes = [
            { value: 'individual', text: 'Individual' },
            { value: 'casal', text: 'Casal' },
            { value: 'triplo', text: 'Triplo' },
            { value: 'quadruplo', text: 'Quadruplo' },
            { value: 'casa-apartamento', text: 'Casa/Apartamento Inteiro' },
        ];

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" paragraph>
                            Tipo de Quarto
                        </Typography>
                    </Grid>

                    <Grid item xs={12} style={{ marginTop: 10, marginBottom: 30 }}>
                        <Field
                            name="tipo_quarto"
                            component={SelectInput}
                            options={roomTypes}
                            label="Tipo de Quarto"
                        />
                    </Grid>

                    <Grid gutter={0} container item xs={12} style={{ marginTop: 30}}>
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

LodgingFourthStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'lodgingForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(LodgingFourthStep)