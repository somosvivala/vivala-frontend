import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types';
import {email, required} from '../../utils/validations';
import Button from 'material-ui/Button';
import TextField from '../form-fields/text';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Newsletter', theme => ({
    input: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        marginBottom: 20,
    },
    button: {
        marginLeft: 10
    },
    form: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: window.screen.width < 768 ? 'column' : 'row'
    }
}));

class NewsletterForm extends Component {
    render() {
        const { classes, handleSubmit, invalid, pristine, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit} className="newsletter-form">
                <Field
                    type="text"
                    name="nome"
                    component={TextField}
                    label="Como quer ser chamado?"
                    validate={required}
                    className="newsletter-form-input"
                />
                <Field
                    type="text"
                    name="email"
                    component={TextField}
                    label="E-mail"
                    validate={email}
                    className="newsletter-form-input"
                />
                <Button type="submit"
                        raised
                        color="primary"
                        className="newsletter-form-btn"
                        disabled={invalid || pristine || submitting}
                >
                    Cadastrar
                </Button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'newsletterForm',
})(NewsletterForm)
