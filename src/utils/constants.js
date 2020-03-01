import {
    validateDate,
    validateEmail,
    validatePhone,
    validateText,
    validateNoSpecialChars
  } from "./validations";
  
  export const INPUTS = {
    "short-text": {
      inputType: "text",
      validation: validateText
    },
    "long-text": {
      inputType: "text",
      validation: validateNoSpecialChars
    },
    date: {
      inputType: "date",
      validation: validateDate
    },
    email: {
      inputType: "email",
      validation: validateEmail,
      errorMessage: "Format must be a valid email"
    },
    "phone-number": {
      inputType: "tel",
      validation: validatePhone,
      errorMessage: `Formats allowed: 
      123-456-7890
      (123) 456-7890
      123 456 7890
      123.456.7890
      +91 (123) 456-7890`
    }
  };