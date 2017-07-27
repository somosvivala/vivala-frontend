export const email = value => !value || !/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm.test(value)
            ? 'E-mail inválido!'
            : undefined;

export const required = value => (value ? undefined : 'Campo obrigatório!');

export const notNull = value => (value !== null ? undefined : 'Este campo deve ser preenchido!');

export const min = min => value => (parseInt(min, 10) <= parseInt(value, 10) ? undefined : `Este campo não pode ser menor que ${min}`);