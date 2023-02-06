import * as yup from "yup";

const addressRegex =
  /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;

const creditRegex =
  /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/;

const dateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

export const ValidateSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  fristName: yup
    .string()
    .min(3, "Frist name must be at least 3 characters long")
    .max(16, "Frist name must be less than 16 characters")
    .required("Required"),
  lastName: yup
    .string()
    .min(3, "Last name must be at least 3 characters long")
    .max(16, "Last name must be less than 16 characters")
    .required("Required"),
  city: yup
    .string()
    .min(3, "City must be at least 3 characters long")
    .max(16, "City must be less than 16 characters")
    .required("Required"),
  address: yup
    .string()
    .min(5)
    .matches(addressRegex, { message: "Please enter a valid address" })
    .required("Required"),
});
export const CreditSchema = yup.object().shape({
  cvc: yup
    .string()
    .min(3, "CVC must be at least 3 characters long")
    .max(4, "CVC must be less than 4 characters")
    .required("Required"),
  date: yup
    .string()
    .matches(dateRegex, { message: "Please enter a valid date" })
    .max(5, "Frist name must be less than 5 characters")
    .required("Required"),
  credit: yup
    .string()
    .matches(creditRegex, { message: "Please enter a valid credit card" })
    .max(16, "Last name must be less than 16 characters")
    .required("Required"),
});
