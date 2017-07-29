import React, {Component} from 'react';
import ReactMaterialSelect from 'react-material-select'

class SelectInput extends Component {
    render() {
        const {input, label, options} = this.props;
        return (
            <ReactMaterialSelect
                {...input}
                label={label}
                resetLabel="Selecione uma opção"
            >
                {options.map(option => {
                    return <option key={`option-${option.value}`} dataValue={option.value}>{option.text}</option>
                })}
            </ReactMaterialSelect>
        );
    }
}

export default SelectInput;
