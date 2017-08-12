import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import CalendarInput from '../../../form-fields/calendar';
import ButtonBoolean from '../../../form-fields/button-boolean';
import {required, number} from '../../../../utils/validations';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class CruiseSecondStep extends Component {
    render() {
        const { previousPage, invalid, pristine, submitting, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="quotation-form">
                <Grid container gutter={24}>
                    <Typography type="title" color="inherit" style={{ marginBottom: 30 }}>
                        Quando você quer ir?
                    </Typography>

                    <Field
                        type="text"
                        component={CalendarInput}
                        name="data_ida"
                        validate={required}
                    />

                    <Typography type="title" color="inherit" style={{ marginTop: 40 }} gutterBottom>
                        Quando você quer voltar?
                    </Typography>
                    <Typography type="body1" color="inherit" style={{ marginBottom: 30 }}>
                        Você pode pular este preenchimento caso não queira comprar a volta
                    </Typography>

                    <Field
                        type="text"
                        component={CalendarInput}
                        name="data_volta"
                    />

                    <div style={{ marginTop: 40, marginBottom: 30 }}>
                        <Typography type="title" color="inherit" gutterBottom>
                            As datas são flexíveis?
                        </Typography>
                        <Typography type="body1" color="inherit">
                            Nossa equipe irá planejar o mais próximo das datas sugeridas, caso afirmativo,
                            Caso contrário, manteremos as datas que você selecionou.
                        </Typography>
                    </div>

                    <div style={{ margin: '0 auto'}}>
                        <Field
                            type="text"
                            component={ButtonBoolean}
                            name="datas_flexiveis"
                            validate={number}
                        />
                    </div>

                    <Grid gutter={0} container style={{ marginTop: 30}}>
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

CruiseSecondStep.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'cruiseForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    initialValues: {
        "datas_flexiveis": ''
    },
    keepDirtyOnReinitialize: true,
})(CruiseSecondStep)