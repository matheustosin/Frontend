export const validateEmail = (value) => {

    const re = /^(?:[a-z0-9]+[.]?[a-z0-9])+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    console.log(re.test(value));
    return re.test(value);
}

