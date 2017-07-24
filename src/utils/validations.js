export const email = value => !value || !/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm.test(value)
            ? 'E-mail inválido!'
            : undefined;

export const required = value => (value ? undefined : 'Campo obrigatório!');