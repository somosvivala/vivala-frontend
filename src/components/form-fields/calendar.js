import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class CalendarInput extends Component {
    render() {
        const {input} = this.props;
        return (
            <div>
                <DatePicker
                    inline={true}
                    locale="pt"
                    selected={input.value}
                    onChange={input.onChange}
                    minDate={moment()}
                />
            </div>
        );
    }
}

CalendarInput.propTypes = {};
CalendarInput.defaultProps = {};

export default CalendarInput;
