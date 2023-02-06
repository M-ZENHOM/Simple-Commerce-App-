import { useField } from "formik";
import React from "react";
import styled from "styled-components";

const MyInput = styled.input`
  width: auto;
  border: none;
  border-bottom: 1px solid #3f51b5;
  outline: none;
  padding: 10px;
  margin-bottom: 20px;
  &.input-error {
    border-color: red;
  }
`;

const ErrorMsg = styled.div`
  color: red;
  margin-top: -10px;
  margin-left: 10px;
`;

export const CustomInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <MyInput
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <ErrorMsg>{meta.error}</ErrorMsg>}
    </>
  );
};
