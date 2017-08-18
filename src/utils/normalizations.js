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

export const maskCurrency = (value) => {
    let number = value.replace(/\D/g,"");

    return `R$ ${(number/100).toFixed(2).toLocaleString("pt-BR", { style: "currency" })}`;
}

export const maskTime = value => value.replace(/\D/g,"").slice(0, 4).replace(/(\d)(\d{2})$/,"$1:$2");