export const maskTelephone = (value) => {
    if (!value) {
        return value
    }

    let onlyNumbers = value.replace(/\D/g,"");
    if (onlyNumbers.length > 11) {
        onlyNumbers = onlyNumbers.slice(0, 11);
    }

    return onlyNumbers.replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2");
}