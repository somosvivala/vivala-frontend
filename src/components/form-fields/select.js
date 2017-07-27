import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactMaterialSelect from 'react-material-select'

class SelectInput extends Component {
    render() {
        const {input, label} = this.props;
        return (
            <ReactMaterialSelect
                {...input}
                label={label}
            />
        );
    }
}

export default SelectInput;
