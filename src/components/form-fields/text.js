import React from 'react';
import PropTypes from 'prop-types';
import MuiTextField from 'material-ui/TextField';

const TextField = ({ input, date, type, meta: { touched, error }, ...other }) => (
    <MuiTextField
        error={Boolean(touched && error)}
        {...input}
        type={type === 'area' ? 'text' : type}
        rows={type === 'area' ? 3 : 1}
        multiline={type === 'area'}
        {...other}
        helperText={touched ? error : ''}
        fullWidth
        InputLabelProps={{
            shrink: date,
        }}
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
