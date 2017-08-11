import translations from '../assets/translations/_all';
import _ from 'lodash';

// name = 'index.first.title'
export default (name) => {
    if (typeof name !== "string") return name;
    const translation = _.at(translations, [name]);
    return typeof translation[0] === 'undefined' ? `[${name}]` : translation[0];
}