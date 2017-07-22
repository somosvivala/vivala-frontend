import React, {Component} from 'react';
import ExpeditionsHeader from "./header";
import ExpeditionsAfter from "./after";
import ExpeditionsBefore from "./before";
import trans from '../../../utils/translate';

class ExpeditionsIndex extends Component {
    render() {
        return (
            <div>
                <ExpeditionsHeader translations={trans('expeditions.header')}/>
                <ExpeditionsAfter translations={trans('expeditions.after')}/>
                <ExpeditionsBefore translations={trans('expeditions.before')}/>
            </div>
        );
    }
}

export default ExpeditionsIndex;
