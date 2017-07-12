import translations from '../assets/translations/_all';
import _ from 'lodash';

// name = 'index.first.title'
export default (name) => {
    if (typeof name !== "string") return name;
    const translation = _.at(translations, [name]);
    return translation ? translation : `[${name}]`;
}