import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../../form-fields/text';
import {positive} from '../../../../utils/validations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class LodgingFifthStep extends Component {
    render() {
        const { invalid, previousPage, pristine, submitting, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Grid item xs={12}>
                        <Typography type="title" color="inherit" style={{ marginBottom: 30 }}>
                            Quantidade de Quartos
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            type="number"
                            name="qnt_quartos"
                            component={TextField}
                            label="Quantidade de Quartos"
                            validate={positive}
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

LodgingFifthStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'lodgingForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(LodgingFifthStep)