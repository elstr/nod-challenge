export const validateText = val => /^\S*$/.test(val);

export const validateNoSpecialChars = val => /^[a-zA-Z0-9_ ]*$/.test(val);

export const validateDate = val => {
  const year = val.split("-")[0];
  if (year >= new Date().getFullYear() || year < 1920) return false;
  return /^(?:[0-9]{2})?[0-9]{2}-[0-3]?[0-9]-[0-3]?[0-9]$/.test(val);
};

export const validateEmail = val =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    val
  );

export const validatePhone = val =>
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(val);
