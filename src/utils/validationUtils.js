export const validateEmail = (value) => {

    const re = /^(?:[a-zA-Z0-9]+\.)+[A-Za-z]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    console.log(re.test(value));
    return re.test(value);
}

