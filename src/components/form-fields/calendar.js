import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ptBr from 'moment/locale/pt-br';

class CalendarInput extends Component {
    render() {
        const lang = {
            ...ptBr,
            weekdaysMin: 'D_S_T_Q_Q_S_S'.split('_')
        };
        moment.defineLocale('pt-br', lang);
        const {input} = this.props;
        return (
            <div>
                <DatePicker
                    inline={true}
                    selected={input.value}
                    onChange={input.onChange}
                    minDate={moment()}
                    dateFormat="dd/mm/YYYY"
                />
            </div>
        );
    }
}

export default CalendarInput;
