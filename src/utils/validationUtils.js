export default function validateEmail(value) {
  const re = /^(?:[a-z0-9]+[.!#$%&'*+-/=?^_`{|}~]?)+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  return re.test(value);
}
