import React from 'react';
import PropTypes from 'prop-types';
import MuiTextField from 'material-ui/TextField';

const TextField = ({ input, meta: { touched, error }, ...other }) => (
    <MuiTextField
        error={Boolean(touched && error)}
        {...input}
        {...other}
        helperText={touched ? error : ''}
        fullWidth
    />
);

TextField.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.shape({
        touched: PropTypes.bool.isRequired,
        error: PropTypes.string,
    }).isRequired,
};

export default TextField;
