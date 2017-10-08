import _ from 'lodash';

export const email = value => !value || !/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm.test(value)
            ? 'E-mail inválido!'
            : undefined;

export const required = value => (value ? undefined : 'Campo obrigatório!');

export const min = min => value => (parseInt(min, 10) <= parseInt(value, 10) ? undefined : `Este campo não pode ser menor que ${min}!`);

export const number = value => (_.isNumber(value) ? undefined : 'Número inválido!');

export const time = value => !value || /([01]\d|2[0-3]):([0-5]\d)/.test(value) ? undefined : 'Formato de horário incorreto! Formato: "HH:MM"';

export const positive = value => (value > 0 ? undefined : 'O valor mínimo para este campo é 1!');