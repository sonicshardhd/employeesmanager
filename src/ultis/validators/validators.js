export const required = value => {
    if (value) return undefined;
    return 'Field cannot be empty';
}

export const emailValidation = value => {
    const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value.match(mailFormat)) return undefined;
    return 'Please enter a valid E-mail.'
}
